'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingCart, Users, Settings, Package } from "lucide-react"

const links = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/users", label: "Customers", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export default function SideNav() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col min-h-screen">
      <div className="p-6 text-2xl font-bold border-b border-gray-800">Admin Panel</div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center space-x-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                ? "bg-green-700 text-white"
                : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}>
              <link.icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

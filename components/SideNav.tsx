'use client'

<<<<<<< HEAD
import { useState } from "react"
import { Nav } from "@/components/ui/nav"
import { ChevronsLeft, ChevronsRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/constants/nav-links"

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24 ">
      <div className="absolute right-[-20px] top-7">
        <Button onClick={toggleSidebar} variant="secondary" className="rounded-full p-2">
          {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
        </Button>
      </div>
      <Nav isCollapsed={isCollapsed} links={navLinks} />
    </div>
  )
}
=======
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingCart, Users, Settings } from "lucide-react"

const links = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { href: "/admin/users", label: "Customers", icon: Users },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export default function SideNav() {
  const pathname = usePathname()

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-2xl font-bold">Admin</div>
      <nav className="flex-1 px-4 py-2 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center space-x-3 px-4 py-2 rounded-md text-lg font-medium transition-colors ${isActive
                  ? "bg-gray-700 text-white"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}>
              <link.icon className="h-6 w-6" />
              <span>{link.label}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
>>>>>>> main

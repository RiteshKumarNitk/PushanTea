"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, Home, ShoppingBag, Info, ImageIcon, Phone, ChevronRight, Newspaper } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: ShoppingBag, label: "Shop All", href: "/shop" },
    { icon: Info, label: "About Us", href: "/about" },
    { icon: ImageIcon, label: "Gallery", href: "/gallery" },
    { icon: Newspaper, label: "Blog", href: "/blog" },
    { icon: Phone, label: "Contact", href: "/contact" },
    
  ]

  const categories = [
    "Black Tea",
    "Green Tea",
    "Herbal Tea",
    "Chai Tea",
    "Oolong Tea",
    "White Tea",
    "Tea Gifts",
    "Samplers",
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Side Menu */}
          <motion.div
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            exit={{ x: -400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#00492C]">PUSHAN®</span>
                  <span className="text-sm text-[#00492C]/70">Feel Alive</span>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-500 hover:text-gray-700">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Main Navigation */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={onClose}>
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="flex items-center">
                          <item.icon className="h-5 w-5 text-[#00492C] mr-3" />
                          <span className="text-gray-700 group-hover:text-[#00492C] font-medium">{item.label}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#00492C]" />
                      </div>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Tea Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tea Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category}
                      href={`/shop?category=${category.toLowerCase().replace(" ", "-")}`}
                      onClick={onClose}
                    >
                      <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                        <span className="text-gray-600 group-hover:text-[#00492C]">{category}</span>
                        <ChevronRight className="h-3 w-3 text-gray-400 group-hover:text-[#00492C]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>📞 +91-11-4084-5000</p>
                  <p>✉️ hello@PUSHAN.com</p>
                  <p>🕒 Mon-Fri: 9AM-6PM IST</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

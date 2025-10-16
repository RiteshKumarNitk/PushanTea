'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import { motion } from "framer-motion"
import { SideMenu } from "./side-menu"
import Link from "next/link"
import { CartDrawer } from "./cart-drawer"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white shadow-md ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.img
                src="/logo2.png"
                alt="PUSHAAN Logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Shop", href: "/shop" },
                { name: "Bulk Order", href: "/bulkshop" },
                { name: "Career", href: "/career" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-[#00492C] font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-2">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSideMenuOpen(true)}
                className="md:hidden text-black"
              >
                <Menu className="h-5 w-5" />
              </Button>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Side Menu */}
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

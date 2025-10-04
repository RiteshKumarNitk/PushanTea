"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Search, ShoppingCart, User } from "lucide-react"
import { motion } from "framer-motion"
import { SideMenu } from "./side-menu"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white text-[#00492C] shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={() => setIsSideMenuOpen(true)}
                className={`font-medium transition-colors ${
                  isScrolled ? "text-[#00492C] hover:text-[#00492C]" : "text-white hover:text-white"
                }`}
              >
                <Menu className="h-4 w-4 mr-2" />
                SHOP
              </Button>
            </div>

            <Link href="/" className="flex items-center">
  <motion.img
    src="/logo2.png"
    alt="PUSHAAN Logo"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="h-12 w-auto" // adjust height as needed
  />
</Link>


            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors ${
                  isScrolled ? "text-[#00492C] hover:text-[#00492C]" : "text-white hover:text-white"
                }`}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors ${
                  isScrolled ? "text-[#00492C] hover:text-[#00492C]" : "text-white hover:text-white"
                }`}
              >
                <User className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors ${
                  isScrolled ? "text-[#00492C] hover:text-[#00492C]" : "text-white hover:text-white"
                }`}
              >
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
    </>
  )
}

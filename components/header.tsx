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

            <Link href="/" className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`text-2xl font-bold transition-colors ${isScrolled ? "text-[#00492C]" : "text-[#00492C]"}`}
              >
                PUSHAN®
              </motion.div>
              <div
                className={`text-xs -mt-1 transition-colors ${isScrolled ? "text-[#00492C]/70" : "text-[#00492C]/70"}`}
              >
                Feel Alive
              </div>
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

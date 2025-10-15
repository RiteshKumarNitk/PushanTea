'use client'

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

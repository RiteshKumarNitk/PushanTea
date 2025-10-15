'use client'

import { Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      <div></div>
      <div className="flex items-center space-x-4">
        <Bell className="h-6 w-6 cursor-pointer" />
        <User className="h-6 w-6 cursor-pointer" />
      </div>
    </header>
  )
}
"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00492C] px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#00492C] mb-6">
          Login
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-[#00492C] focus:border-[#00492C] outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-[#00492C] focus:border-[#00492C] outline-none"
            />
          </div>

          <Button
            type="button"
            className="w-full bg-[#00492C] hover:bg-[#00613f] text-white rounded-lg"
          >
            Login
          </Button>
        </form>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#00492C] font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

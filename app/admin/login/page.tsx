'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// This is a mock login page. 
// In a real application, you would have a form that collects user credentials 
// and sends them to your authentication server.

export default function LoginPage() {
  const router = useRouter()
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleLogin = async () => {
    setIsLoggingIn(true)
    // Simulate an API call to your authentication server
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // On successful login, you would typically store the auth token in 
    // localStorage or a cookie and then redirect to the admin dashboard.
    
    // For this example, we'll just redirect.
    router.replace('/admin')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center">Admin Login</h1>
        <p className="text-center text-gray-400">For demonstration purposes, you can log in without credentials.</p>
        
        <button
          onClick={handleLogin}
          disabled={isLoggingIn}
          className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          {isLoggingIn ? 'Logging in...' : 'Log In'}
        </button>
      </div>
    </div>
  )
}

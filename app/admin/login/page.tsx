'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { toast } = useToast()
  const imageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A simple fade-in animation
    if (formRef.current) {
        formRef.current.style.opacity = '1';
        formRef.current.style.transition = 'opacity 1s ease-in-out';
    }
  }, []);

  const handleLogin = () => {
    if (email === 'admin@pushaan.com' && password === 'admin123') {
      localStorage.setItem('isAuthenticated', 'true')
      router.push('/admin')
    } else {
        toast({
            title: "Invalid Credentials",
            description: "Please check your email and password and try again.",
            variant: "destructive"
        })
    }
  }

  return (
      <div className="flex min-h-screen">
        <div ref={imageRef} className="hidden lg:block lg:w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/premium-tea-packages-with-colorful-boxes-and-a-cer.jpg')" }}>
        </div>
        <div ref={formRef} style={{opacity: 0}} className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
          <div className="max-w-md w-full">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800">Admin Sign In</h1>
              <p className="text-gray-500 mt-2">Welcome back to the Pushaan Tea Dashboard.</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@pushaan.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="mt-8">
              <Button className="w-full bg-amber-700 hover:bg-amber-800" onClick={handleLogin}>Sign In</Button>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/" className="text-sm text-gray-500 hover:underline">
                &larr; Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

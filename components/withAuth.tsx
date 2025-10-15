'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function withAuth(Component: any) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter()

    useEffect(() => {
      const isAuthenticated = localStorage.getItem('isAuthenticated')
      if (!isAuthenticated) {
        router.push('/admin/login')
      }
    }, [router])

    return <Component {...props} />
  }
}

'use client'

import { usePathname } from 'next/navigation';
import withAuth from '@/components/withAuth';
import SideNav from '@/components/SideNav';
import { HeaderAdmin } from '@/components/HeaderAdmin';
import { Toaster } from '@/components/ui/toaster';

// This is the actual layout for protected admin pages
function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white text-black flex">
      <SideNav />
      <div className="w-full flex flex-col">
        <HeaderAdmin />
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
      <Toaster />
    </div>
  );
}

// Wrap it with the authentication HOC
const AuthenticatedLayout = withAuth(ProtectedAdminLayout);

// This is the root layout for the /admin segment
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If the user is on the login page, don't render the protected layout
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // For all other pages under /admin, render the authenticated layout
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}

'use client'

import { usePathname } from 'next/navigation';
import withAuth from '@/components/withAuth';
import SideNav from '@/components/SideNav';
<<<<<<< HEAD
<<<<<<< HEAD
import Header from '@/components/Header';
=======
import { HeaderAdmin } from '@/components/HeaderAdmin';
>>>>>>> 7d0df943d536d488f1d31043d7343562e3b1c213
import { Toaster } from '@/components/ui/toaster';

// This is the actual layout for protected admin pages
=======
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

>>>>>>> main
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

<<<<<<< HEAD
// Wrap it with the authentication HOC
const AuthenticatedLayout = withAuth(ProtectedAdminLayout);

// This is the root layout for the /admin segment
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // If the user is on the login page, don't render the protected layout
=======
const AuthenticatedLayout = withAuth(ProtectedAdminLayout);

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

>>>>>>> main
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

<<<<<<< HEAD
  // For all other pages under /admin, render the authenticated layout
=======
>>>>>>> main
  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}

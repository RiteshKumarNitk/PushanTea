'use client'

import { usePathname } from 'next/navigation';
import withAuth from '@/components/withAuth';
import SideNav from '@/components/SideNav';
import { Header } from '@/components/header';
import { Toaster } from '@/components/ui/toaster';

function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white text-black flex">
      <SideNav />
      <div className="w-full flex flex-col">
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </div>
      <Toaster />
    </div>
  );
}

const AuthenticatedLayout = withAuth(ProtectedAdminLayout);

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  return <AuthenticatedLayout>{children}</AuthenticatedLayout>;
}

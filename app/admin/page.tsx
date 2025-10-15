'use client'

import withAuth from '@/components/withAuth';

function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
    </div>
  );
}

export default withAuth(AdminDashboard);

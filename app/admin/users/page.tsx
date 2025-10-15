'use client'

import withAuth from '@/components/withAuth';

function UsersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Users</h1>
      <p>Here you can manage all the users.</p>
    </div>
  );
}

export default withAuth(UsersPage);

'use client'

import withAuth from '@/components/withAuth';

function OrdersPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Orders</h1>
      <p>Here you can manage all the orders.</p>
    </div>
  );
}

export default withAuth(OrdersPage);

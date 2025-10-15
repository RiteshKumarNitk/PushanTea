'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuth from './useAuth'; // We'll create this hook next

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {
      if (!loading && !user) {
        router.replace('/admin/login');
      }
    }, [user, loading, router]);

    if (loading || !user) {
      // You can render a loading spinner here
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;

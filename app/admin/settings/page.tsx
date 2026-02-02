'use client'

import withAuth from '@/components/withAuth';

function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <p>Here you can configure the application settings.</p>
    </div>
  );
}

export default withAuth(SettingsPage);

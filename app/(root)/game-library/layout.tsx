import Sidebar from '@/components/game-library/sidebar/Sidebar.server';
import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex gap-1">
      <Sidebar />
      <main className="flex-1 overflow-hidden font-spartan text-zinc-100">
        {children}
      </main>
    </div>
  );
}

import Sidebar from '@/components/game-library/sidebar/sidebar.server';
import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 font-spartan text-zinc-100">{children}</main>
    </div>
  );
}

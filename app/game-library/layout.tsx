import Gamestats from '@/components/game-library/gamestats/gamestats.client';
import Sidebar from '@/components/game-library/sidebar/sidebar.server';
import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex'>
      <Sidebar />
      <Gamestats />
    </div>
  )
}

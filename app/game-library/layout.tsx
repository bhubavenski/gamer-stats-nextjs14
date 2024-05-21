import Sidebar from '@/components/game-library/sidebar.server';
import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return( 
    <div className='flex'>
       <Sidebar/>
       <div>Main content on left side</div>
    </div>
  )
}

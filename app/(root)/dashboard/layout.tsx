import Header from '@/components/dashboard/Header.server';
import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Header />
      <main className="overflow-hidden font-spartan text-zinc-100">
        {children}
      </main>
    </div>
  );
}

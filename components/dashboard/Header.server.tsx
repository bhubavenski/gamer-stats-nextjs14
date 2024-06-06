'use client';

import React from 'react';
import style from './main.module.css';
import { dashboard_header_buttons } from '@/constants';
import SearchBar from '../shared/SearchBar.server';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
 
  return (
    <header className={`${style.header_gradiant_bg} flex px-9 py-8`}>
      <div className=" flex w-full items-center justify-between">
        <nav className="flex gap-5">
          {dashboard_header_buttons.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(`flex-center rounded-md px-5 py-2 `, {
                'bg-primary-blue-100': pathname === item.href,
              })}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

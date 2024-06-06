'use client';

import { navLinks } from '@/constants';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Nav() {
  const pathname = usePathname().split('/');
  console.log(pathname)
  return (
    <nav className="header-bottom-bg-gradiant box-border flex items-center justify-between px-8 py-4">
      <div className="flex w-[444px] justify-between text-xl">
        {navLinks.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={cn(`flex-center rounded-md px-5 py-2 `, {
              'button-grey': `/${pathname[1]}` === item.href,
            })}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <p className="text-lg">Friends</p>
        <Image src="/icons/friends.svg" alt="friends" width={24} height={24} />
      </div>
    </nav>
  );
}

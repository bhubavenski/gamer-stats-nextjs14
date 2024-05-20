'use client';

import { navLinks } from '@/constants';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradiant-header-2 box-border flex items-center justify-between px-8 py-4">
      <div className="flex w-[444px] justify-between text-xl">
        {navLinks.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={clsx(`flex-center rounded-md px-5 py-2 `, {
              'button-grey': pathname === item.href,
            })}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <p className="text-lg">Friends</p>
        <Image
          src="/icons/friends.svg"
          alt="friends"
          width={24}
          height={24}
        />
      </div>
    </nav>
  );
}

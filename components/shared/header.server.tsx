import React from 'react';
import Nav from './Nav.server';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    <header className=" bg-gradiant-header-1 box-border flex flex-col gap-2 py-2 font-spartan text-white ">
      <div className=" box-border flex items-center justify-between px-8">
        <div className="flex items-center gap-5">
          <Image src="/images/logo.svg" alt="logo" width={44} height={46} />

          <p>Gamer Stats</p>
        </div>
        <div className="flex items-center gap-5">
          <p>Hi, HardSkull</p>
          <Avatar>
            <AvatarImage src="/images/twiter.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Nav />
    </header>
  );
}

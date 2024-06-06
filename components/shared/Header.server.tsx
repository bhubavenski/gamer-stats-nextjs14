import React from 'react';
import Nav from './Nav.server';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Header() {
  return (
    <header className="header-bg-gradiant flex flex-col justify-between bg-[#0A1A2B] pt-[10px] font-spartan text-white ">
      <div className=" box-border flex items-center justify-between px-8">
        <div className="flex items-center gap-5">
          <Image src="/logo.svg" alt="logo" width={44} height={46} />

          <p>Gamer Stats</p>
        </div>
        <div className="flex items-center gap-5">
          <p>Hi, HardSkull</p>
          <Avatar>
            <AvatarImage src="/images/socials/twiter.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Nav />
    </header>
  );
}


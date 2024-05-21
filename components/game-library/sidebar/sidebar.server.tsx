import Image from 'next/image';
import React from 'react';
import SearchBar from './searchBar.server';

export default function Sidebar() {
  return (
    <div className="min-w-[324px] bg-[#181E3A]">
      <div className=" game-lib-side-nav-gradiant box-border flex items-center justify-between p-4">
        <p className=" text-xl">Library</p>
        <div className="flex-center flex gap-3 text-lg">
          <p>Add</p>
          <span className="flex-center rounded-full bg-[#3E4775] p-2">
            <Image
              src="/icons/plus.svg"
              alt="add game"
              width={13}
              height={13}
            />
          </span>
        </div>
      </div>

      <SearchBar />
    </div>
  );
}

import Image from 'next/image';
import React from 'react';

export default function Sidebar() {
  return (
    <div className="min-w-[324px] bg-[#181E3A]">
      <div className=" game-lib-sidenav-gradiant flex justify-between">
        <p>Library</p>
        <div className='flex gap-2'>
          <p>Add</p>
          <Image src="/icons/plus.svg" alt="add game" width={28} height={28} />
        </div>
      </div>
    </div>
  );
}

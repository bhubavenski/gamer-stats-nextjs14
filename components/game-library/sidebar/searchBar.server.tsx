import Image from 'next/image';
import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex w-[227px] rounded-md border border-[#26333F] bg-[#030E1A] p-2">
      <input />
      <Image
        src="/icons/search.svg"
        alt="search for game"
        width={24}
        height={24}
      />
    </div>
  );
}

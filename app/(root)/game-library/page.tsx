import Image from 'next/image';
import React from 'react';

export default function page() {
  return (
    <div className="flex-center h-full bg-black">
      <div className="relative size-7 rounded-full shadow">
        <Image
          src="/icons/elipse2.svg"
          alt=""
          width={28}
          height={28}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full "
        />
        <Image
          src="/icons/arrow-right.svg"
          alt=""
          width={14}
          height={16}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

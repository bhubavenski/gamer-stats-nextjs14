import Image from 'next/image';
import React from 'react';

export default function MostPlayedCard() {
  return (
    <div className="flex min-h-36 min-w-[74px] flex-col gap-[10px]">
      <div className="relative h-[90px] overflow-hidden rounded-lg">
        <Image
          src="/images/img1.png"
          alt=""
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-sm">Valorant</h3>
        <p className="text-xs font-normal text-emerald-400 ">366 hours</p>
      </div>
    </div>
  );
}

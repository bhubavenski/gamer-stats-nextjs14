import Image from 'next/image';
import React from 'react';

type Props = {
  showPlayTime: boolean;
  showGanre: boolean;
};

export default function MostPlayedCard({ showPlayTime, showGanre }: Props) {
  return (
    <div className="flex min-h-36 min-w-[74px] flex-col gap-[10px]">
      <div className="relative h-[90px] w-[74px] overflow-hidden rounded-lg">
        <Image src="/images/img1.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <h3 className="text-sm">Valorant</h3>

        <p className="text-xs font-normal text-emerald-400 ">
          {showPlayTime && '366 hours'}
          {showGanre && 'Racing'}
        </p>
      </div>
    </div>
  );
}

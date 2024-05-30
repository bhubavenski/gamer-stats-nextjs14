import Image from 'next/image';
import React from 'react';

export default function GmaeLibCard() {
  return (
    <div className=" Library_Game_cards box-border p-3">
      <div className="flex justify-between">
        <div className="flex items-start gap-3">
          <div className="relative h-[90px] w-[74px] overflow-hidden rounded-lg ">
            <Image
              src="/images/forza-horizon.png"
              alt=""
              layout="fill"
            />
          </div>
          <div className="flex min-h-full flex-col justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="">Forza Horizon 5</h3>
              <h4>Racing</h4>
            </div>
            <p className="font-normal text-emerald-400 ">366 hours | Friends Online (2)</p>
          </div>
        </div>
        <div className=" flex min-h-full flex-col justify-between rounded-xl bg-black px-1 py-2">
          <Image src="/icons/stats.svg" alt="" width={24} height={17} />
          <Image src="/icons/leaderboard.svg" alt="" width={24} height={17} />
          <Image src="/icons/dots.svg" alt="" width={24} height={17} />
        </div>
      </div>
    </div>
  );
}

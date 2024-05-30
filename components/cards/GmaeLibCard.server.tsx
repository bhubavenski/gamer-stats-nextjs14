import Image from 'next/image';
import React from 'react';

type Props = {
  name: string;
  ganre: string;
  playtime: number;
  onlineFriends: number;
  imgUrl: string;
}

export default function GmaeLibCard({name, ganre, playtime, onlineFriends, imgUrl}:Props) {
  return (
    <div className=" Library_Game_cards box-border p-3">
      <div className="flex justify-between">
        <div className="flex items-start gap-3">
          <div className="relative h-[90px] w-[74px] overflow-hidden rounded-lg ">
            <Image
              src={imgUrl}
              alt=""
              layout="fill"
            />
          </div>
          <div className="flex min-h-full flex-col justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="">{name}</h3>
              <h4>{ganre}</h4>
            </div>
            <p className="font-normal text-emerald-400 ">{playtime} | Friends Online ({onlineFriends})</p>
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

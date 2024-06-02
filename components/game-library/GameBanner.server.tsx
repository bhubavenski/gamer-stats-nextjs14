import React from 'react';
import Image from 'next/image';
import style from './game-library.module.css';

export default function GameBanner() {
  return (
    <div className="relative box-border flex h-[480px] flex-col justify-between p-10">
      <Image
        src="/images/banners/forza-banner2.png"
        alt="Game Banner"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
        quality={100}
      />

      <div
        className={`flex-center ${style.heart_bg} relative self-end rounded-full p-2`}
      >
        <Image
          alt="like this game"
          src="/icons/heart.svg"
          width={29}
          height={29}
        />
      </div>
      <div className="relative flex justify-between">
        <div className=" flex flex-col gap-4">
          <h1 className=" text-4xl font-[700]">Forza Horizon 5</h1>
          <Button />
        </div>

        <div className=" self-end flex gap-9">
          <Stat about="playtime" />
          <Stat about="achievements" />
          <Stat about="friends" />
        </div>
      </div>
    </div>
  );
}

interface StatProps {
  about: string;
}

const imageSrcMap: {
  [key: string]: { imageSrc: string; text: string; info: string };
} = {
  playtime: {
    imageSrc: '/icons/clock.svg',
    text: 'PlayTime',
    info: '32.5 Hours',
  },
  achievements: {
    imageSrc: '/icons/medal.svg',
    text: 'Achivments',
    info: '13/54',
  },
  friends: {
    imageSrc: '/icons/friends.svg',
    text: 'Friends',
    info: '2 Online',
  },
};

const Button = () => {
  'use client';

  return (
    <button
      className={`flex-center box-border self-start rounded-md px-6 py-3 ${style.button_bg}`}
    >
      <div className="flex items-center gap-2 text-base">
        <span className=" text-lg"> View Stats</span>
        <Image alt="view stats" src="/icons/box.svg" width={20} height={20} />
      </div>
    </button>
  );
};

const Stat = ({ about }: StatProps) => {
  const game = imageSrcMap[about] || 'icons/default.svg';

  return (
    <div className="flex gap-4">
      <Image alt={game.text} src={game.imageSrc} width={28} height={28} />
      <div className="flex flex-col gap-1">
        <p>{game.text}</p>
        <p>{game.info}</p>
      </div>
    </div>
  );
};

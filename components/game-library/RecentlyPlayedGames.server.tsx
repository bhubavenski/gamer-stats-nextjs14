import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { gameLibCards } from '@/constants';
import Image from 'next/image';
import style from './game-library.module.css';

export default function RecentlyPlayedGames() {
  return (
    <div className={`box-border h-[330px] px-8 py-5 ${style.game_carousel_bg}`}>
      <h2 className=" text-2xl">Recently Played Games </h2>
      <Carousel
        opts={{
          dragFree: true,
        }}
        className=" mt-4"
      >
        <CarouselContent className="">
          {gameLibCards.map((card) => (
            <CarouselItem key={card.name} className="basis-1/1 pr-[25px]">
              <Item {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function Item({ lastPlayed, onlineFriends, name, imgUrl }: any) {
  return (
    <div className="flex w-[300px] flex-col gap-4">
      <div className="relative h-[180px]">
        <Image
          alt={name}
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          className={`rounded-lg`}
        />
        <div className={`relative ${style.img_bg} size-full`}>
          <h3 className="absolute bottom-2 left-3 text-xl">{name}</h3>
        </div>
      </div>
      <div className=" text-base font-normal">
        <p>Last Played: {lastPlayed}</p>
        <p>Friends Online: {onlineFriends}</p>
      </div>
    </div>
  );
}

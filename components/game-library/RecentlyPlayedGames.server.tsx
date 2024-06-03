import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { mostPlayedCards } from '@/constants';
import Image from 'next/image';

export default function RecentlyPlayedGames() {
  return (
    <div className="h-[330px] w-full border-2 bg-black">
      <h2>Recently Played Games </h2>
      <Carousel
        opts={{
          dragFree: true,
        }}
        className=""
      >
        <CarouselContent className="">
          {mostPlayedCards.map((card) => (
            <CarouselItem key={card.name} className="basis-1/1 pl-[15px]">
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
        <Image alt={name} src={imgUrl} layout="fill" objectFit="cover" />
        <h3 className="relative">{name}</h3>
      </div>
      <div>
        <p>Last Played: {lastPlayed}</p>
        <p>Friends Online: {onlineFriends}</p>
      </div>
    </div>
  );
}

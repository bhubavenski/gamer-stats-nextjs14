'use client';

import React from 'react';
import '@/styles/embla.css';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import GmaeLibCard from '@/components/cards/GmaeLibCard.server';
import { gameLibCards } from '@/constants';

export function GameLib_Carousel() {
  return (
    <div className="mt-1 h-full overflow-hidden">
      <Carousel
        opts={{
          align: 'start',
          dragFree: true,
        }}
        orientation="vertical"
        className="size-full w-full "
      >
        <CarouselContent className="-mt-1 h-full">
          {gameLibCards.map((card, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1 ">
              <GmaeLibCard {...card}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default GameLib_Carousel;

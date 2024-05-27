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
import GmaeLibCard from '@/components/cards/GmaeLibCard';

export function GameLib_Carousel() {
  return (
    <div className="border-2 border-red-400">
      <Carousel
        opts={{
          align: 'start',
          dragFree: true,
        }}
        orientation="vertical"
        className="size-full max-w-xs "
      >
        <CarouselContent className="-mt-1 h-[600px] gap-0">
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 md:basis-1">
              <GmaeLibCard />
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

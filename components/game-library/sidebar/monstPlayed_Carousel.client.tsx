'use client';

import React from 'react';
import '@/styles/embla.css';
import MostPlayedCard from '@/components/cards/MostPlayedCard.server';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

export function MostPlayed_Section() {
  return (
    <Carousel
      opts={{
        dragFree: true,
      }}
      className=""
    >
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/1 pl-[15px]">
            <MostPlayedCard showPlayTime={true} showGanre={false} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default MostPlayed_Section;

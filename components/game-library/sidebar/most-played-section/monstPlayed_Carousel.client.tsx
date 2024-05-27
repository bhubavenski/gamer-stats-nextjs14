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
    <div className="">
      <Carousel
        opts={{
          dragFree: true,
        }}
        className=""
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <MostPlayedCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default MostPlayed_Section;

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
    <div className=" ">
      <Carousel
        opts={{
          dragFree: true,
          loop: true
        }}
        orientation="vertical"
        className=" max-h-[600px] min-h-[600px] overflow-y-auto "
      >
        <CarouselPrevious />
        <CarouselContent className="">
          {Array.from({ length: 16 }).map((_, index) => (
            <CarouselItem key={index} className="">
              <GmaeLibCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default GameLib_Carousel;

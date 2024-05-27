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

export function GameLib_Carousel() {
  return (
    <div className="border-2 border-yellow-500">
      <Carousel
        opts={{
          dragFree: true,
        }}
        orientation="vertical"
        className="max-h-[600px] min-h-[600px] max-w-xs  overflow-hidden border-2 border-red-500"
      >
        <CarouselContent className="-mt-1 border-2 border-blue-500">
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index} className="">
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

/* <CarouselViewPort emblaRef={emblaRef}>
  <CarouselContainer>
    <MostPlayedCard />
  </CarouselContainer>
</CarouselViewPort>

<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */

export function CarouselOrientation() {
  return (
    <Carousel
      opts={{
        dragFree: true,
      }}
      orientation="vertical"
      className="max-h-full max-w-xs  border-2 border-red-500"
    >
      <CarouselContent className="-mt-1 max-h-full border-2 border-blue-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="">
            <MostPlayedCard />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default GameLib_Carousel;

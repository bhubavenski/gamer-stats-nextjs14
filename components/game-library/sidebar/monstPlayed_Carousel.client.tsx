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
import { mostPlayedCards } from '@/constants';

export function MostPlayed_Section() {
  return (
    <Carousel
      opts={{
        dragFree: true,
      }}
      className=""
    >
      <CarouselContent className="">
        {mostPlayedCards.map((card) => (
          <CarouselItem key={card.name} className="basis-1/1 pl-[15px]">
            <MostPlayedCard
              showPlayTime={true}
              showGanre={false}
              name={card.name}
              imgUrl={card.imgUrl}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default MostPlayed_Section;

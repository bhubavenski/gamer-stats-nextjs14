'use client';

import React from 'react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../../../shared/carousel/CarouselArrowButtons.client';
import useEmblaCarousel from 'embla-carousel-react';
import '@/styles/embla.css';
import CarouselViewPort from '@/components/shared/carousel/CarouselViewPort';
import CarouselContainer from '@/components/shared/carousel/CarouselContainer';
import MostPlayedCard from '@/components/cards/MostPlayedCard.server';

export function MostPlayed_Section() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative">
      <CarouselViewPort emblaRef={emblaRef}>
        <CarouselContainer>
          {Array.from({ length: 6 }).map((_, index) => (
            <MostPlayedCard key={index}/>
          ))}
        </CarouselContainer>
      </CarouselViewPort>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
}

export default MostPlayed_Section;

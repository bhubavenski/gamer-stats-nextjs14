'use client';

import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons.client';
import useEmblaCarousel from 'embla-carousel-react';
import '@/styles/embla.css';
import Image from 'next/image';

type PropType = {
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex min-w-full gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  );
};

function Card() {
  return (
    <div className="flex min-h-36 min-w-[74px] flex-col gap-[10px]">
      <div className="relative h-[90px] overflow-hidden rounded-lg">
        <Image
          src="/images/img1.png"
          alt=""
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <h3 className='text-sm'>Valorant</h3>
        <p className="text-xs font-normal text-emerald-400 ">366 hours</p>
      </div>
    </div>
  );
}

export default EmblaCarousel;

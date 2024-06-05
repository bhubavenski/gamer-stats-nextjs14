import Image from 'next/image';
import React from 'react';
import SearchBar from './SearchBar.server';
import styles from '../game-library.module.css';
import { cn } from '@/lib/utils';
import MostPlayedCard from '@/components/cards/MostPlayedCard.server';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { gameLibCards, mostPlayedCards } from '@/constants';
import GmaeLibCard from '@/components/cards/GmaeLibCard.server';

export default function Sidebar() {
  return (
    <div className="flex max-w-[324px] flex-col gap-4 bg-[#181E3A]">
      <section>
        <div className="game-lib-side-nav-header-gradiant box-border flex items-center justify-between p-4">
          <p className=" text-xl">Library</p>
          <div className="flex-center flex gap-3 text-lg">
            <p>Add</p>
            <span className="flex-center rounded-full bg-[#3E4775] p-2">
              <Image
                src="/icons/plus.svg"
                alt="add game"
                width={13}
                height={13}
              />
            </span>
          </div>
        </div>

        <div className="mx-3 mt-3 flex gap-12">
          <SearchBar />
          <Image
            src="/icons/filters.svg"
            alt="filter search"
            width={14}
            height={14}
          />
        </div>
      </section>

      <hr className=" border-t-2 border-t-line_devider" />

      <section className="box-border px-2">
        <div className="box-border flex flex-col gap-3 rounded-lg bg-most_played_sec_bg px-2 py-4">
          <h4 className="text-lg font-medium">Most Played</h4>
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
        </div>
      </section>

      <hr className=" border-t-2 border-t-line_devider" />

      <section className=" flex max-h-[630px] min-h-[630px] flex-col bg-most_played_sec_bg">
        <nav className={cn('box-border  p-[10px]', styles.sidebar_nav_bn_bg)}>
          <ul className="flex gap-3">
            <li className="box-border p-[5px]">
              <button
                className={cn(`flex-center rounded-md px-5 py-2 button-grey`)}
              >
                Favourites
              </button>
            </li>
            <Image
              src="/icons/ver-line-div"
              alt="devider"
              width={18}
              height={0}
              className=""
            />
            <li className="box-border p-[5px]">
              <button className={cn(`flex-center rounded-md px-5 py-2`)}>
                All
              </button>
            </li>
            <div className=" w-px "></div>
            <li className="box-border p-[5px]">
              <button className={cn(`flex-center rounded-md px-5 py-2`)}>
                Action
              </button>
            </li>
          </ul>
        </nav>

        <Carousel
          opts={{
            align: 'start',
            dragFree: true,
          }}
          orientation="vertical"
          className="mt-1 size-full overflow-hidden"
        >
          <CarouselContent className="-mt-1 h-full">
            {gameLibCards.map((card, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1 ">
                <GmaeLibCard {...card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <hr className=" border-t-2 border-t-line_devider" />

      <section className="box-border px-2">
        <div className="box-border flex flex-col gap-3 rounded-lg bg-most_played_sec_bg px-[10px] py-[15px]">
          <h4 className="text-lg font-medium">Recomendations</h4>
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
        </div>
      </section>
      <div></div>
    </div>
  );
}

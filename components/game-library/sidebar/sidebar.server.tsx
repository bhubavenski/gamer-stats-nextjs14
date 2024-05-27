import Image from 'next/image';
import React from 'react';
import SearchBar from './searchBar.server';
import MonstPlayed_Carousel from './monstPlayed_Carousel.client';
import GameLib_Carousel from './GameLib_Carousel.client';
import styles from './main.module.css'
import { cn } from '@/lib/utils';

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
          <MonstPlayed_Carousel />
        </div>
      </section>

      <hr className=" border-t-2 border-t-line_devider" />

      <section className=" flex max-h-[630px] min-h-[630px] flex-col bg-most_played_sec_bg">
        <nav className={cn('box-border  p-[10px]', styles.bgnamama)}>
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

        <GameLib_Carousel />
      </section>

      <hr className=" border-t-2 border-t-line_devider" />

      <section className="box-border px-2">
        <div className="box-border flex flex-col gap-3 rounded-lg bg-most_played_sec_bg px-[10px] py-[15px]">
          <h4 className="text-lg font-medium">Most Played</h4>
          <MonstPlayed_Carousel />
        </div>
      </section>

      <hr className=" border-t-2 border-t-line_devider" />
    </div>
  );
}

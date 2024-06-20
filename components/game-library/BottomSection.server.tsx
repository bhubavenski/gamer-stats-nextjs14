import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { gameLibCards } from "@/constants";
import Image from "next/image";
import style from "./game-library.module.css";
import { cn } from "@/lib/utils";

export default function BottomSection() {
  return (
    <>
      <div className="h-full px-9 pt-5">
        <Carousel
          opts={{
            dragFree: true,
          }}
          className="mt-4"
        >
          <CarouselContent className="">
            {gameLibCards.map((card, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  ` ${index < gameLibCards.length - 1 ? "basis-3/12" : "basis-auto"}`
                )}
              >
                <Item {...card} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

function Item({ lastPlayed, onlineFriends, name, imgUrl }: any) {
  return (
    <div
      className={`w-[530px] flex-col gap-6 overflow-hidden rounded-lg ${style.card_bg}`}
    >
      <div className="relative h-[240px]">
        <Image alt={name} src={imgUrl} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col gap-4 text-base font-normal">
        <p>Last Played: {lastPlayed}</p>
        <p>Friends Online: {onlineFriends}</p>
      </div>
      <p className=" underline">Learn More</p>
    </div>
  );
}

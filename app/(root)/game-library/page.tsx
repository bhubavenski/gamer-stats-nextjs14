import BottomSection from "@/components/game-library/BottomSection.server";
import GameBanner from "@/components/game-library/GameBanner.server";
import RecentlyPlayedGames from "@/components/game-library/RecentlyPlayedGames.server";
import React from "react";

export default function page() {
  return (
    <div className="size-full">
      <GameBanner />
      <RecentlyPlayedGames />
      <BottomSection />
    </div>
  );
}

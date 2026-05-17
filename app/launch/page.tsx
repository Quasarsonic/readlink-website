"use client";

import { EarnPoints } from "@/components/EarnPoints";
import { Footer } from "@/components/footer";
import { FounderRewards } from "@/components/FounderRewards";
import { Header } from "@/components/header";
import RankCardCarousel from "@/components/RankCardCarousel";
import { ShelfLeaderboard } from "@/components/ShelfLeaderboard";

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-white" data-header-theme="dark">
      <Header />
      <main>
        <RankCardCarousel />
        <FounderRewards />
        <EarnPoints expandable extraBottomPadding />
        <ShelfLeaderboard expanded />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { EarnPoints } from "@/components/EarnPoints";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import RankCardCarousel from "@/components/RankCardCarousel";
import { ShelfLeaderboard } from "@/components/ShelfLeaderboard";

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white" data-header-theme="dark">
      <Header />
      <main>
        <RankCardCarousel />
        <ShelfLeaderboard expanded />
        <EarnPoints expandable extraBottomPadding />
      </main>
      <Footer />
    </div>
  );
}

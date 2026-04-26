"use client";

import { EarnPoints } from "@/components/EarnPoints";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import RankCardCarousel from "@/components/RankCardCarousel";
import { ShelfLeaderboard } from "@/components/ShelfLeaderboard";

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <main>
        <header className="mx-auto w-full max-w-[1280px] px-[clamp(16px,5vw,80px)] pb-12 pt-[120px]">
          <div className="inline-flex items-center text-[11px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            Readlink Launch Campaign
            <span
              className="ml-[10px] inline-block h-2 w-2 rounded-full bg-[#5B9EF8]"
              style={{ animation: "pulse 2s infinite" }}
              aria-hidden="true"
            />
          </div>
          <h1 className="mt-3 text-[clamp(40px,6vw,64px)] font-bold tracking-[-0.02em] leading-[1.05] text-white">
            The Shelf
          </h1>
          <p className="mt-3 text-[16px] text-[#999999]">
            200 readers shaping the launch of Readlink.
          </p>
        </header>

        <RankCardCarousel />
        <ShelfLeaderboard expanded />
        <EarnPoints expandable />
      </main>
      <Footer />
    </div>
  );
}

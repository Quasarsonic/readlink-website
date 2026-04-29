"use client";

import { useEffect, useRef, useState } from "react";
import { participants } from "./launchCampaignData";

const rankColors: Record<number, string> = {
  1: "#E8C96A",
  2: "#B0B0B0",
  3: "#C0856A",
};

const maxPoints = Math.max(...participants.map((entry) => entry.points));
const formatPoints = new Intl.NumberFormat("en-US");

type ShelfLeaderboardProps = {
  expanded?: boolean;
};

export function ShelfLeaderboard({ expanded = false }: ShelfLeaderboardProps) {
  const entries = expanded ? participants : participants.slice(0, 5);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [rowsVisible, setRowsVisible] = useState(false);

  useEffect(() => {
    if (!expanded) return;
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (items) => {
        const first = items[0];
        if (!first?.isIntersecting) return;
        setRowsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [expanded]);

  return (
    <section
      ref={sectionRef}
      data-header-theme="dark"
      className="bg-[#0A0A0A] py-[80px] px-[clamp(16px,5vw,80px)]"
      aria-labelledby="shelf-leaderboard-title"
    >
      <div className="mx-auto w-full max-w-[820px]">
        <div className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            Launch Campaign
          </p>
          <div className="mt-3 flex items-center gap-3">
            <h2
              id="shelf-leaderboard-title"
              className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              The 200 Founders Edition
            </h2>
            <div className="inline-flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full bg-[#5B9EF8]"
                style={{ animation: "pulse 2s infinite" }}
              />
              <span className="text-[11px] font-medium text-[#5B9EF8]">live</span>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-[14px] leading-[1.6] text-[#999999]">
            {expanded
              ? "Rankings update in real time. Top 200 earn a permanent spot on the homepage."
              : "The top 200 most influential Readlink readers."}
          </p>
        </div>

        <div className="space-y-3">
          {entries.map((entry, index) => {
            const isTopThree = entry.rank <= 3;
            const progressWidth = `${Math.max(8, (entry.points / maxPoints) * 100)}%`;
            const rankColor = rankColors[entry.rank] ?? "#666666";

            return (
              <article
                key={entry.rank}
                className="grid grid-cols-[40px_52px_1fr_auto] items-center gap-4 rounded-[12px] border px-5 py-[14px] transition-colors duration-150 ease-in-out hover:bg-[rgba(255,255,255,0.04)]"
                style={{
                  background: isTopThree ? "rgba(91,158,248,0.03)" : "rgba(255,255,255,0.02)",
                  borderColor: isTopThree ? "rgba(91,158,248,0.15)" : "rgba(255,255,255,0.04)",
                  opacity: expanded && !rowsVisible ? 0 : 1,
                  transform: expanded && !rowsVisible ? "translateY(12px)" : "translateY(0)",
                  transition:
                    expanded
                      ? `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms`
                      : undefined,
                }}
              >
                <p
                  className="font-mono text-[13px]"
                  style={{ color: rankColor }}
                  aria-label={`Rank ${entry.rank}`}
                >
                  #{entry.rank}
                </p>

                <div className="h-[52px] w-[52px] overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.06)]">
                  <img
                    src={`https://i.pravatar.cc/100?img=${entry.rank}`}
                    alt={`${entry.name} avatar`}
                    className="h-full w-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[15px] font-medium text-white">
                    {entry.name}
                    {isTopThree ? (
                      <span className="ml-[6px] inline-flex rounded-[4px] bg-[rgba(91,158,248,0.1)] px-[6px] py-[2px] align-middle text-[10px] font-medium uppercase tracking-[0.06em] text-[#5B9EF8]">
                        On Hero
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1 truncate text-[12px] text-[#666666]">
                    @{entry.handle} · {entry.referrals} referrals · {entry.books} books
                  </p>
                  <div className="mt-2 h-[4px] w-full overflow-hidden rounded-full bg-[rgba(255,255,255,0.08)]">
                    <div
                      className="h-full rounded-full bg-[#5B9EF8]"
                      style={{ width: progressWidth }}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-mono text-[16px] text-white">{formatPoints.format(entry.points)}</p>
                  <p className="mt-0.5 text-[10px] text-[#666666]">points</p>
                </div>
              </article>
            );
          })}

          <article className="grid grid-cols-[40px_52px_1fr_auto] items-center gap-4 rounded-[12px] border border-dashed border-[rgba(255,255,255,0.04)] px-5 py-[14px] opacity-50">
            <p className="font-mono text-[13px] text-[#666666]">#200</p>
            <div className="h-[52px] w-[52px] rounded-[12px] border border-dashed border-[rgba(255,255,255,0.06)]" />
            <div>
              <p className="text-[15px] font-medium text-white">Last shelf open</p>
              <p className="mt-1 text-[12px] text-[#666666]">Could be yours</p>
            </div>
            <p className="font-mono text-[16px] text-[#666666]">—</p>
          </article>
        </div>

        {!expanded ? (
          <div className="mt-8 text-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[12px] border border-white bg-transparent px-6 py-3 text-[15px] font-medium text-white transition-colors duration-150 ease-in-out hover:bg-white/10"
            >
              Join the challenge →
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}

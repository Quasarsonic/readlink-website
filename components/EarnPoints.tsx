"use client";

import { useState } from "react";
import { earnPointsCards } from "./launchCampaignData";

const hiddenEarnPointCardTitles = new Set(["Drive traffic", "Profile page visits"]);

type EarnPointsProps = {
  expandable?: boolean;
  extraBottomPadding?: boolean;
};

export function EarnPoints({ expandable = false, extraBottomPadding = false }: EarnPointsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const visibleCards = earnPointsCards.filter((card) => !hiddenEarnPointCardTitles.has(card.title));

  return (
    <section
      className={`bg-[#111111] px-[clamp(16px,5vw,80px)] pt-[80px] ${
        extraBottomPadding ? "pb-[160px]" : "pb-[80px]"
      }`}
      aria-labelledby="earn-points-title"
      data-header-theme="dark"
    >
      <div className="mx-auto w-full max-w-[900px]">
        <header className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            How it works
          </p>
          <h2
            id="earn-points-title"
            className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Earn your Spot
          </h2>
          <p className="mt-4 max-w-2xl text-[14px] leading-[1.6] text-[#999999]">
            Complete Actions to earn your place among Readlink&apos;s top readers.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {visibleCards.map((card, index) => {
            const isPremium = card.title === "Go Premium";
            const isComingSoon = card.comingSoon === true;
            const canExpand = expandable && !isComingSoon;
            const isExpanded = canExpand && expandedIndex === index;

            const onCardClick = () => {
              if (!canExpand) return;
              setExpandedIndex((prev) => (prev === index ? null : index));
            };

            return (
              <article
                key={card.title}
                className={`rounded-[16px] border p-5 transition-[transform,box-shadow,border-color,opacity] duration-200 ease-in-out ${
                  isComingSoon
                    ? "opacity-45"
                    : "hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                }`}
                style={{
                  background: "linear-gradient(145deg, #1A1A1A 0%, #111111 60%)",
                  borderColor: isPremium ? "rgba(91,158,248,0.2)" : "rgba(255,255,255,0.06)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
                role={canExpand ? "button" : undefined}
                tabIndex={canExpand ? 0 : undefined}
                onClick={onCardClick}
                onKeyDown={(event) => {
                  if (!canExpand) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onCardClick();
                  }
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  {isComingSoon ? (
                    <span className="inline-flex rounded-[4px] bg-[rgba(255,255,255,0.06)] px-[8px] py-[4px] text-[11px] font-medium uppercase tracking-[0.06em] text-[#666666]">
                      Coming soon
                    </span>
                  ) : (
                    <p className="font-mono text-[22px] text-white">
                      {card.points}{" "}
                      <span className="text-[13px] text-[#666666]">{card.suffix}</span>
                    </p>
                  )}
                  {canExpand ? (
                    <span
                      className="mt-1 inline-block text-[12px] leading-none text-[#666666] transition-transform duration-200 ease-in-out"
                      style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  ) : null}
                </div>
                <h3
                  className={`mt-2 text-[14px] font-medium ${isComingSoon ? "text-[#999999]" : "text-white"}`}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] leading-[1.6] text-[#666666]">{card.description}</p>

                {canExpand ? (
                  <div
                    className="overflow-hidden transition-[max-height,opacity,margin-top,padding-left,border-left-width,border-left-color] duration-300 ease-in-out"
                    style={{
                      maxHeight: isExpanded ? "300px" : "0px",
                      opacity: isExpanded ? 1 : 0,
                      marginTop: isExpanded ? "12px" : "0px",
                      paddingLeft: isExpanded ? "12px" : "0px",
                      borderLeftWidth: isExpanded ? "2px" : "0px",
                      borderLeftStyle: "solid",
                      borderLeftColor: "rgba(91,158,248,0.3)",
                    }}
                  >
                    <p className="text-[12px] leading-[1.6] text-[#999999]">{card.expandedDescription}</p>
                    <p className="mt-3 border-t border-[rgba(255,255,255,0.04)] pt-3 font-mono text-[11px] text-[#666666]">
                      <span className="text-[#999999]">Tracked via:</span> {card.trackedVia}
                    </p>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

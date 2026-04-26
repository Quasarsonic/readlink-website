"use client";

import { useState } from "react";
import { earnPointsCards } from "./launchCampaignData";

type EarnPointsProps = {
  expandable?: boolean;
};

export function EarnPoints({ expandable = false }: EarnPointsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0A0A0A] px-[clamp(16px,5vw,80px)] py-[80px]" aria-labelledby="earn-points-title">
      <div className="mx-auto w-full max-w-[900px]">
        <header className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            How it works
          </p>
          <h2
            id="earn-points-title"
            className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Earn your shelf
          </h2>
          <p className="mt-4 max-w-2xl text-[14px] leading-[1.6] text-[#999999]">
            Every action that grows Readlink earns points toward a permanent spot on the homepage.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {earnPointsCards.map((card, index) => {
            const isPremium = index === 5;
            const isExpanded = expandable && expandedIndex === index;

            const onCardClick = () => {
              if (!expandable) return;
              setExpandedIndex((prev) => (prev === index ? null : index));
            };

            return (
              <article
                key={card.title}
                className="rounded-[16px] border p-5 transition-[transform,box-shadow,border-color] duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                style={{
                  background: "linear-gradient(145deg, #1A1A1A 0%, #111111 60%)",
                  borderColor: isPremium ? "rgba(91,158,248,0.2)" : "rgba(255,255,255,0.06)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
                role={expandable ? "button" : undefined}
                tabIndex={expandable ? 0 : undefined}
                onClick={onCardClick}
                onKeyDown={(event) => {
                  if (!expandable) return;
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onCardClick();
                  }
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[22px] text-white">
                    {card.points} <span className="text-[13px] text-[#666666]">{card.suffix}</span>
                  </p>
                  {expandable ? (
                    <span
                      className="mt-1 inline-block text-[12px] leading-none text-[#666666] transition-transform duration-200 ease-in-out"
                      style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                      aria-hidden="true"
                    >
                      ▼
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-[14px] font-medium text-white">{card.title}</h3>
                <p className="mt-2 text-[12px] leading-[1.6] text-[#666666]">{card.description}</p>

                {expandable ? (
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

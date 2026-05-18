"use client";

import Link from "next/link";
import { EarnSpotQuickGuide } from "./EarnSpotQuickGuide";
import { earnPointsCards, type EarnPointsCard } from "./launchCampaignData";

const GOLD_HIGHLIGHT_CLASS = "text-[#C4A24A]";

function renderCardDescription(card: EarnPointsCard) {
  const { description, highlightPhrase, highlightPhrases } = card;
  const phrases =
    highlightPhrases ?? (highlightPhrase && description.includes(highlightPhrase) ? [highlightPhrase] : []);

  if (phrases.length === 0) {
    return description;
  }

  const pattern = new RegExp(
    `(${phrases.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );
  const parts = description.split(pattern);

  return parts.map((part, index) =>
    phrases.includes(part) ? (
      <span key={`${part}-${index}`} className={GOLD_HIGHLIGHT_CLASS}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

function PremiumCardDescription() {
  return (
    <div className="flex flex-col gap-2.5 text-[12px] leading-[1.6] text-[#666666]">
      <p>Premium subscribers earn double points on every action.</p>
      <ul className="space-y-1.5" role="list">
        <li>
          Monthly subscribers receive{" "}
          <span className={GOLD_HIGHLIGHT_CLASS}>2 Golden Tickets</span>
        </li>
        <li>
          Yearly subscribers receive{" "}
          <span className={GOLD_HIGHLIGHT_CLASS}>4 Golden Tickets</span>
        </li>
      </ul>
      <p className="text-[11px] leading-[1.55] text-[#555555]">
        Each ticket grants a friend a free month of Premium.
      </p>
    </div>
  );
}

type EarnPointsProps = {
  extraBottomPadding?: boolean;
};

export function EarnPoints({ extraBottomPadding = false }: EarnPointsProps) {
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

        <EarnSpotQuickGuide actionsId="earn-points-actions" />

        <div
          id="earn-points-actions"
          className="grid scroll-mt-[120px] grid-cols-1 items-stretch gap-3 md:grid-cols-2 lg:grid-cols-3"
        >
          {earnPointsCards.map((card, index) => {
            const isPremium = card.title === "Go Premium";

            return (
              <article
                key={`${card.title}-${index}`}
                className="flex h-full min-h-[168px] flex-col rounded-[16px] border p-5 transition-[transform,box-shadow,border-color] duration-200 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                style={{
                  background: "linear-gradient(145deg, #1A1A1A 0%, #111111 60%)",
                  borderColor: isPremium ? "rgba(91,158,248,0.2)" : "rgba(255,255,255,0.06)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
              >
                <p className="shrink-0 font-mono text-[22px] text-white">
                  {card.points}{" "}
                  <span className="text-[13px] text-[#666666]">{card.suffix}</span>
                </p>
                <h3 className="mt-2 shrink-0 text-[14px] font-medium text-white">{card.title}</h3>
                <div className="mt-2 flex flex-1 flex-col">
                  {isPremium ? (
                    <PremiumCardDescription />
                  ) : (
                    <p className="text-[12px] leading-[1.6] text-[#666666]">
                      {renderCardDescription(card)}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6">
          <Link
            href="/legal/campaign"
            className="text-[12px] text-[#666666] underline-offset-2 transition-colors hover:text-[#999999] hover:underline"
          >
            See the full Official Rules
          </Link>
        </p>
      </div>
    </section>
  );
}

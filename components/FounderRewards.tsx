import Link from "next/link";
import { CollectionPremiumLadderDrawer } from "./CollectionPremiumLadderDrawer";

const bodyTextClass = "max-w-prose text-[14px] leading-[1.6] text-[#999999]";
const premiumTextClass =
  "text-[24px] font-semibold leading-[1.15] tracking-tight text-white";

const founderTiers = [
  {
    rankRange: "#1 – #3",
    tierName: "Top Founders",
    premium: "3 years Premium",
    description:
      "A spot in the homepage hero. The three founders at the top of the leaderboard.",
    featured: true,
  },
  {
    rankRange: "#4 – #20",
    tierName: "First Edition",
    premium: "1 year Premium",
    description: "A spot in the homepage hero. The first edition of Readlink's founders.",
    featured: false,
  },
  {
    rankRange: "#21 – #200",
    tierName: "Collection",
    premium: "Up to 6 months Premium",
    description:
      "A spot on the founders page. Premium time scaled by points earned — from 1 to 6 months.",
    featured: false,
  },
] as const;

const DEFAULT_HEADLINE = "THE FOUNDERS' REWARDS";

type FounderRewardsProps = {
  headline?: string;
  headlineAllCaps?: boolean;
};

export function FounderRewards({
  headline = DEFAULT_HEADLINE,
  headlineAllCaps = true,
}: FounderRewardsProps = {}) {
  return (
    <section
      className="bg-[#0D0D0D] px-[clamp(16px,5vw,80px)] py-[80px]"
      aria-labelledby="founder-rewards-title"
      data-header-theme="dark"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <header className="mb-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#E8C96A]">
            What you win
          </p>
          <h2
            id="founder-rewards-title"
            className={`mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl${
              headlineAllCaps ? " uppercase" : ""
            }`}
          >
            {headline}
          </h2>
          <p className={`mt-4 ${bodyTextClass}`}>
            The top 200 readers become Readlink founders. A permanent spot on the site, for as long
            as Readlink exists. Plus free Premium time, scaled to where you finish.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {founderTiers.map((tier) => (
            <article
              key={tier.rankRange}
              className={`relative rounded-[16px] border p-5 ${
                tier.featured ? "border-[rgba(91,158,248,0.22)]" : "border-[rgba(255,255,255,0.06)]"
              }`}
              style={{
                background: tier.featured
                  ? "linear-gradient(145deg, #1C1C1C 0%, #131313 60%)"
                  : "linear-gradient(145deg, #1A1A1A 0%, #111111 60%)",
                boxShadow: tier.featured
                  ? "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(91,158,248,0.06)"
                  : "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {tier.featured ? (
                <span className="absolute right-4 top-4 rounded-[4px] border border-[rgba(91,158,248,0.2)] bg-[rgba(91,158,248,0.08)] px-[8px] py-[3px] text-[10px] font-medium uppercase tracking-[0.06em] text-[#8BB8F5]">
                  Top tier
                </span>
              ) : null}

              <p className="pr-16 text-[15px] font-medium tracking-tight text-white">{tier.rankRange}</p>
              <p className="mt-1 text-[12px] text-[#666666]">{tier.tierName}</p>

              <div className="mt-5 min-h-[3.5rem]">
                <p className={premiumTextClass}>{tier.premium}</p>
              </div>

              <p className="mt-4 text-[12px] leading-[1.6] text-[#666666]">{tier.description}</p>
              {tier.tierName === "Collection" ? <CollectionPremiumLadderDrawer /> : null}
            </article>
          ))}
        </div>

        <div className="mt-10">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            Qualifying
          </p>
          <p className={`max-w-prose ${bodyTextClass}`}>
            To compete for a tier, complete your profile (handle, name, photo) and add 25 books to
            your library. The Collection tier (#21–#200) also requires at least 400 points and one
            successful referral. Ties broken by who got there first.
          </p>
          <p className="mt-4 max-w-prose text-[12px] leading-[1.6] text-[#666666]">
            No purchase necessary — see the{" "}
            <Link href="/legal/campaign" className="text-inherit underline-offset-2 hover:underline">
              Official Rules
            </Link>{" "}
            for the free alternative entry path. Void where prohibited.
          </p>
        </div>
      </div>
    </section>
  );
}

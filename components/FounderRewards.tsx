import Link from "next/link";

const bodyTextClass = "max-w-prose text-[14px] leading-[1.6] text-[#999999]";

const founderTiers = [
  {
    rankRange: "#1 – #3",
    tierName: "Top Founders",
    commission: "50%",
    description: "Lifetime commission on every Premium referral. The top three founders.",
    featured: true,
  },
  {
    rankRange: "#4 – #20",
    tierName: "First Edition",
    commission: "35%",
    description: "Lifetime commission on every Premium referral. Top 20 — the inner shelf.",
    featured: false,
  },
  {
    rankRange: "#21 – #200",
    tierName: "The Shelf",
    commission: "20%",
    description: "Lifetime commission on every Premium referral. The full founder cohort.",
    featured: false,
  },
  {
    rankRange: "Participant",
    tierName: "Participant",
    commission: "10%",
    description: "Lifetime commission for everyone who completes the qualifier.",
    featured: false,
  },
] as const;

export function FounderRewards() {
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
            className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Lifetime founder rewards
          </h2>
          <p className={`mt-4 ${bodyTextClass}`}>
            The top 200 readers earn a permanent place on Readlink — and a lifetime share of every
            Premium subscription they refer.{" "}
            <span className="font-medium text-white">Truly lifetime. No sunset. No cap.</span>
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
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
                boxShadow: tier.featured ? "0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(91,158,248,0.06)" : "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              {tier.featured ? (
                <span className="absolute right-4 top-4 rounded-[4px] border border-[rgba(91,158,248,0.2)] bg-[rgba(91,158,248,0.08)] px-[8px] py-[3px] text-[10px] font-medium uppercase tracking-[0.06em] text-[#8BB8F5]">
                  Top tier
                </span>
              ) : null}

              <p className="pr-16 text-[15px] font-medium tracking-tight text-white">{tier.rankRange}</p>
              <p className="mt-1 text-[12px] text-[#666666]">{tier.tierName}</p>

              <p className="mt-5 font-mono text-[44px] leading-none tracking-tight text-white sm:text-[48px]">
                {tier.commission}
              </p>

              <p className="mt-4 text-[12px] leading-[1.6] text-[#666666]">{tier.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 border-t border-[rgba(255,255,255,0.08)] pt-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            Plus, for the top 200
          </p>

          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#999999]">
                Top 20
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                A spot in the hero
              </h3>
              <p className={`mt-3 ${bodyTextClass}`}>
                Top 20 finishers live in the homepage hero, the tiles you see moving across
                Readlink&apos;s hero page. Visible from day one, for as long as Readlink exists.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#999999]">
                Top 200
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                A permanent place in the founder cohort
              </h3>
              <p className={`mt-3 ${bodyTextClass}`}>
                All 200 finishers live on the Readlink founders page, with every name clickable
                through to your library, for as long as Readlink exists. Not a temporary leaderboard.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-prose text-[12px] leading-[1.6] text-[#666666]">
          To qualify for any tier, build your library: 25 books. Ties broken by who got there first.
          No purchase necessary — see the{" "}
          <Link href="/legal/campaign" className="text-inherit underline-offset-2 hover:underline">
            Official Rules
          </Link>{" "}
          for the free alternative entry path. Void where prohibited.
        </p>
      </div>
    </section>
  );
}

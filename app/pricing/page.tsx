import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const PLAN_CTA_HREF = "/sign-up?redirect_url=/premium";

const planButtonClassName =
  "relative z-10 mt-auto inline-flex w-full shrink-0 items-center justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-medium text-black no-underline shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition hover:bg-white/90 hover:text-black";

const plans = [
  {
    id: "monthly",
    price: "$9.99",
    period: "per month",
  },
  {
    id: "yearly",
    price: "$99.99",
    period: "per year",
    savings: "2 months free",
  },
] as const;

export default function PricingPage() {
  return (
    <div id="top" className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <section className="px-6 py-24 text-center lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-medium tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Make your library think with you.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              Premium turns your library into an intelligence layer, AI that
              surfaces the connections between your books and the people who
              read like you.
            </p>
            <div className="mt-10">
              <div className="mx-auto grid max-w-3xl grid-cols-1 items-stretch gap-4 text-left md:grid-cols-2">
                {plans.map((plan) => (
                  <article
                    key={plan.id}
                    className="feature-card flex h-full min-h-[17.5rem] flex-col overflow-hidden p-8 sm:min-h-[19rem] sm:p-10"
                  >
                    <div className="flex flex-1 flex-col justify-start">
                      <p className="text-5xl font-medium tabular-nums tracking-tight text-white lg:text-6xl">
                        {plan.price}
                      </p>
                      <div className="mt-4 flex flex-col gap-2">
                        <p className="text-sm leading-relaxed text-white/60">
                          {plan.period}
                        </p>
                        {"savings" in plan && plan.savings ? (
                          <p className="pb-8 text-sm leading-relaxed text-white/60">
                            {plan.savings}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    {/* TODO(dev): replace href with plan-specific Stripe checkout endpoint when ready (monthly vs. yearly) */}
                    <a
                      href={PLAN_CTA_HREF}
                      className={planButtonClassName}
                      style={{ color: "#000000" }}
                    >
                      <span className="text-black">Get Premium</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

"use client";

import { useUser } from "@clerk/nextjs";
import { Check, ExternalLink, Loader2, RefreshCw, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type PremiumSource = "none" | "stripe" | "revenuecat" | "both";

type BillingPlan = {
  id: "monthly" | "yearly";
  interval: "monthly" | "yearly";
  priceId: string;
  displayPrice: string;
  productName: string;
  productDescription: string | null;
};

type BillingStatus = {
  isPremium: boolean;
  premiumSource: PremiumSource;
  premiumUpdatedAt: string | null;
  revenueCat: {
    active: boolean;
    expiresAt: string | null;
  };
  stripe: {
    active: boolean;
    status: string | null;
    currentPeriodEnd: string | null;
    cancelAtPeriodEnd: boolean;
    priceId: string | null;
  };
};

type CheckoutState = "idle" | "monthly" | "yearly" | "portal";

function planLabel(interval: BillingPlan["interval"]) {
  return interval === "monthly" ? "Monthly" : "Yearly";
}

async function fetchJson<T>(path: string, init?: RequestInit) {
  const response = await fetch(path, { ...init, cache: "no-store" });
  const payload = (await response.json().catch(() => ({}))) as T & {
    error?: string;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(payload.error || payload.message || "Request failed");
  }

  return payload as T;
}

async function loadStatus() {
  return fetchJson<BillingStatus>("/api/readlink/billing/status");
}

async function loadPlans() {
  const payload = await fetchJson<{ plans: BillingPlan[] }>(
    "/api/readlink/billing/plans",
  );
  return payload.plans;
}

export function PremiumPaywall({ checkoutResult }: { checkoutResult?: string }) {
  const { isLoaded, user } = useUser();
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [plans, setPlans] = useState<BillingPlan[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [checkoutState, setCheckoutState] = useState<CheckoutState>("idle");

  const yearlySavings = useMemo(() => {
    const monthly = plans.find((plan) => plan.interval === "monthly");
    const yearly = plans.find((plan) => plan.interval === "yearly");
    if (!monthly || !yearly) return null;
    return "Best value";
  }, [plans]);

  async function refresh() {
    setError(null);
    try {
      const [nextStatus, nextPlans] = await Promise.all([
        loadStatus(),
        loadPlans(),
      ]);
      setStatus(nextStatus);
      setPlans(nextPlans);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load billing");
    }
  }

  useEffect(() => {
    if (!isLoaded || !user?.id) return;

    let mounted = true;
    Promise.all([loadStatus(), loadPlans()])
      .then(([nextStatus, nextPlans]) => {
        if (!mounted) return;
        setError(null);
        setStatus(nextStatus);
        setPlans(nextPlans);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err instanceof Error ? err.message : "Unable to load billing");
      });

    return () => {
      mounted = false;
    };
  }, [isLoaded, user?.id]);

  async function checkout(plan: BillingPlan) {
    setCheckoutState(plan.interval);
    setError(null);
    try {
      const payload = await fetchJson<{ url: string }>(
        "/api/readlink/billing/checkout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ interval: plan.interval }),
        },
      );
      window.location.assign(payload.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to start checkout");
      setCheckoutState("idle");
    }
  }

  async function openPortal() {
    setCheckoutState("portal");
    setError(null);
    try {
      const payload = await fetchJson<{ url: string }>(
        "/api/readlink/billing/portal",
        { method: "POST" },
      );
      window.location.assign(payload.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to open billing portal");
      setCheckoutState("idle");
    }
  }

  if (!status && !error) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24" aria-busy="true" aria-live="polite">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="skeleton-shimmer mb-5 h-7 w-40 rounded-full" />
            <div className="skeleton-shimmer h-12 w-full max-w-md rounded-lg" />
            <div className="skeleton-shimmer mt-3 h-12 w-10/12 max-w-sm rounded-lg" />
            <div className="skeleton-shimmer mt-6 h-5 w-full max-w-lg rounded-md" />
            <div className="skeleton-shimmer mt-2 h-5 w-4/5 max-w-md rounded-md" />
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="skeleton-shimmer h-6 w-6 rounded-full" />
                <div className="skeleton-shimmer h-4 w-56 rounded-md" />
              </div>
              <div className="flex items-center gap-3">
                <div className="skeleton-shimmer h-6 w-6 rounded-full" />
                <div className="skeleton-shimmer h-4 w-52 rounded-md" />
              </div>
              <div className="flex items-center gap-3">
                <div className="skeleton-shimmer h-6 w-6 rounded-full" />
                <div className="skeleton-shimmer h-4 w-60 rounded-md" />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[0, 1].map((index) => (
                <div key={index} className="rounded-lg border border-border bg-background p-5">
                  <div className="skeleton-shimmer h-6 w-24 rounded-md" />
                  <div className="skeleton-shimmer mt-2 h-4 w-32 rounded-md" />
                  <div className="skeleton-shimmer mt-6 h-10 w-36 rounded-md" />
                  <div className="skeleton-shimmer mt-4 h-4 w-full rounded-md" />
                  <div className="skeleton-shimmer mt-2 h-4 w-3/4 rounded-md" />
                  <div className="skeleton-shimmer mt-6 h-11 w-full rounded-full" />
                </div>
              ))}
            </div>
            <div className="skeleton-shimmer mt-5 h-4 w-48 rounded-md" />
          </div>
        </div>
      </section>
    );
  }

  const hasStripeAccess = status?.premiumSource === "stripe" || status?.premiumSource === "both";
  const hasMobileAccess = status?.premiumSource === "revenuecat" || status?.premiumSource === "both";

  if (status?.isPremium) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-lg border border-border bg-card p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-accent px-3 py-1 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Readlink Premium is active
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Your Premium access is ready.
              </h1>
              <p className="mt-4 text-base leading-7 text-muted">
                The Readlink app will be available soon. When it launches, sign in with this same account and your Premium access will be waiting there.
              </p>
              {/* <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#" className="transition-transform hover:scale-[1.02]">
                  <Image src="/images/appstore.svg" alt="Download on App Store" width={150} height={50} />
                </Link>
                <Link href="#" className="transition-transform hover:scale-[1.02]">
                  <Image src="/images/playstore.svg" alt="Get it on Google Play" width={150} height={50} />
                </Link>
              </div> */}
            </div>
            <div className="flex w-full max-w-sm flex-col rounded-lg bg-dark-bg p-6 text-dark-fg">
              <div>
                <p className="text-sm text-white/60">Subscription</p>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-2xl font-semibold">Premium</p>
                    <p className="mt-2 text-sm capitalize text-white/60">
                      {status.premiumSource === "stripe" && "Web billing"}
                      {status.premiumSource === "revenuecat" && "Mobile app store"}
                      {status.premiumSource === "both" && "Web and mobile billing"}
                    </p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/75">
                    Active
                  </span>
                </div>
              </div>

              {hasStripeAccess ? (
                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="mb-3 text-sm leading-6 text-white/60">
                    Manage your Stripe subscription, invoices, and billing details.
                  </p>
                  <button
                    onClick={() => void openPortal()}
                    disabled={checkoutState !== "idle"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 disabled:opacity-70"
                  >
                    {checkoutState === "portal" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ExternalLink className="h-4 w-4" />}
                    Manage subscription
                  </button>
                </div>
              ) : null}
              {hasMobileAccess ? (
                <p className="mt-6 rounded-lg bg-white/10 p-4 text-sm leading-6 text-white/70">
                  This subscription is managed by the app store account used in the mobile app.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-accent px-3 py-1 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Readlink Premium
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Upgrade your reading network.
          </h1>
          <p className="mt-5 text-base leading-7 text-muted">
            Subscribe on the web, then use the same account in the Readlink mobile app to unlock Premium access.
          </p>
          <div className="mt-8 space-y-4 text-sm text-foreground/85">
            {["Premium discovery and matching", "Deeper library intelligence", "Subscription synced to your Readlink account"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
                  <Check className="h-4 w-4" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6">
          {checkoutResult === "success" && (
            <div className="mb-5 rounded-lg border border-foreground/10 bg-accent p-4 text-sm text-foreground">
              Checkout completed. We are checking your subscription status now.
            </div>
          )}
          {checkoutResult === "cancelled" && (
            <div className="mb-5 rounded-lg border border-border bg-background p-4 text-sm text-muted">
              Checkout was cancelled. You can pick a plan whenever you are ready.
            </div>
          )}
          {error && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {plans.length === 0 && !error
              ? [0, 1].map((index) => (
                <div key={`plan-skeleton-${index}`} className="rounded-lg border border-border bg-background p-5" aria-hidden="true">
                  <div className="skeleton-shimmer h-6 w-24 rounded-md" />
                  <div className="skeleton-shimmer mt-2 h-4 w-28 rounded-md" />
                  <div className="skeleton-shimmer mt-6 h-10 w-36 rounded-md" />
                  <div className="skeleton-shimmer mt-4 h-4 w-full rounded-md" />
                  <div className="skeleton-shimmer mt-2 h-4 w-3/4 rounded-md" />
                  <div className="skeleton-shimmer mt-6 h-11 w-full rounded-full" />
                </div>
              ))
              : plans.map((plan) => (
              <div key={plan.id} className="rounded-lg border border-border bg-background p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-semibold">{planLabel(plan.interval)}</h2>
                    <p className="mt-1 text-sm text-muted">{plan.productName}</p>
                  </div>
                  {plan.interval === "yearly" && yearlySavings && (
                    <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                      {yearlySavings}
                    </span>
                  )}
                </div>
                <div className="mt-6 flex items-end gap-1">
                  <span className="text-3xl font-semibold">{plan.displayPrice}</span>
                  <span className="pb-1 text-sm text-muted">/{plan.interval === "monthly" ? "mo" : "yr"}</span>
                </div>
                {plan.productDescription && (
                  <p className="mt-4 min-h-12 text-sm leading-6 text-muted">{plan.productDescription}</p>
                )}
                <button
                  onClick={() => void checkout(plan)}
                  disabled={checkoutState !== "idle"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-muted disabled:opacity-70"
                >
                  {checkoutState === plan.interval && <Loader2 className="h-4 w-4 animate-spin" />}
                  Subscribe {planLabel(plan.interval)}
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => void refresh()}
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh subscription status
          </button>
        </div>
      </div>
    </section>
  );
}

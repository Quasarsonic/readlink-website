"use client";

import { useUser } from "@clerk/nextjs";
import {
  ErrorCode,
  Purchases,
  PurchasesError,
  type Package,
} from "@revenuecat/purchases-js";
import Image from "next/image";
import Link from "next/link";
import { Check, ExternalLink, Loader2, RefreshCw, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type BillingPlan = {
  id: "monthly" | "yearly";
  interval: "monthly" | "yearly";
  rcPackage: Package;
  displayPrice: string;
  productName: string;
  productDescription: string | null;
};

type BillingStatus = {
  isPremium: boolean;
  premiumUpdatedAt: string | null;
};

type CheckoutState = "idle" | "monthly" | "yearly";

let purchasesInstance: Purchases | null = null;

function premiumEntitlementId() {
  return process.env.NEXT_PUBLIC_REVENUECAT_PREMIUM_ENTITLEMENT_ID || "premium";
}

async function purchasesForUser(userId: string) {
  const apiKey = process.env.NEXT_PUBLIC_REVENUECAT_WEB_API_KEY;
  if (!apiKey) throw new Error("RevenueCat Web API key is not configured");

  if (!Purchases.isConfigured()) {
    purchasesInstance = Purchases.configure({ apiKey, appUserId: userId });
    return purchasesInstance;
  }

  const instance = purchasesInstance ?? Purchases.getSharedInstance();
  purchasesInstance = instance;

  if (instance.getAppUserId() !== userId) {
    await instance.changeUser(userId);
  }

  return instance;
}

function plansFromPackages(packages: {
  monthly: Package | null;
  annual: Package | null;
}) {
  return [
    packages.monthly ? planFromPackage("monthly", packages.monthly) : null,
    packages.annual ? planFromPackage("yearly", packages.annual) : null,
  ].filter((plan): plan is BillingPlan => Boolean(plan));
}

function planFromPackage(interval: BillingPlan["interval"], rcPackage: Package) {
  const product = rcPackage.webBillingProduct;
  return {
    id: interval,
    interval,
    rcPackage,
    displayPrice: product.price.formattedPrice,
    productName: product.title,
    productDescription: product.description,
  } satisfies BillingPlan;
}

function planLabel(interval: BillingPlan["interval"]) {
  return interval === "monthly" ? "Monthly" : "Yearly";
}

async function loadStatus() {
  const response = await fetch("/api/readlink/billing/status", { cache: "no-store" });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.error || "Unable to load billing status");
  return payload as BillingStatus;
}

export function PremiumPaywall({ checkoutResult }: { checkoutResult?: string }) {
  const { isLoaded, user } = useUser();
  const [status, setStatus] = useState<BillingStatus | null>(null);
  const [plans, setPlans] = useState<BillingPlan[]>([]);
  const [managementUrl, setManagementUrl] = useState<string | null>(null);
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
      const nextStatus = await loadStatus();

      if (user?.id) {
        const purchases = await purchasesForUser(user.id);
        const customerInfo = await purchases.getCustomerInfo();
        setStatus({
          ...nextStatus,
          isPremium:
            nextStatus.isPremium ||
            Boolean(customerInfo.entitlements.active[premiumEntitlementId()]),
        });
        setManagementUrl(customerInfo.managementURL);
      } else {
        setStatus(nextStatus);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load billing status");
    }
  }

  useEffect(() => {
    let mounted = true;

    if (!isLoaded || !user?.id) return;

    const email = user.primaryEmailAddress?.emailAddress;

    Promise.all([loadStatus(), purchasesForUser(user.id)])
      .then(async ([nextStatus, purchases]) => {
        const [offerings, customerInfo] = await Promise.all([
          purchases.getOfferings(),
          purchases.getCustomerInfo(),
        ]);
        if (!mounted) return;

        const offering = offerings.current;
        setStatus({
          ...nextStatus,
          isPremium:
            nextStatus.isPremium ||
            Boolean(customerInfo.entitlements.active[premiumEntitlementId()]),
        });
        setManagementUrl(customerInfo.managementURL);

        if (offering) {
          setPlans(plansFromPackages({
            monthly: offering.monthly,
            annual: offering.annual,
          }));
        } else {
          setError("No current RevenueCat offering is configured");
        }

        if (email) {
          void purchases.setAttributes({ email });
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err instanceof Error ? err.message : "Unable to load billing status");
        }
      });

    return () => {
      mounted = false;
    };
  }, [isLoaded, user]);

  async function checkout(plan: BillingPlan) {
    if (!user?.id) return;

    setCheckoutState(plan.interval);
    setError(null);
    try {
      const purchases = await purchasesForUser(user.id);
      const purchaseResult = await purchases.purchase({
        rcPackage: plan.rcPackage,
        customerEmail: user.primaryEmailAddress?.emailAddress,
        metadata: { clerk_user_id: user.id },
        skipSuccessPage: true,
      });
      const customerInfo = purchaseResult.customerInfo;
      setStatus((currentStatus) => ({
        isPremium:
          Boolean(customerInfo.entitlements.active[premiumEntitlementId()]) ||
          Boolean(currentStatus?.isPremium),
        premiumUpdatedAt: currentStatus?.premiumUpdatedAt ?? null,
      }));
      setManagementUrl(customerInfo.managementURL);
      await refresh();
    } catch (err) {
      if (err instanceof PurchasesError && err.errorCode === ErrorCode.UserCancelledError) {
        setError(null);
      } else {
        setError(err instanceof Error ? err.message : "Unable to start checkout");
      }
    } finally {
      setCheckoutState("idle");
    }
  }

  if (!status && !error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted" />
      </div>
    );
  }

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
                You are ready to continue in the mobile app.
              </h1>
              <p className="mt-4 text-base leading-7 text-muted">
                Sign in with this same account on Readlink for iOS or Android and your Premium access will be waiting there.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="#" className="transition-transform hover:scale-[1.02]">
                  <Image src="/images/appstore.svg" alt="Download on App Store" width={150} height={50} />
                </Link>
                <Link href="#" className="transition-transform hover:scale-[1.02]">
                  <Image src="/images/playstore.svg" alt="Get it on Google Play" width={150} height={50} />
                </Link>
              </div>
            </div>
            <div className="w-full max-w-sm rounded-lg bg-dark-bg p-6 text-dark-fg">
              <p className="text-sm text-white/60">Subscription</p>
              <p className="mt-2 text-2xl font-semibold capitalize">
                Premium
              </p>
              {managementUrl ? (
                <Link
                  href={managementUrl}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Manage billing
                </Link>
              ) : (
                <p className="mt-6 rounded-lg bg-white/10 p-4 text-sm leading-6 text-white/70">
                  Billing is managed from the subscription email for web purchases, or from the app store used for mobile purchases.
                </p>
              )}
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

          {plans.length === 0 && !error && (
            <div className="mb-5 rounded-lg border border-border bg-background p-4 text-sm text-muted">
              Loading RevenueCat plans...
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {plans.map((plan) => (
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
                  onClick={() => checkout(plan)}
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
            onClick={refresh}
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

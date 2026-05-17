"use client";

import { SignUpButton, useUser } from "@clerk/nextjs";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { earnSpotQuickGuideSteps } from "./earnSpotQuickGuideSteps";
import { readlinkAppUrls } from "@/lib/readlink-app-url";

const LIBRARY_QUALIFYING_BOOKS = 25;

function isProfileComplete(user: ReturnType<typeof useUser>["user"]) {
  if (!user) return false;

  const hasDisplayName = Boolean(user.firstName?.trim() || user.fullName?.trim());
  const hasHandle = Boolean(user.username?.trim());
  const hasPhoto = Boolean(user.hasImage);

  return hasDisplayName && hasHandle && hasPhoto;
}

function stepCtaHref(stepId: string, fallbackHref?: string) {
  if (stepId === "profile") return readlinkAppUrls.profile;
  if (stepId === "library") return readlinkAppUrls.library;
  return fallbackHref ?? "#";
}

function scrollToActions(targetId: string) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

type EarnSpotQuickGuideProps = {
  actionsId: string;
};

export function EarnSpotQuickGuide({ actionsId }: EarnSpotQuickGuideProps) {
  const [open, setOpen] = useState(false);
  const { isLoaded, isSignedIn, user } = useUser();
  const [bookCount, setBookCount] = useState<number | null>(null);
  const [apiProfileComplete, setApiProfileComplete] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) {
      setBookCount(null);
      setApiProfileComplete(null);
      return;
    }

    let cancelled = false;

    fetch("/api/readlink/campaign/progress", { cache: "no-store" })
      .then(async (response) => {
        const payload = (await response.json().catch(() => ({}))) as {
          bookCount?: number | null;
          profileComplete?: boolean | null;
        };
        if (cancelled) return;
        setBookCount(typeof payload.bookCount === "number" ? payload.bookCount : null);
        setApiProfileComplete(
          typeof payload.profileComplete === "boolean" ? payload.profileComplete : null,
        );
      })
      .catch(() => {
        if (!cancelled) {
          setBookCount(null);
          setApiProfileComplete(null);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [isLoaded, isSignedIn]);

  const profileComplete =
    apiProfileComplete !== null ? apiProfileComplete : isProfileComplete(user);

  const stepComplete = {
    account: Boolean(isSignedIn),
    profile: profileComplete,
    library: bookCount !== null && bookCount >= LIBRARY_QUALIFYING_BOOKS,
  } as const;

  return (
    <div className="mb-8">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[rgba(255,255,255,0.06)]"
        aria-expanded={open}
        aria-controls="earn-spot-quick-guide"
        onClick={() => setOpen((value) => !value)}
      >
        Quick guide
        <span
          className="text-[11px] text-[#666666] transition-transform duration-200 ease-in-out"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden="true"
        >
          ▼
        </span>
      </button>

      {open ? (
        <div
          id="earn-spot-quick-guide"
          className="mt-4 rounded-[16px] border border-[rgba(255,255,255,0.06)] p-5 sm:p-6"
          style={{
            background: "linear-gradient(145deg, #1A1A1A 0%, #111111 60%)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <ol className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-6">
            {earnSpotQuickGuideSteps.map((step, index) => {
              const isLast = index === earnSpotQuickGuideSteps.length - 1;
              const complete =
                step.id === "account"
                  ? stepComplete.account
                  : step.id === "profile"
                    ? stepComplete.profile
                    : step.id === "library"
                      ? stepComplete.library
                      : false;
              const showCta = Boolean(step.ctaLabel) && !complete;
              const ctaHref = stepCtaHref(step.id, step.ctaHref);
              const anchorId = step.anchorTargetId ?? actionsId;

              return (
                <li key={step.id} className="relative flex gap-4 lg:flex-col lg:gap-0">
                  <div className="flex flex-col items-center lg:w-full">
                    <div className="flex w-full items-center">
                      {index > 0 ? (
                        <div
                          className="hidden h-px flex-1 bg-[rgba(255,255,255,0.08)] lg:block"
                          aria-hidden="true"
                        />
                      ) : (
                        <div className="hidden flex-1 lg:block" aria-hidden="true" />
                      )}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[12px] font-medium ${
                          complete
                            ? "border-[rgba(91,158,248,0.35)] bg-[rgba(91,158,248,0.12)] text-[#8BB8F5]"
                            : "border-[rgba(255,255,255,0.12)] bg-[#1A1A1A] text-white"
                        }`}
                      >
                        {complete ? <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" /> : index + 1}
                      </span>
                      {!isLast ? (
                        <div
                          className="hidden h-px flex-1 bg-[rgba(255,255,255,0.08)] lg:block"
                          aria-hidden="true"
                        />
                      ) : (
                        <div className="hidden flex-1 lg:block" aria-hidden="true" />
                      )}
                    </div>
                    {!isLast ? (
                      <div
                        className="mt-2 min-h-[28px] w-px flex-1 bg-[rgba(255,255,255,0.08)] lg:hidden"
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  <div className="min-w-0 flex-1 pb-8 last:pb-0 lg:mt-4 lg:pb-0">
                    <h3 className="text-[14px] font-medium text-white">{step.title}</h3>
                    <p className="mt-2 text-[12px] leading-[1.6] text-[#666666]">{step.body}</p>

                    <div className="mt-3">
                      {complete ? (
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#8BB8F5]">
                          <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                          Done
                        </span>
                      ) : showCta && step.id === "account" ? (
                        <SignUpButton mode="modal" forceRedirectUrl="/launch">
                          <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[rgba(255,255,255,0.06)]"
                          >
                            {step.ctaLabel}
                          </button>
                        </SignUpButton>
                      ) : showCta && step.ctaExternal ? (
                        <a
                          href={ctaHref}
                          className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[rgba(255,255,255,0.06)]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {step.ctaLabel}
                        </a>
                      ) : showCta && step.ctaHref ? (
                        <Link
                          href={step.ctaHref}
                          className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[rgba(255,255,255,0.06)]"
                        >
                          {step.ctaLabel}
                        </Link>
                      ) : step.id === "leaderboard" ? (
                        <button
                          type="button"
                          className="text-[12px] font-medium text-[#8BB8F5] underline-offset-2 hover:underline"
                          onClick={() => scrollToActions(anchorId)}
                        >
                          See the actions
                        </button>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ) : null}
    </div>
  );
}

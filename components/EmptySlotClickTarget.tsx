"use client";

import { SignUpButton } from "@clerk/nextjs";
import type { CSSProperties, ReactNode } from "react";
import { emptySlotAriaLabel, useEmptySlotDestination } from "@/hooks/useEmptySlotDestination";

type EmptySlotClickTargetProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Matches EarnSpotQuickGuide "Create account" SignUpButton redirect. */
  signUpRedirectUrl?: string;
  ariaLabel?: string;
};

export function EmptySlotClickTarget({
  children,
  className,
  style,
  signUpRedirectUrl = "/launch",
  ariaLabel = emptySlotAriaLabel,
}: EmptySlotClickTargetProps) {
  const destination = useEmptySlotDestination();

  if (destination.kind === "signup") {
    return (
      <SignUpButton mode="modal" forceRedirectUrl={signUpRedirectUrl}>
        <button type="button" className={className} style={style} aria-label={ariaLabel}>
          {children}
        </button>
      </SignUpButton>
    );
  }

  return (
    <a href={destination.href} className={className} style={style} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

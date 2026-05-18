"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { readlinkAppUrls } from "@/lib/readlink-app-url";

export type EmptySlotDestination =
  | { kind: "signup" }
  | { kind: "profile"; href: string }
  | { kind: "anchor"; href: string };

function isProfileComplete(user: ReturnType<typeof useUser>["user"]) {
  if (!user) return false;

  const hasDisplayName = Boolean(user.firstName?.trim() || user.fullName?.trim());
  const hasHandle = Boolean(user.username?.trim());
  const hasPhoto = Boolean(user.hasImage);

  return hasDisplayName && hasHandle && hasPhoto;
}

export function useEmptySlotDestination(): EmptySlotDestination {
  const { isLoaded, isSignedIn, user } = useUser();
  const [apiProfileComplete, setApiProfileComplete] = useState<boolean | null>(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn) return;

    let cancelled = false;

    fetch("/api/readlink/campaign/progress", { cache: "no-store" })
      .then(async (response) => {
        const payload = (await response.json().catch(() => ({}))) as {
          profileComplete?: boolean | null;
        };
        if (cancelled) return;
        setApiProfileComplete(
          typeof payload.profileComplete === "boolean" ? payload.profileComplete : null,
        );
      })
      .catch(() => {
        if (!cancelled) setApiProfileComplete(null);
      });

    return () => {
      cancelled = true;
    };
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || !isSignedIn) return { kind: "signup" };

  const profileComplete =
    apiProfileComplete !== null ? apiProfileComplete : isProfileComplete(user);

  if (!profileComplete) return { kind: "profile", href: readlinkAppUrls.profile };

  return { kind: "anchor", href: "#earn-points-actions" };
}

export const emptySlotAriaLabel = "Create account to compete for this spot";

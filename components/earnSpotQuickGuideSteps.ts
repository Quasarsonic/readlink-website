export type EarnSpotQuickGuideStep = {
  id: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  anchorTargetId?: string;
};

export const earnSpotQuickGuideSteps: EarnSpotQuickGuideStep[] = [
  {
    id: "account",
    title: "Create your account",
    body: "Sign up at readlink.app. Your handle is reserved as soon as you complete your profile.",
    ctaLabel: "Create account",
    ctaHref: "/sign-up",
  },
  {
    id: "profile",
    title: "Complete your profile",
    body: "Display name, handle, profile photo. This is your founder identity — visible on the leaderboard and locked to your account.",
    ctaLabel: "Complete profile",
    ctaExternal: true,
  },
  {
    id: "library",
    title: "Build your library",
    body: "Add 25 books to qualify. This is the entry threshold for the founders cohort — once you cross it, you're in the running.",
    ctaLabel: "Open library",
    ctaExternal: true,
  },
  {
    id: "leaderboard",
    title: "Climb the leaderboard",
    body: "Earn points through six ways — building your library, bringing readers, growing the network. Premium subscribers earn 2× on every action.",
    anchorTargetId: "earn-points-actions",
  },
];

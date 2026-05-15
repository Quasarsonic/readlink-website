export type CampaignParticipant = {
  rank: number;
  name: string;
  handle: string;
  referrals: number;
  books: number;
  points: number;
};

export const participants: CampaignParticipant[] = Array.from({ length: 200 }, (_, index) => ({
  rank: index + 1,
  name: "",
  handle: "",
  referrals: 0,
  books: 0,
  points: 0,
}));

/** Ranks 1–20 appear on the homepage hero and show the "On Hero" leaderboard badge. */
export const HERO_PARTICIPANT_COUNT = 20;

export const heroParticipants = participants.slice(0, HERO_PARTICIPANT_COUNT);

export function isOnHero(rank: number) {
  return rank <= HERO_PARTICIPANT_COUNT;
}

export type EarnPointsCard = {
  points: string;
  suffix: string;
  title: string;
  description: string;
  expandedDescription: string;
  trackedVia: string;
  comingSoon?: boolean;
};

export const earnPointsCards: EarnPointsCard[] = [
  {
    points: "500",
    suffix: "pts",
    title: "Create your library",
    description: "Install the app and add 5 or more books to your personal shelf.",
    expandedDescription:
      "Install the Readlink app and add at least 5 books to your shelf. Points are awarded automatically once your library reaches 5 books. This is a one-time action.",
    trackedVia: "app install event + book count in your account",
  },
  {
    points: "50",
    suffix: "pts/click",
    title: "Drive traffic",
    description: "Every unique click on your referral link. Capped at 1,000 pts per day.",
    expandedDescription:
      "Every unique visitor who clicks your referral link earns you 50 pts. Unique means one point event per visitor per 24h window - repeat clicks from the same person don't stack. Daily cap: 1,000 pts (20 unique clicks).",
    trackedVia: "UTM + ref= parameter on your referral link",
  },
  {
    points: "800",
    suffix: "pts",
    title: "Bring a reader",
    description: "Someone signs up via your link and builds a library with 5 or more books.",
    expandedDescription:
      "When someone signs up via your referral link and adds 5 or more books within 72 hours, you earn 800 pts. The 72h window and 5-book minimum ensure genuine users, not empty installs.",
    trackedVia: "referral attribution + library depth event",
  },
  {
    points: "300",
    suffix: "pts bonus",
    title: "Your referral goes deep",
    description: "When someone you referred adds 25 or more books to their library.",
    expandedDescription:
      "A bonus awarded when someone you referred reaches 25 books in their library. You earn this on top of the 800 pts from bringing them in. Rewards you for bringing quality readers, not just sign-ups.",
    trackedVia: "downstream library depth event on referred accounts",
  },
  {
    points: "1,500",
    suffix: "pts bonus",
    title: "Referral converts to Premium",
    description: "Someone you referred subscribes to Premium.",
    expandedDescription:
      "A bonus awarded when someone who signed up via your referral link subscribes to Readlink Premium. This is the highest-value action in the campaign — it directly rewards bringing readers who become paying members.",
    trackedVia: "subscription payment event with referral attribution",
  },
  {
    points: "",
    suffix: "",
    title: "More ways to earn",
    description: "New ways to earn points are coming. Stay tuned.",
    expandedDescription: "",
    trackedVia: "",
    comingSoon: true,
  },
  {
    points: "10",
    suffix: "pts/visit",
    title: "Profile page visits",
    description: "Every unique visit to your readlink.app/@username page. Capped at 500 pts per day.",
    expandedDescription:
      "Every unique visitor to your readlink.app/@username page earns 10 pts. This rewards content creators who drive traffic to their profile via TikTok bios, YouTube descriptions, Instagram link-in-bio, and similar. Daily cap: 500 pts (50 unique visits).",
    trackedVia: "page view server log, unique by IP hash per 24h",
  },
  {
    points: "2x",
    suffix: "all points",
    title: "Go Premium",
    description:
      "Premium subscribers earn double points on every action, plus two Golden Tickets to gift.",
    expandedDescription:
      "Premium subscribers earn 2x points on every action - including points already in progress. You also receive two Golden Tickets to gift premium access to anyone you choose.",
    trackedVia:
      "subscription payment event - multiplier applies automatically from the moment your subscription activates",
  },
];

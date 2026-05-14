export type CampaignParticipant = {
  rank: number;
  name: string;
  handle: string;
  referrals: number;
  books: number;
  points: number;
};

export const participants: CampaignParticipant[] = [
  { rank: 1, name: "Sarah Chen", handle: "sarahreads", referrals: 14, books: 87, points: 4820 },
  { rank: 2, name: "Marco Rossi", handle: "marcobooks", referrals: 9, books: 143, points: 3650 },
  { rank: 3, name: "Priya Nair", handle: "priyareads", referrals: 7, books: 62, points: 2900 },
  { rank: 4, name: "Alex Müller", handle: "alexm", referrals: 5, books: 31, points: 2310 },
  { rank: 5, name: "Lena Torres", handle: "lena_t", referrals: 3, books: 55, points: 1780 },
  { rank: 6, name: "Jin Park", handle: "jinreads", referrals: 4, books: 44, points: 1540 },
  { rank: 7, name: "Sofia Greco", handle: "sofiabooks", referrals: 2, books: 91, points: 1320 },
  { rank: 8, name: "Tom Eriksson", handle: "tomreads", referrals: 6, books: 28, points: 1180 },
  { rank: 9, name: "Aisha Diallo", handle: "aishalib", referrals: 1, books: 67, points: 980 },
  { rank: 10, name: "Luca Ferri", handle: "lucaferri", referrals: 3, books: 39, points: 870 },
  { rank: 11, name: "Emma Walsh", handle: "emmawalsh", referrals: 2, books: 52, points: 760 },
  { rank: 12, name: "Ravi Patel", handle: "ravipatel", referrals: 1, books: 33, points: 650 },
  { rank: 13, name: "Clara Dumont", handle: "clarabooks", referrals: 2, books: 41, points: 590 },
  { rank: 14, name: "Noah Kim", handle: "noahkim", referrals: 1, books: 29, points: 510 },
  { rank: 15, name: "Mia Johansson", handle: "miajohansson", referrals: 0, books: 78, points: 450 },
  { rank: 16, name: "Omar Hassan", handle: "omarhassan", referrals: 1, books: 22, points: 390 },
  { rank: 17, name: "Lea Müller", handle: "leamuller", referrals: 0, books: 45, points: 340 },
  { rank: 18, name: "Ivan Petrov", handle: "ivanpetrov", referrals: 1, books: 18, points: 290 },
  { rank: 19, name: "Yuki Tanaka", handle: "yukitanaka", referrals: 0, books: 61, points: 240 },
  { rank: 20, name: "Zara Ahmed", handle: "zaraahmed", referrals: 0, books: 34, points: 190 },
];

export type EarnPointsCard = {
  points: string;
  suffix: string;
  title: string;
  description: string;
  expandedDescription: string;
  trackedVia: string;
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

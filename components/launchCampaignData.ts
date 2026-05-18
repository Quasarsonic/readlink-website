export {
  CAMPAIGN_CLOSE_ISO,
  CAMPAIGN_OPEN_ISO,
  campaignClose,
  campaignOpen,
  getCampaignPhase,
  type CampaignPhase,
} from "@/lib/campaign-state";

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

export type HeroTileSlot = {
  rank: number;
  participant: CampaignParticipant;
  occupied: boolean;
};

/** True when the participant has a handle to show in @handle / profile URLs. */
export function hasParticipantHandle(participant: CampaignParticipant) {
  return Boolean(participant.handle?.trim());
}

export function isParticipantOccupied(participant: CampaignParticipant) {
  return hasParticipantHandle(participant) || Boolean(participant.name?.trim());
}

export function getOccupiedParticipants(
  leaderboard: CampaignParticipant[] = participants,
) {
  return leaderboard.filter(isParticipantOccupied);
}

/** Rank slots #1…N shown in the launch carousel (N = occupied count, min 1 pre-launch). */
export function getCarouselVisibleParticipants(
  leaderboard: CampaignParticipant[] = participants,
) {
  const occupiedCount = getOccupiedParticipants(leaderboard).length;
  const slotCount = occupiedCount > 0 ? occupiedCount : 1;
  return leaderboard.slice(0, slotCount);
}

export function participantAtRank(
  leaderboard: CampaignParticipant[],
  rank: number,
): CampaignParticipant {
  const byRank = leaderboard.find((entry) => entry.rank === rank);
  if (byRank) return byRank;

  const byIndex = leaderboard[rank - 1];
  if (byIndex && byIndex.rank === rank) return byIndex;

  return {
    rank,
    name: "",
    handle: "",
    referrals: 0,
    books: 0,
    points: 0,
  };
}

/** Always returns ranks #1–#20, with empty slots when a position has no participant. */
export function getHeroTileSlots(
  leaderboard: CampaignParticipant[] = participants,
): HeroTileSlot[] {
  return Array.from({ length: HERO_PARTICIPANT_COUNT }, (_, index) => {
    const rank = index + 1;
    const participant = participantAtRank(leaderboard, rank);
    return {
      rank,
      participant,
      occupied: isParticipantOccupied(participant),
    };
  });
}

export const heroParticipants = getHeroTileSlots().map((slot) => slot.participant);

export function isOnHero(rank: number) {
  return rank <= HERO_PARTICIPANT_COUNT;
}

export type EarnPointsCard = {
  points: string;
  suffix: string;
  title: string;
  description: string;
  /** Renders with a muted gold tint inside the description paragraph. */
  highlightPhrase?: string;
  highlightPhrases?: string[];
};

export const earnPointsCards: EarnPointsCard[] = [
  {
    points: "500",
    suffix: "pts",
    title: "Create your library",
    description: "Install the app and add 5 or more books to your personal shelf.",
  },
  {
    points: "1,000",
    suffix: "pts",
    title: "Bring a reader",
    description:
      "Someone signs up via your link and adds 5 or more books within 72 hours.",
  },
  {
    points: "500",
    suffix: "pts bonus",
    title: "Your referral goes deep",
    description: "Someone you referred reaches 25 books in their library.",
  },
  {
    points: "1,500",
    suffix: "pts bonus",
    title: "Referral converts to Premium",
    description: "Someone you referred subscribes to Premium.",
  },
  {
    points: "500",
    suffix: "pts bonus",
    title: "Build your network",
    description: "Refer 2 readers who each meet the Bring a reader threshold.",
  },
  {
    points: "2×",
    suffix: "all points",
    title: "Go Premium",
    description:
      "Premium subscribers earn double points on every action. Monthly subscribers receive 2 Golden Tickets, Yearly subscribers receive 4 Golden Tickets — each ticket grants a friend a free month of Premium.",
    highlightPhrases: ["2 Golden Tickets", "4 Golden Tickets"],
  },
];

export const collectionPremiumTimeTiers = [
  { pointsRange: "1,500 – 3,999 points", premiumTime: "1 month" },
  { pointsRange: "4,000 – 8,999 points", premiumTime: "2 months" },
  { pointsRange: "9,000 – 17,999 points", premiumTime: "3 months" },
  { pointsRange: "18,000 – 29,999 points", premiumTime: "4 months" },
  { pointsRange: "30,000+ points", premiumTime: "6 months" },
] as const;

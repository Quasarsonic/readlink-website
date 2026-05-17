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

export function isParticipantOccupied(participant: CampaignParticipant) {
  return Boolean(participant.handle?.trim() || participant.name?.trim());
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
  comingSoon?: boolean;
};

export const earnPointsCards: EarnPointsCard[] = [
  {
    points: "500",
    suffix: "pts",
    title: "Create your library",
    description: "Install the app and add 5 or more books to your personal shelf.",
  },
  {
    points: "50",
    suffix: "pts/click",
    title: "Drive traffic",
    description: "Every unique click on your referral link. Capped at 1,000 pts per day.",
  },
  {
    points: "",
    suffix: "",
    title: "More ways to earn",
    description: "New ways to earn points are coming. Stay tuned.",
    comingSoon: true,
  },
  {
    points: "",
    suffix: "",
    title: "More ways to earn",
    description: "New ways to earn points are coming. Stay tuned.",
    comingSoon: true,
  },
  {
    points: "",
    suffix: "",
    title: "More ways to earn",
    description: "New ways to earn points are coming. Stay tuned.",
    comingSoon: true,
  },
  {
    points: "",
    suffix: "",
    title: "More ways to earn",
    description: "New ways to earn points are coming. Stay tuned.",
    comingSoon: true,
  },
  {
    points: "10",
    suffix: "pts/visit",
    title: "Profile page visits",
    description: "Every unique visit to your readlink.app/@username page. Capped at 500 pts per day.",
  },
  {
    points: "2x",
    suffix: "all points",
    title: "Go Premium",
    description:
      "Premium subscribers earn double points on every action, plus two Golden Tickets to gift.",
  },
];

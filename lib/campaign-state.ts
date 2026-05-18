/** Campaign window (UTC). */
export const CAMPAIGN_OPEN_ISO = "2026-06-01T00:00:00.000Z";
export const CAMPAIGN_CLOSE_ISO = "2026-08-31T23:59:59.999Z";

export const campaignOpen = new Date(CAMPAIGN_OPEN_ISO);
export const campaignClose = new Date(CAMPAIGN_CLOSE_ISO);

export type CampaignPhase = "upcoming" | "active" | "ended";
export type CampaignState = "pre-launch" | "live" | "closed";

export function getCampaignPhase(now = Date.now()): CampaignPhase {
  if (now < campaignOpen.getTime()) return "upcoming";
  if (now > campaignClose.getTime()) return "ended";
  return "active";
}

const stateByPhase: Record<CampaignPhase, { state: CampaignState; label: string }> = {
  upcoming: { state: "pre-launch", label: "pre-launch" },
  active: { state: "live", label: "live" },
  ended: { state: "closed", label: "closed" },
};

export function getCampaignState(now = Date.now()) {
  return stateByPhase[getCampaignPhase(now)];
}

export function getCountdownTarget(phase: CampaignPhase): Date {
  return phase === "upcoming" ? campaignOpen : campaignClose;
}

export function getCountdownLabel(phase: CampaignPhase): string | null {
  if (phase === "upcoming") return "Opens in";
  if (phase === "active") return "Closes in";
  return null;
}

/** Mobile app (incl. library) ships with campaign open. */
export function isReadlinkMobileAppLive(now = Date.now()) {
  return getCampaignPhase(now) !== "upcoming";
}

"use client";

import { SignUpButton } from "@clerk/nextjs";
import { type ReactNode } from "react";
import {
  getHeroTileSlots,
  participants,
  type HeroTileSlot,
} from "./launchCampaignData";
import { ParticipantAvatar } from "./ParticipantAvatar";
import { readlinkLibraryUrl } from "@/lib/readlink-app-url";
import {
  emptySlotAriaLabel,
  useEmptySlotDestination,
  type EmptySlotDestination,
} from "@/hooks/useEmptySlotDestination";

const rankBorderColors: Record<number, string> = {
  1: "#E8C96A",
  2: "#B0B0B0",
  3: "#C0856A",
};

type TileConfig = {
  id: number;
  left: string;
  width: number;
  height: number;
  animationDuration: string;
  animationDelay: string;
};

const tiles: TileConfig[] = [
  { id: 1, left: "4%", width: 52, height: 52, animationDuration: "12s", animationDelay: "-2s" },
  { id: 2, left: "10%", width: 44, height: 44, animationDuration: "9s", animationDelay: "-6s" },
  { id: 3, left: "16%", width: 60, height: 60, animationDuration: "14s", animationDelay: "-1s" },
  { id: 4, left: "22%", width: 48, height: 48, animationDuration: "11s", animationDelay: "-9s" },
  { id: 5, left: "28%", width: 56, height: 56, animationDuration: "13s", animationDelay: "-4s" },
  { id: 6, left: "34%", width: 44, height: 44, animationDuration: "10s", animationDelay: "-7s" },
  { id: 7, left: "40%", width: 52, height: 52, animationDuration: "15s", animationDelay: "-3s" },
  { id: 8, left: "46%", width: 48, height: 48, animationDuration: "9s", animationDelay: "-11s" },
  { id: 9, left: "52%", width: 64, height: 64, animationDuration: "12s", animationDelay: "-5s" },
  { id: 10, left: "58%", width: 44, height: 44, animationDuration: "10s", animationDelay: "-8s" },
  { id: 11, left: "64%", width: 56, height: 56, animationDuration: "13s", animationDelay: "-2s" },
  { id: 12, left: "70%", width: 48, height: 48, animationDuration: "11s", animationDelay: "-10s" },
  { id: 13, left: "75%", width: 52, height: 52, animationDuration: "14s", animationDelay: "-6s" },
  { id: 14, left: "80%", width: 44, height: 44, animationDuration: "9s", animationDelay: "-3s" },
  { id: 15, left: "85%", width: 60, height: 60, animationDuration: "15s", animationDelay: "-7s" },
  { id: 16, left: "89%", width: 48, height: 48, animationDuration: "12s", animationDelay: "-1s" },
  { id: 17, left: "93%", width: 44, height: 44, animationDuration: "10s", animationDelay: "-9s" },
  { id: 18, left: "7%", width: 56, height: 56, animationDuration: "11s", animationDelay: "-12s" },
  { id: 19, left: "36%", width: 52, height: 52, animationDuration: "13s", animationDelay: "-5s" },
  { id: 20, left: "62%", width: 48, height: 48, animationDuration: "9s", animationDelay: "-14s" },
];

type HeroProfileTilesProps = {
  /** Matches EarnSpotQuickGuide "Create account" SignUpButton redirect. */
  signUpRedirectUrl?: string;
};

function occupiedTileAriaLabel(handle: string) {
  return `Visit @${handle.trim()}'s library`;
}

type HeroTileProps = {
  tile: TileConfig;
  slot: HeroTileSlot;
  emptyTileDestination: EmptySlotDestination;
  signUpRedirectUrl: string;
};

function tileTrackStyle(tile: TileConfig) {
  return {
    left: tile.left,
    top: "-120px",
    width: `${tile.width}px`,
    height: `${tile.height}px`,
    animationName: "floatDown",
    animationDuration: tile.animationDuration,
    animationDelay: tile.animationDelay,
    animationTimingFunction: "linear" as const,
    animationIterationCount: "infinite" as const,
  };
}

function tileInteractiveStyle(rank: number) {
  const rankBorder = rankBorderColors[rank];

  return {
    borderRadius: "14px",
    background: "#1A1A1A",
    border: rankBorder
      ? `1px solid ${rankBorder}`
      : "1px solid rgba(255,255,255,0.06)",
    boxShadow: rankBorder
      ? `0 4px 16px rgba(0,0,0,0.08), 0 0 0 1px ${rankBorder}33`
      : "0 4px 16px rgba(0,0,0,0.08)",
    overflow: "hidden" as const,
  };
}

function TileTrack({ tile, children }: { tile: TileConfig; children: ReactNode }) {
  return (
    <div className="profile-tile pointer-events-auto absolute" style={tileTrackStyle(tile)}>
      {children}
    </div>
  );
}

function HeroTile({ tile, slot, emptyTileDestination, signUpRedirectUrl }: HeroTileProps) {
  const interactiveStyle = tileInteractiveStyle(slot.rank);

  const content = (
    <ParticipantAvatar
      name={slot.participant.name}
      handle={slot.participant.handle}
      size={Math.round(tile.width * 0.85)}
    />
  );

  if (slot.occupied) {
    const handle = slot.participant.handle.trim();
    return (
      <TileTrack tile={tile}>
        <a
          href={readlinkLibraryUrl(handle)}
          className="profile-tile-interactive"
          style={interactiveStyle}
          aria-label={occupiedTileAriaLabel(handle)}
        >
          {content}
        </a>
      </TileTrack>
    );
  }

  if (emptyTileDestination.kind === "signup") {
    return (
      <TileTrack tile={tile}>
        <SignUpButton mode="modal" forceRedirectUrl={signUpRedirectUrl}>
          <button
            type="button"
            className="profile-tile-interactive"
            style={interactiveStyle}
            aria-label={emptySlotAriaLabel}
          >
            {content}
          </button>
        </SignUpButton>
      </TileTrack>
    );
  }

  return (
    <TileTrack tile={tile}>
      <a
        href={emptyTileDestination.href}
        className="profile-tile-interactive"
        style={interactiveStyle}
        aria-label={emptySlotAriaLabel}
      >
        {content}
      </a>
    </TileTrack>
  );
}

export function HeroProfileTiles({ signUpRedirectUrl = "/launch" }: HeroProfileTilesProps) {
  const heroSlots = getHeroTileSlots(participants);
  const emptyTileDestination = useEmptySlotDestination();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {tiles.map((tile, index) => {
        const slot = heroSlots[index];
        if (!slot) return null;

        return (
          <HeroTile
            key={slot.rank}
            tile={tile}
            slot={slot}
            emptyTileDestination={emptyTileDestination}
            signUpRedirectUrl={signUpRedirectUrl}
          />
        );
      })}
    </div>
  );
}

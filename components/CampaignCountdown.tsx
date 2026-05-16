"use client";

import { useEffect, useState } from "react";
import {
  campaignClose,
  campaignOpen,
  getCampaignPhase,
  getCountdownLabel,
  getCountdownTarget,
  type CampaignPhase,
} from "@/lib/campaign-state";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

type CountdownSnapshot = {
  phase: CampaignPhase;
  remaining: TimeRemaining;
};

type CampaignCountdownProps = {
  size?: "sm" | "lg";
  showHeader?: boolean;
  className?: string;
};

function getTimeRemaining(target: Date): TimeRemaining {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function getCountdownSnapshot(): CountdownSnapshot {
  const phase = getCampaignPhase();
  const target = getCountdownTarget(phase);
  return { phase, remaining: getTimeRemaining(target) };
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const dateRangeLabel = `${dateFormatter.format(campaignOpen)} – ${dateFormatter.format(campaignClose)} UTC`;

const placeholderRemaining: TimeRemaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function CountdownUnit({
  value,
  label,
  size,
  showLabel,
}: {
  value: number;
  label: string;
  size: "sm" | "lg";
  showLabel: boolean;
}) {
  const isSmall = size === "sm";

  return (
    <div className={`flex flex-col items-center ${isSmall ? "min-w-[22px]" : "min-w-[36px]"}`}>
      <span
        className={`font-mono leading-none text-white tabular-nums ${
          isSmall ? "text-[11px]" : "text-[13px]"
        }`}
      >
        {String(value).padStart(2, "0")}
      </span>
      {showLabel ? (
        <span
          className={`mt-1 uppercase tracking-[0.08em] text-[#666666] ${
            isSmall ? "text-[8px]" : "text-[9px]"
          }`}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}

function CountdownDigits({
  remaining,
  size,
  showLabels,
}: {
  remaining: TimeRemaining;
  size: "sm" | "lg";
  showLabels: boolean;
}) {
  const isSmall = size === "sm";
  const colonClass = `font-mono text-[#444444] ${isSmall ? "text-[9px]" : "text-[11px]"}`;
  const colonOffset = isSmall ? "pb-0" : "pb-3";

  return (
    <div
      className={`flex items-center rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] ${
        isSmall ? "gap-1.5 px-2 py-1" : "gap-3 px-3 py-2"
      }`}
    >
      <CountdownUnit value={remaining.days} label="days" size={size} showLabel={showLabels} />
      <span className={`${colonClass} ${showLabels ? colonOffset : ""}`}>:</span>
      <CountdownUnit value={remaining.hours} label="hrs" size={size} showLabel={showLabels} />
      <span className={`${colonClass} ${showLabels ? colonOffset : ""}`}>:</span>
      <CountdownUnit value={remaining.minutes} label="min" size={size} showLabel={showLabels} />
      <span className={`${colonClass} ${showLabels ? colonOffset : ""}`}>:</span>
      <CountdownUnit value={remaining.seconds} label="sec" size={size} showLabel={showLabels} />
    </div>
  );
}

export function CampaignCountdown({
  size = "lg",
  showHeader = true,
  className = "",
}: CampaignCountdownProps) {
  const [snapshot, setSnapshot] = useState<CountdownSnapshot | null>(null);

  useEffect(() => {
    const tick = () => setSnapshot(getCountdownSnapshot());
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const phase = snapshot?.phase;
  const showCountdown = phase !== undefined && phase !== "ended";
  const remaining = snapshot?.remaining ?? placeholderRemaining;
  const countdownLabel = phase ? getCountdownLabel(phase) : null;

  if (size === "sm") {
    if (phase === "ended") return null;

    return (
      <div
        className={`flex flex-wrap items-center justify-center gap-2 ${className}`.trim()}
        aria-label="Campaign countdown"
      >
        {snapshot === null ? (
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-[15px] w-[52px] rounded bg-[rgba(255,255,255,0.06)]" />
            <CountdownDigits remaining={placeholderRemaining} size="sm" showLabels={false} />
          </div>
        ) : showCountdown && countdownLabel ? (
          <div className="flex flex-wrap items-center justify-center gap-2" role="timer" aria-live="polite">
            <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#5B9EF8]">
              {countdownLabel}
            </span>
            <CountdownDigits remaining={remaining} size="sm" showLabels={false} />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`mb-8 border-b border-[rgba(255,255,255,0.06)] pb-6 ${className}`.trim()}
      aria-label="Campaign duration and countdown"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        {showHeader ? (
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#666666]">
              Campaign window
            </p>
            <p className="mt-1 text-[12px] text-[#999999]">{dateRangeLabel}</p>
            <p className="mt-1 text-[10px] leading-[1.5] text-[#666666]">
              Rankings lock at close · All times UTC
            </p>
          </div>
        ) : null}

        {snapshot === null ? (
          <div className="flex flex-col items-start sm:items-end" aria-hidden="true">
            <p className="mb-2 h-[15px] w-[52px] rounded bg-[rgba(255,255,255,0.06)]" />
            <CountdownDigits remaining={placeholderRemaining} size="lg" showLabels={true} />
          </div>
        ) : showCountdown && countdownLabel ? (
          <div
            className="flex flex-col items-start sm:items-end"
            role="timer"
            aria-live="polite"
          >
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em] text-[#5B9EF8]">
              {countdownLabel}
            </p>
            <CountdownDigits remaining={remaining} size="lg" showLabels={true} />
          </div>
        ) : (
          <p className="text-[11px] font-medium text-[#666666]">Campaign ended</p>
        )}
      </div>
    </div>
  );
}

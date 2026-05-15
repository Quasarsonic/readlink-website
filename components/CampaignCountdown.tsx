"use client";

import { useEffect, useState } from "react";
import {
  campaignClose,
  campaignOpen,
  getCampaignPhase,
  type CampaignPhase,
} from "./launchCampaignData";

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
  const target = phase === "upcoming" ? campaignOpen : campaignClose;
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

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[36px] flex-col items-center">
      <span className="font-mono text-[13px] leading-none text-white tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[9px] uppercase tracking-[0.08em] text-[#666666]">{label}</span>
    </div>
  );
}

function phaseCopy(phase: CampaignPhase) {
  if (phase === "upcoming") return "Opens in";
  if (phase === "ended") return "Campaign ended";
  return "Closes in";
}

function CountdownDigits({ remaining }: { remaining: TimeRemaining }) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] px-3 py-2">
      <CountdownUnit value={remaining.days} label="days" />
      <span className="pb-3 font-mono text-[11px] text-[#444444]">:</span>
      <CountdownUnit value={remaining.hours} label="hrs" />
      <span className="pb-3 font-mono text-[11px] text-[#444444]">:</span>
      <CountdownUnit value={remaining.minutes} label="min" />
      <span className="pb-3 font-mono text-[11px] text-[#444444]">:</span>
      <CountdownUnit value={remaining.seconds} label="sec" />
    </div>
  );
}

export function CampaignCountdown() {
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

  return (
    <div
      className="mb-8 border-b border-[rgba(255,255,255,0.06)] pb-6"
      aria-label="Campaign duration and countdown"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            Campaign window
          </p>
          <p className="mt-1 text-[12px] text-[#999999]">{dateRangeLabel}</p>
          <p className="mt-1 text-[10px] leading-[1.5] text-[#666666]">
            Rankings lock at close · All times UTC
          </p>
        </div>

        {snapshot === null ? (
          <div className="flex flex-col items-start sm:items-end" aria-hidden="true">
            <p className="mb-2 h-[15px] w-[52px] rounded bg-[rgba(255,255,255,0.06)]" />
            <CountdownDigits remaining={placeholderRemaining} />
          </div>
        ) : showCountdown ? (
          <div
            className="flex flex-col items-start sm:items-end"
            role="timer"
            aria-live="polite"
          >
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em] text-[#5B9EF8]">
              {phaseCopy(phase)}
            </p>
            <CountdownDigits remaining={remaining} />
          </div>
        ) : (
          <p className="text-[11px] font-medium text-[#666666]">{phaseCopy(phase!)}</p>
        )}
      </div>
    </div>
  );
}

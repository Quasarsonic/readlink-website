"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { collectionPremiumTimeTiers } from "./launchCampaignData";

export function CollectionPremiumLadderDrawer() {
  const [open, setOpen] = useState(false);
  const panelId = useId().replace(/:/g, "");

  return (
    <div className="mt-1">
      <button
        type="button"
        className="mt-2 text-[11px] text-[#666666] underline-offset-2 transition-colors duration-200 ease-in-out hover:text-[#999999] hover:underline"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        See how it scales →
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!open}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            id={panelId}
            role="region"
            aria-label="Collection tier Premium time ladder"
            className="mt-4 rounded-[16px] border border-[rgba(255,255,255,0.06)] p-5 sm:p-6"
            style={{
              background: "linear-gradient(145deg, #1A1A1A 0%, #111111 60%)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#666666]">
              Collection ladder — Premium time scaled by points
            </p>

            <ul className="mt-4 space-y-2.5 md:space-y-2">
              {collectionPremiumTimeTiers.map((tier) => (
                <li
                  key={tier.pointsRange}
                  className="text-[13px] leading-[1.5] md:grid md:grid-cols-[1fr_auto] md:gap-4"
                >
                  <span className="text-[#999999]">
                    {tier.pointsRange}
                    <span className="text-white md:hidden"> → {tier.premiumTime}</span>
                  </span>
                  <span className="hidden text-white md:block md:text-right">{tier.premiumTime}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[12px] leading-[1.6] text-[#666666]">
              Prizes activate at campaign close. See the{" "}
              <Link
                href="/legal/campaign"
                className="text-inherit underline-offset-2 hover:text-[#999999] hover:underline"
              >
                Official Rules
              </Link>{" "}
              for full details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { getCampaignState } from "@/lib/campaign-state";

export function CampaignStatusBadge() {
  const [label, setLabel] = useState(() => getCampaignState().label);

  useEffect(() => {
    const tick = () => setLabel(getCampaignState().label);
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-1.5">
      <span
        className="h-2 w-2 rounded-full bg-[#5B9EF8]"
        style={{ animation: "pulse 2s infinite" }}
      />
      <span className="text-[11px] font-medium text-[#5B9EF8]">{label}</span>
    </div>
  );
}

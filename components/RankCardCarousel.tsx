"use client";

import { useRef, useState } from "react";
import { useEffect } from "react";
import { participants } from "./launchCampaignData";

function shuffleParticipants() {
  return [...participants].sort(() => Math.random() - 0.5);
}

export default function RankCardCarousel() {
  const [shuffled, setShuffled] = useState(participants);
  const [isDragging, setIsDragging] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragStartXRef = useRef(0);
  const scrollStartLeftRef = useRef(0);

  const onShuffle = () => {
    setIsFading(true);
    window.setTimeout(() => {
      setShuffled(shuffleParticipants());
      setIsFading(false);
    }, 200);
  };

  useEffect(() => {
    setShuffled(shuffleParticipants());
  }, []);

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = containerRef.current;
    if (!node) return;
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    scrollStartLeftRef.current = node.scrollLeft;
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const node = containerRef.current;
    if (!node) return;
    const deltaX = event.clientX - dragStartXRef.current;
    node.scrollLeft = scrollStartLeftRef.current - deltaX;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <section className="bg-[#0A0A0A] py-[80px]">
      <div className="mx-auto w-full max-w-[1280px] px-[clamp(16px,5vw,80px)]">
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={onShuffle}
            className="inline-flex items-center gap-1 rounded-[8px] border border-[#2C2C2C] bg-transparent px-3 py-1.5 text-[12px] text-[#666666] transition-colors duration-150 ease-in-out hover:border-[rgba(255,255,255,0.12)] hover:text-[#D4D4D4]"
          >
            <span aria-hidden="true">↺</span>
            Shuffle
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`launch-carousel-scroll flex gap-4 overflow-x-auto px-[clamp(16px,5vw,80px)] pb-12 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ opacity: isFading ? 0 : 1, transition: "opacity 200ms ease" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {shuffled.map((participant, index) => {
          const progress = Math.min(100, (participant.points / 5000) * 100);
          return (
            <a
              key={participant.handle}
              href={`https://readlink.app/@${participant.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[260px] shrink-0 overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0A0A0A] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.14)] transition-all duration-200 ease-in-out hover:-translate-y-[3px] hover:border-[rgba(255,255,255,0.14)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.2)]"
            >
              <div
                className="pointer-events-none absolute -right-10 -top-10 h-[140px] w-[140px]"
                style={{ background: "radial-gradient(circle, rgba(91,158,248,0.04) 0%, transparent 60%)" }}
              />

              <div className="relative mb-4 flex items-center gap-3">
                <div className="h-[44px] w-[44px] overflow-hidden rounded-[10px] border border-[rgba(255,255,255,0.06)]">
                  <img
                    src={`https://i.pravatar.cc/100?img=${index + 1}`}
                    alt={`${participant.name} avatar`}
                    className="h-full w-full object-cover grayscale"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[14px] font-medium text-white">{participant.name}</p>
                  <p className="mt-0.5 truncate text-[11px] text-[#666666]">@{participant.handle}</p>
                </div>
              </div>

              <div className="relative mb-3 flex items-end gap-1">
                <p className="text-[40px] leading-none text-white">#{participant.rank}</p>
                <p className="pb-1 text-[12px] text-[#666666]">/ 200</p>
              </div>

              <p className="relative mb-4 font-mono text-[11px] text-[#999999]">
                {participant.points} pts · {participant.referrals} referrals
              </p>

              <div className="relative mb-4 h-[2px] w-full overflow-hidden rounded-[2px] bg-[rgba(255,255,255,0.06)]">
                <div
                  className="h-full max-w-full rounded-[2px]"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #5B9EF8, rgba(91,158,248,0.3))",
                  }}
                />
              </div>

              <p className="relative font-mono text-[10px] text-[#666666]">
                readlink.app/@{participant.handle}
              </p>

              <span className="absolute bottom-4 right-4 font-mono text-[9px] tracking-[0.04em] text-[rgba(255,255,255,0.12)]">
                readlink
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

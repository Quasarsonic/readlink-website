"use client";

import { useEffect, useRef, useState } from "react";
import { participants } from "./launchCampaignData";

function shuffleParticipants() {
  return [...participants].sort(() => Math.random() - 0.5);
}

export default function RankCardCarousel() {
  const [shuffled, setShuffled] = useState(participants);
  const [isDragging, setIsDragging] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isShuffleSpinning, setIsShuffleSpinning] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const scrollStartLeftRef = useRef(0);

  const onShuffle = () => {
    setIsShuffleSpinning(true);
    window.setTimeout(() => {
      setIsShuffleSpinning(false);
    }, 600);
    setIsFading(true);
    window.setTimeout(() => {
      setShuffled(shuffleParticipants());
      setIsFading(false);
    }, 200);
  };

  useEffect(() => {
    setShuffled(shuffleParticipants());
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const applyLinearScale = () => {
      const activeContainer = carouselRef.current;
      if (!activeContainer) return;
      const viewportCenter = activeContainer.scrollLeft + activeContainer.clientWidth / 2;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(viewportCenter - cardCenter);
        const maxDistance = activeContainer.clientWidth / 2 + card.offsetWidth / 2;
        const t = Math.min(distance / maxDistance, 1);
        const scale = 1 - t * 0.16;
        card.style.transform = `scale(${scale})`;
      });
    };

    const scheduleScaleUpdate = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        applyLinearScale();
      });
    };

    container.addEventListener("scroll", scheduleScaleUpdate, { passive: true });
    window.addEventListener("resize", scheduleScaleUpdate);
    scheduleScaleUpdate();

    return () => {
      container.removeEventListener("scroll", scheduleScaleUpdate);
      window.removeEventListener("resize", scheduleScaleUpdate);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [shuffled]);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    const firstCard = cardRefs.current[0];
    if (!firstCard) return;

    const offset = firstCard.offsetLeft - container.offsetWidth / 2 + firstCard.offsetWidth / 2;
    container.scrollLeft = offset;
  }, [shuffled]);

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = carouselRef.current;
    if (!node) return;
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    scrollStartLeftRef.current = node.scrollLeft;
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const node = carouselRef.current;
    if (!node) return;
    const deltaX = event.clientX - dragStartXRef.current;
    node.scrollLeft = scrollStartLeftRef.current - deltaX;
  };

  const stopDragging = () => setIsDragging(false);

  return (
    <section className="bg-[#0A0A0A] pb-[80px] pt-[120px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start px-[clamp(16px,5vw,80px)] lg:flex-row lg:items-start">
        <div className="w-full lg:w-[40%] lg:pr-12">
          <p className="inline-flex items-center text-[11px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            Readlink Launch Campaign
            <span
              className="ml-[10px] inline-block h-2 w-2 rounded-full bg-[#5B9EF8]"
              style={{ animation: "pulse 2s infinite" }}
              aria-hidden="true"
            />
          </p>
          <h2 className="mt-3 text-[clamp(40px,6vw,64px)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
            The Shelf
          </h2>
          <p className="mt-3 max-w-[420px] text-[16px] text-[#999999]">
            200 readers shaping the launch of Readlink.
          </p>
          <p className="mt-4 max-w-[420px] text-[14px] leading-[1.6] text-[#999999]">
            Scroll through every participant card and see the center card come into focus.
          </p>
          <div className="mb-5 mt-8 lg:mb-0">
            <button
              type="button"
              onClick={onShuffle}
              className="inline-flex items-center gap-2 rounded-[10px] border border-[rgba(91,158,248,0.35)] bg-[rgba(91,158,248,0.06)] px-5 py-2.5 text-[14px] font-medium tracking-[-0.01em] text-[#5B9EF8] transition-all duration-150 ease-in-out hover:border-[rgba(91,158,248,0.6)] hover:bg-[rgba(91,158,248,0.12)] hover:text-white"
            >
              <span
                aria-hidden="true"
                className={`shuffle-icon ${isShuffleSpinning ? "spinning" : ""}`}
              >
                ↺
              </span>
              Shuffle cards
            </button>
          </div>
        </div>

        <div className="mt-8 w-full overflow-hidden lg:mt-0 lg:w-[60%]">
          <div
            ref={carouselRef}
            className={`launch-carousel-scroll flex gap-4 overflow-x-auto pb-12 pt-2 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              opacity: isFading ? 0 : 1,
              transition: "opacity 200ms ease",
              perspective: "1000px",
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
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
                  className="block shrink-0"
                >
                  <div
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="relative min-h-[380px] w-[300px] overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0A0A0A] p-7 will-change-transform transition-transform duration-150 ease-linear"
                    style={{ scrollSnapAlign: "center" }}
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
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

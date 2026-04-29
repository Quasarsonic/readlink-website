"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HeroProfileTiles } from "./HeroProfileTiles";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const updateProgress = () => {
      const node = sectionRef.current;
      if (!node) return;
      const sectionTop = node.offsetTop;
      const scrolledPastSectionTop = window.scrollY - sectionTop;
      const raw = scrolledPastSectionTop / (window.innerHeight * 0.9);
      const nextProgress = clamp(raw, 0, 1);
      // Quantize tiny deltas so scrolling doesn't trigger a render per pixel.
      const rounded = Math.round(nextProgress * 100) / 100;
      if (rounded === progressRef.current) return;
      progressRef.current = rounded;
      setProgress(rounded);
    };
    const scheduleProgressUpdate = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        updateProgress();
      });
    };

    updateProgress();
    window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });
    window.addEventListener("resize", scheduleProgressUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleProgressUpdate);
      window.removeEventListener("resize", scheduleProgressUpdate);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const reveal = clamp((progress - 0.14) / 0.6, 0, 1);
  const headingStyle = {
    opacity: clamp(1 - reveal * 1.25, 0, 1),
    transform: `translateY(${-reveal * 46}px) scale(${1 - reveal * 0.05})`,
  };
  return (
    <section
      ref={sectionRef}
      className="grain relative min-h-[88vh] flex flex-col items-center justify-center pb-10 overflow-hidden bg-white"
    >
      <HeroProfileTiles />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-4">
          {/* Main headline */}
          <h1
            style={headingStyle}
            className="relative z-10 mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-black sm:text-5xl lg:text-6xl text-balance leading-[1.06] will-change-transform sm:mt-8"
          >
            Reimagine How
            <br />
            You Interact With
            <br />
            <span className="text-muted/90">Books</span>
          </h1>

          {/* Phone mockup with logo */}
          <div className="relative -mt-2 mb-1">
            {/* Phone mockup */}
            <div
              className="relative mx-auto -translate-y-4 w-[min(88vw,430px)] sm:-translate-y-5"
              style={{ aspectRatio: "1014 / 2048" }}
            >
              {/* Inner slab that sits behind the device frame */}
              <div className="absolute left-[4.2%] right-[4.2%] top-[2.4%] bottom-[2.4%] rounded-[4rem] bg-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/readlink-logo.png"
                    alt="Readlink"
                    width={170}
                    height={42}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Device frame wraps the slab */}
              <Image
                src="/iphone-mockup.png"
                alt="iPhone mockup"
                fill
                className="pointer-events-none object-contain"
                sizes="(max-width: 640px) 88vw, 430px"
                priority
              />
            </div>
          </div>

          {/* Subtitle */}
          <p className="-mt-4 max-w-xl text-base text-muted leading-relaxed text-balance">
            From collections to discovery, explore every corner of the book
            ecosystem with ease.
          </p>

          {/* App store badges */}
          <div className="mt-1 flex items-center gap-4">
            <Link
              href="#"
              className="rounded-md transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 hover:scale-[1.02]"
              aria-label="Download on the App Store"
            >
              <Image
                src="/images/appstore.svg"
                alt="Download on App Store"
                width={152}
                height={51}
              />
            </Link>
            <Link
              href="#"
              className="rounded-md transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 hover:scale-[1.02]"
              aria-label="Get it on Google Play"
            >
              <Image
                src="/images/playstore.svg"
                alt="Get it on Google Play"
                width={152}
                height={51}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

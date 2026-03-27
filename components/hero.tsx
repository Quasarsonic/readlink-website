 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const node = sectionRef.current;
      if (!node) return;
      const sectionTop = node.offsetTop;
      const scrolledPastSectionTop = window.scrollY - sectionTop;
      const raw = scrolledPastSectionTop / (window.innerHeight * 0.9);
      setProgress(clamp(raw, 0, 1));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const reveal = clamp((progress - 0.14) / 0.6, 0, 1);
  const headingStyle = {
    opacity: clamp(1 - reveal * 1.25, 0, 1),
    transform: `translateY(${-reveal * 46}px) scale(${1 - reveal * 0.05})`,
  };
  const coverDrift = reveal * 180;
  const coverOpacity = clamp(0.18 + reveal * 0.82, 0.18, 1);

  return (
    <section ref={sectionRef} className="relative min-h-[88vh] flex flex-col items-center justify-center pt-16 pb-10 overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-4">
          {/* Main headline */}
          <h1
            style={headingStyle}
            className="mt-10 max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-black sm:text-5xl lg:text-6xl text-balance leading-[1.06] will-change-transform"
          >
            Reimagine How
            <br />
            You Interact With
            <br />
            <span className="text-muted/90">Books</span>
          </h1>

          {/* Phone mockup with logo */}
          <div className="relative -mt-2 mb-1">
            {/* Floating book covers - left side */}
            <div
              className="absolute -left-6 top-24 z-0 hidden lg:block will-change-transform"
              style={{
                opacity: coverOpacity,
                transform: `translate(${70 - coverDrift}px, ${20 + coverDrift * 0.08}px) scale(${0.92 + reveal * 0.08}) rotate(-8deg)`,
              }}
            >
              <Image
                src="/images/book-covers/einstein.png"
                alt="Einstein book cover"
                width={220}
                height={320}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div
              className="absolute -left-14 top-[22rem] z-0 hidden lg:block will-change-transform"
              style={{
                opacity: coverOpacity,
                transform: `translate(${90 - coverDrift * 0.85}px, ${10 - coverDrift * 0.06}px) scale(${0.9 + reveal * 0.1}) rotate(5deg)`,
              }}
            >
              <Image
                src="/images/book-covers/abundance.png"
                alt="Abundance book cover"
                width={230}
                height={335}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Floating book covers - right side */}
            <div
              className="absolute -right-6 top-24 z-0 hidden lg:block will-change-transform"
              style={{
                opacity: coverOpacity,
                transform: `translate(${-70 + coverDrift}px, ${20 + coverDrift * 0.08}px) scale(${0.92 + reveal * 0.08}) rotate(8deg)`,
              }}
            >
              <Image
                src="/images/book-covers/future-faster.png"
                alt="The Future Is Faster Than You Think cover"
                width={230}
                height={335}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div
              className="absolute -right-14 top-[22rem] z-0 hidden lg:block will-change-transform"
              style={{
                opacity: coverOpacity,
                transform: `translate(${-90 + coverDrift * 0.85}px, ${10 - coverDrift * 0.06}px) scale(${0.9 + reveal * 0.1}) rotate(-6deg)`,
              }}
            >
              <Image
                src="/images/book-covers/bold.png"
                alt="Bold book cover"
                width={230}
                height={335}
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Phone mockup */}
            <div className="relative mx-auto -translate-y-12 w-[450px] h-[900px] overflow-hidden sm:w-[500px] sm:h-[1000px]">
              {/* Phone frame (on top) */}
              <Image
                src="/images/iphone-mockup.png"
                alt="iPhone mockup"
                fill
                className="object-contain z-10 relative pointer-events-none scale-[1.55]"
                priority
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <Image
                  src="/images/readlink-logo.png"
                  alt="Readlink"
                  width={170}
                  height={42}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="-mt-4 max-w-xl text-base text-muted leading-relaxed text-balance">
            From collections to discovery, explore every corner of the book ecosystem with ease.
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

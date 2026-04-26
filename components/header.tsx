"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(false);
  const logoAnchorRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const checkHeaderTheme = () => {
      const darkSections = document.querySelectorAll<HTMLElement>('[data-header-theme="dark"]');
      const logoRect = logoAnchorRef.current?.getBoundingClientRect();
      if (!logoRect) return;
      const x = logoRect.left + logoRect.width / 2;
      const y = logoRect.top + logoRect.height / 2;
      let onDark = false;

      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isOverThisSection =
          x >= rect.left &&
          x <= rect.right &&
          y >= rect.top &&
          y <= rect.bottom;
        if (isOverThisSection) onDark = true;
      });

      setIsDarkBackground(onDark);
    };

    requestAnimationFrame(checkHeaderTheme);
    window.addEventListener("scroll", checkHeaderTheme, { passive: true });
    window.addEventListener("resize", checkHeaderTheme);
    return () => {
      window.removeEventListener("scroll", checkHeaderTheme);
      window.removeEventListener("resize", checkHeaderTheme);
    };
  }, []);

  // Logo reads dark with invert(1) and light with invert(0). Dark page sections use
  // invert(0); light sections use invert(1). The mobile menu bar is always light, so
  // when it is open we keep the same treatment as over light content (invert(1)).
  const logoFilter =
    !mobileMenuOpen && isDarkBackground ? "invert(0)" : "invert(1)";
  // Mobile menu icon (hamburger / close): same rule — light stroke on dark page when
  // the bar is transparent; dark stroke on light page or when the menu panel is open.
  const mobileMenuIconOnDark =
    !mobileMenuOpen && isDarkBackground;
  const desktopSignInOnDark = !mobileMenuOpen && isDarkBackground;

  return (
    <header
      className={`site-header sticky top-0 left-0 right-0 z-50 relative ${
        mobileMenuOpen
          ? "site-header--menu-open bg-background rounded-b-xl overflow-hidden border-b-[0.5px] border-black"
          : isDarkBackground
            ? "header-dark"
            : ""
      }`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="relative flex items-center justify-between h-16">
          <Link
            ref={logoAnchorRef}
            href="/"
            className="flex items-center gap-2"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/images/readlink-logo.png"
              alt="Readlink"
              width={140}
              height={32}
              className="h-8 w-auto transition-[filter,transform,opacity] duration-500 ease-out will-change-transform"
              style={{
                filter: logoFilter,
                transform: isDarkBackground ? "scale(1.03)" : "scale(1)",
                opacity: isDarkBackground ? 1 : 0.98,
              }}
            />
          </Link>

          {/* Desktop Navigation in rounded tile */}
          <div className="absolute left-1/2 top-1/2 hidden h-10 -translate-x-1/2 -translate-y-1/2 md:flex items-center rounded-full bg-black/95 px-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-6">
              <Link
                href="/#features"
                className="text-sm text-white/85 hover:text-white transition-colors"
              >
                Feature
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm text-white/85 hover:text-white transition-colors"
              >
                How it works
              </Link>
              <Link
                href="/#vision"
                className="text-sm text-white/85 hover:text-white transition-colors"
              >
                Vision
              </Link>
              <Link
                href="/launch"
                className="text-sm text-white/85 hover:text-white transition-colors"
              >
                Challange
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className={`text-sm transition-colors duration-500 ease-out ${
                desktopSignInOnDark
                  ? "text-white/85 hover:text-white"
                  : "text-foreground/85 hover:text-foreground"
              }`}
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              Join waitlist
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition-colors duration-500 ease-out ${
                mobileMenuIconOnDark ? "text-white" : "text-foreground"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/#features"
                className="text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How it works
              </Link>
              <Link
                href="/#vision"
                className="text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vision
              </Link>
              <Link
                href="/launch"
                className="text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Challange
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link
                  href="#"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
                >
                  Join waitlist
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

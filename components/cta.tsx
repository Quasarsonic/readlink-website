import Image from "next/image";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="download"
      data-header-theme="dark"
      className="grain py-24 lg:py-32 bg-dark-bg text-dark-fg"
    >
      <div className="relative z-[2] mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl text-balance max-w-2xl mx-auto mb-6">
          Experience reading like never before with{" "}
          <span className="inline-flex items-center align-baseline">
            <Image
              src="/images/readlink-wordmark.png"
              alt="Readlink"
              width={232}
              height={44}
              className="h-[0.83em] w-auto translate-y-[0.08em]"
            />
          </span>
        </h2>

        {/* App store badges */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="#" className="transition-transform hover:scale-[1.02]">
            <Image
              src="/images/appstore.svg"
              alt="Download on App Store"
              width={140}
              height={47}
            />
          </Link>
          <Link href="#" className="transition-transform hover:scale-[1.02]">
            <Image
              src="/images/playstore.svg"
              alt="Get it on Google Play"
              width={140}
              height={47}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

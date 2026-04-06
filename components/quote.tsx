import Image from "next/image";

export function Quote() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Quote marks */}
          <svg
            className="absolute -top-6 -left-1 h-12 w-12 sm:-top-8 sm:-left-4 sm:h-16 sm:w-16 text-border opacity-50"
            fill="currentColor"
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <blockquote className="relative z-10">
            <p className="mx-auto max-w-[22ch] sm:max-w-[25ch] lg:max-w-[28ch] text-2xl sm:text-3xl lg:text-4xl font-medium text-foreground leading-[1.35] sm:leading-[1.3] text-balance">
              Books helped humanity store knowledge. The printing press helped it spread.{" "}
              <span className="inline-flex items-center align-baseline">
                <Image
                  src="/images/readlink-wordmark.png"
                  alt="Readlink"
                  width={232}
                  height={44}
                  className="h-[0.83em] w-auto translate-y-[0.08em] brightness-0"
                />
              </span>{" "}
              connects it, turning knowledge into intelligence.
            </p>
          </blockquote>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-border" />
            <span className="text-sm text-muted uppercase tracking-widest">The Story of Knowledge</span>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}

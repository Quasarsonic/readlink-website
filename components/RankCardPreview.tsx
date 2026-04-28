export function RankCardPreview() {
  return (
    <section
      className="bg-[#0D0D0D] px-[clamp(16px,5vw,80px)] py-[80px]"
      aria-labelledby="rank-card-preview-title"
      data-header-theme="dark"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <header className="mx-auto max-w-[480px]">
          <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-[#666666]">
            Your rank card
          </p>
          <h2
            id="rank-card-preview-title"
            className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Built to be shared
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6] text-[#999999]">
            Every participant gets a live rank card. Share it anywhere - it updates automatically as
            your rank changes.
          </p>
        </header>

        <div className="mx-auto mt-8 max-w-[340px] rounded-[20px] border border-[rgba(255,255,255,0.08)] bg-[#0A0A0A] p-7 shadow-[0_16px_48px_rgba(0,0,0,0.14)]">
          <div className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute -right-[60px] -top-[60px] h-[200px] w-[200px]"
              style={{ background: "radial-gradient(circle, rgba(91,158,248,0.05) 0%, transparent 60%)" }}
            />

            <div className="relative mb-5 flex items-center gap-[14px]">
              <div className="h-[52px] w-[52px] overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.06)]">
                <img
                  src="https://i.pravatar.cc/100?img=20"
                  alt="Alex Müller avatar"
                  className="h-full w-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 text-left">
                <p className="truncate text-[16px] font-medium text-white">Alex Müller</p>
                <p className="truncate text-[12px] text-[#999999]">@alexm · readlink.app/@alexm</p>
              </div>
            </div>

            <div className="relative mb-4 flex items-end gap-1.5">
              <p className="text-[52px] leading-none text-white">#4</p>
              <p className="pb-1 text-[12px] text-[#666666]">of 200 shelf spots</p>
            </div>

            <p className="relative mb-5 font-mono text-[13px] text-[#999999]">
              2,310 pts · 5 referrals · 31 books
            </p>

            <div className="relative mb-5 h-[3px] w-full overflow-hidden rounded-[3px] bg-[rgba(255,255,255,0.06)]">
              <div
                className="h-full rounded-[3px]"
                style={{ width: "72%", background: "linear-gradient(90deg, #5B9EF8, rgba(91,158,248,0.3))" }}
              />
            </div>

            <p className="relative text-left text-[11px] leading-[1.6] text-[#666666]">
              Help me claim my shelf on Readlink - and build yours.
            </p>
            <span className="relative mt-[6px] block text-left font-mono text-[11px] text-[#999999]">
              readlink.app/@alexm
            </span>

            <span className="absolute bottom-5 right-5 text-[10px] tracking-[0.04em] text-[rgba(255,255,255,0.15)]">
              readlink
            </span>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-[520px] text-center text-[12px] text-[#666666]">
          Your card updates in real time. Every platform preview of your link shows your latest rank.
        </p>
      </div>
    </section>
  );
}

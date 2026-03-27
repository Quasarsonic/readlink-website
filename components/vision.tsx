export function Vision() {
  return (
    <section id="vision" data-header-theme="dark" className="py-24 lg:py-32 bg-dark-bg text-dark-fg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Ellipse/gateway section */}
        <div className="relative py-20 mb-24">
          {/* Ellipse decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-48 border border-dark-fg/20 rounded-[100%] transform -rotate-3" />
            <div className="absolute w-full max-w-3xl h-40 border border-dark-fg/10 rounded-[100%] transform rotate-2" />
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-balance">
              Your comprehensive gateway
              <br />
              to knowledge and tools
            </h2>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-dark-fg/10 bg-dark-fg/5 p-8">
            <div className="text-sm text-dark-fg/40 uppercase tracking-widest mb-4">
              Think of it like
            </div>
            <h3 className="text-xl font-medium mb-3">
              Facebook for Knowledge
            </h3>
            <p className="text-dark-fg/60 leading-relaxed">
              Facebook connected people through friendships. Readlink connects people through the ideas they care about.
            </p>
          </div>
          
          <div className="rounded-3xl border border-dark-fg/10 bg-dark-fg/5 p-8">
            <div className="text-sm text-dark-fg/40 uppercase tracking-widest mb-4">
              Or like
            </div>
            <h3 className="text-xl font-medium mb-3">
              LinkedIn for Ideas
            </h3>
            <p className="text-dark-fg/60 leading-relaxed">
              LinkedIn created professional networks. Readlink creates intellectual networks based on what you read and think.
            </p>
          </div>
          
          <div className="rounded-3xl border border-dark-fg/10 bg-dark-fg/5 p-8">
            <div className="text-sm text-dark-fg/40 uppercase tracking-widest mb-4">
              Or like
            </div>
            <h3 className="text-xl font-medium mb-3">
              Spotify for Knowledge
            </h3>
            <p className="text-dark-fg/60 leading-relaxed">
              Spotify maps taste for music. Readlink maps knowledge through the books you read and the ideas you explore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

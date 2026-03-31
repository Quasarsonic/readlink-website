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
            <h3 className="text-xl font-medium mb-3">
              CONNECT YOUR BOOKS
            </h3>
            <p className="text-dark-fg/60 leading-relaxed">
              Turn your library into a living network of ideas.
            </p>
          </div>
          
          <div className="rounded-3xl border border-dark-fg/10 bg-dark-fg/5 p-8">
            <h3 className="text-xl font-medium mb-3">
              EXPRESS YOUR MIND
            </h3>
            <p className="text-dark-fg/60 leading-relaxed">
              Show what you read, think, and care about.
            </p>
          </div>
          
          <div className="rounded-3xl border border-dark-fg/10 bg-dark-fg/5 p-8">
            <h3 className="text-xl font-medium mb-3">
              DISCOVER THROUGH OTHERS
            </h3>
            <p className="text-dark-fg/60 leading-relaxed">
              Explore ideas through people with taste like yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

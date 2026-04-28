const steps = [
  {
    number: "01",
    title: "Build Your Library",
    description:
      "Add the books you've read, are reading, or want to read. Organize them by topics, themes, and your own custom shelves.",
  },
  {
    number: "02",
    title: "Create Connections",
    description:
      "Link ideas across books, add notes, and build your personal knowledge graph. See how concepts connect and evolve.",
  },
  {
    number: "03",
    title: "Discover & Connect",
    description:
      "Find readers with similar interests, explore their libraries, and discover new books through the network.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white" data-header-theme="dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm font-medium text-muted uppercase tracking-widest mb-4">
            How it works
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance max-w-3xl mx-auto">
            From isolated reading to connected knowledge
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative h-full">
              <div className="flex h-full flex-col items-start">
                <div className="mb-4 flex h-14 items-center lg:h-16">
                  <span className="text-5xl font-bold leading-none text-accent lg:text-6xl">
                    {step.number}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="max-w-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

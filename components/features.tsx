import { Users, Brain, Library, Network, Sparkles } from "lucide-react";

export function Features() {
  return (
    <section id="features" data-header-theme="dark" className="grain py-24 lg:py-32 bg-dark-bg text-dark-fg">
      <div className="relative z-[2] mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 lg:mb-20">
          <div>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl text-balance leading-tight">
              Transform your library from a static collection into a living, interconnected entity that gives you powerful leverage to think deeper, connect smarter, and use for real intelligence.
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-dark-fg/60 leading-relaxed">
              Packed with intelligent tools to organize, connect, and expand your knowledge and elevate your reading experience.
            </p>
            <a href="#download" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-dark-fg hover:text-dark-fg/80 transition-colors">
              Download now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Features grid - bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large feature card */}
          <div className="feature-card md:col-span-2 lg:col-span-2 p-8 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-fg/10 text-sm mb-4">
                  <Library className="h-4 w-4" />
                  <span>Library Management</span>
                </div>
                <h3 className="text-2xl font-medium mb-3">
                  Build Your Personal Library
                </h3>
                <p className="text-dark-fg/60 leading-relaxed mb-6">
                  Transform your collection into a dynamic library that thinks with you. Add books you&apos;ve read, are reading, or plan to read, and organize them in a way that unlocks deeper insights and connections.
                </p>
                <div className="flex items-center gap-4 text-sm text-dark-fg/40">
                  <span>Unlimited books</span>
                </div>
              </div>
              <div className="flex-shrink-0 relative w-full lg:w-64 h-48 rounded-2xl bg-dark-fg/10 overflow-hidden flex items-center justify-center">
                <div className="grid grid-cols-3 gap-2 p-4">
                  {[1,2,3,4,5,6].map((i) => (
                    <div key={i} className="w-12 h-16 rounded bg-dark-fg/20" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Small feature card */}
          <div className="feature-card p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-dark-fg/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Knowledge Graph</h3>
            <p className="text-dark-fg/60 text-sm leading-relaxed flex-1">
              Create connections between ideas and watch your personal knowledge network grow.
            </p>
          </div>

          {/* Feature with visual */}
          <div className="feature-card p-6">
            <div className="w-12 h-12 rounded-xl bg-dark-fg/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Connect With Readers</h3>
            <p className="text-dark-fg/60 text-sm leading-relaxed">
              Find and follow readers who share your intellectual interests.
            </p>
          </div>

          {/* Feature card */}
          <div className="feature-card p-6">
            <div className="w-12 h-12 rounded-xl bg-dark-fg/10 flex items-center justify-center mb-4">
              <Network className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Intelligence Network</h3>
            <p className="text-dark-fg/60 text-sm leading-relaxed">
              Transform isolated reading into interconnected knowledge.
            </p>
          </div>

          {/* Large feature with image */}
          <div className="feature-card md:col-span-2 lg:col-span-1 p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-dark-fg/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">AI-Powered Insights</h3>
            <p className="text-dark-fg/60 text-sm leading-relaxed mb-4">
              Add a layer of intelligence to your reading. Transform the way you interact with your library as AI uncovers hidden connections, surfaces patterns in your ideas, and enhances your understanding; turning your reading into a smarter, more interconnected experience.
            </p>
            <div className="mt-auto rounded-2xl bg-dark-fg/10 p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-dark-fg/20" />
                <div className="flex-1">
                  <div className="h-2 w-24 rounded bg-dark-fg/20 mb-1" />
                  <div className="h-2 w-16 rounded bg-dark-fg/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

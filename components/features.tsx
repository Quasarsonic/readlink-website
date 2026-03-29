import { BookOpen, Users, Brain, Library, Network, Sparkles } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Library,
    title: "Build Your Library",
    description:
      "Create a digital library of the knowledge you care about. Organize books across business, science, technology, and other fields.",
  },
  {
    icon: Brain,
    title: "Personal Knowledge Graph",
    description:
      "Create an intelligent personal thinking graph that represents how you think, not just what you read.",
  },
  {
    icon: Users,
    title: "Connect With Readers",
    description:
      "Connect with others who read similar books or explore similar ideas. Discovery happens naturally.",
  },
  {
    icon: Network,
    title: "Intelligence Network",
    description:
      "Transform isolated reading into an interconnected knowledge network where learning compounds.",
  },
  {
    icon: BookOpen,
    title: "Explore Libraries",
    description:
      "Discover libraries that represent how people think. Find new books through the connections others have made.",
  },
  {
    icon: Sparkles,
    title: "Expand Knowledge",
    description:
      "Patterns emerge across books and minds. Intelligence becomes collective as libraries connect.",
  },
];

export function Features() {
  return (
    <section id="features" data-header-theme="dark" className="py-24 lg:py-32 bg-dark-bg text-dark-fg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 lg:mb-20">
          <div>
            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl text-balance leading-tight">
              Your ultimate reading companion, packed with features to simplify your knowledge journey
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-dark-fg/60 leading-relaxed">
              From advanced tools to seamless integration, enjoy powerful features to elevate your reading experience.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-dark-fg hover:text-dark-fg/80 transition-colors">
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
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-dark-fg/5 border border-dark-fg/10 p-8 relative overflow-hidden">
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
                  Track your entire book collection. Add what you&apos;ve read, are reading, or want to read next. Organize by topics, themes, or custom categories.
                </p>
                <div className="flex items-center gap-4 text-sm text-dark-fg/40">
                  <span>Unlimited books</span>
                  <span className="w-1 h-1 rounded-full bg-dark-fg/40" />
                  <span>Custom tags</span>
                  <span className="w-1 h-1 rounded-full bg-dark-fg/40" />
                  <span>Reading stats</span>
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
          <div className="rounded-3xl bg-dark-fg/5 border border-dark-fg/10 p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-dark-fg/10 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Knowledge Graph</h3>
            <p className="text-dark-fg/60 text-sm leading-relaxed flex-1">
              Create connections between ideas and watch your personal knowledge network grow.
            </p>
          </div>

          {/* Feature with visual */}
          <div className="rounded-3xl bg-dark-fg/5 border border-dark-fg/10 p-6">
            <div className="w-12 h-12 rounded-xl bg-dark-fg/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Connect With Readers</h3>
            <p className="text-dark-fg/60 text-sm leading-relaxed">
              Find and follow readers who share your intellectual interests.
            </p>
          </div>

          {/* Feature card */}
          <div className="rounded-3xl bg-dark-fg/5 border border-dark-fg/10 p-6">
            <div className="w-12 h-12 rounded-xl bg-dark-fg/10 flex items-center justify-center mb-4">
              <Network className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">Intelligence Network</h3>
            <p className="text-dark-fg/60 text-sm leading-relaxed">
              Transform isolated reading into interconnected knowledge.
            </p>
          </div>

          {/* Large feature with image */}
          <div className="md:col-span-2 lg:col-span-1 rounded-3xl bg-dark-fg/5 border border-dark-fg/10 p-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-dark-fg/10 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium mb-2">AI-Powered Insights</h3>
            <p className="text-dark-fg/60 text-sm leading-relaxed mb-4">
              Get personalized recommendations and discover patterns across your reading history.
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

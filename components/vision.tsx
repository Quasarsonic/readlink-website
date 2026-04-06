import { Brain, Library, Network } from "lucide-react";

export function Vision() {
  return (
    <section
      id="vision"
      data-header-theme="dark"
      className="overflow-x-hidden py-24 lg:py-32 bg-dark-bg text-dark-fg"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Ellipse/gateway section */}
        <div className="relative py-24 pb-28 sm:py-20 sm:pb-24 mb-24">
          {/* Ellipse decoration — overflow visible so arcs aren’t clipped; section uses overflow-x-hidden for wide rings */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="vision-orbit-1 w-[min(118vw,72rem)] sm:w-[140vw] sm:max-w-6xl aspect-[16/5] rounded-[100%] border border-dark-fg/20 will-change-transform" />
            <div className="vision-orbit-2 absolute w-[min(125vw,76rem)] sm:w-[150vw] sm:max-w-[68rem] aspect-[17/5] rounded-[100%] border border-cyan-200/12 will-change-transform" />
            <div className="vision-orbit-3 absolute w-[min(112vw,64rem)] sm:w-[130vw] sm:max-w-5xl aspect-[15/5] rounded-[100%] border border-violet-200/10 will-change-transform" />
          </div>
          
          <div className="relative z-10 text-center">
            <p className="mx-auto max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed text-balance">
              Turn every book you read into lasting knowledge, connect ideas and insights into an intelligence network, and access a community of knowledge architects
            </p>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-dark-fg/10 bg-dark-fg/5 p-8">
            <div className="mb-3 flex items-center gap-3">
              <Library className="h-6 w-6 text-dark-fg/80" />
              <h3 className="text-xl font-medium">Build True Knowledge</h3>
            </div>
            <p className="text-dark-fg/60 leading-relaxed">
              Stop the fast reading and fast forgetting loop. Your effort
              should compound, not vanish from your memory.
              <br />
              <br />
              Turn every book you read into a building block of usable
              knowledge. Grow your library into a networked intelligence system
              you can leverage to create real value.
            </p>
          </div>
          
          <div className="rounded-3xl border border-dark-fg/10 bg-dark-fg/5 p-8">
            <div className="mb-3 flex items-center gap-3">
              <Brain className="h-6 w-6 text-dark-fg/80" />
              <h3 className="text-xl font-medium">Meaningful Reading</h3>
            </div>
            <p className="text-dark-fg/60 leading-relaxed">
              Stop Chasing Streaks.
              <br />
              Those who read with purpose don&apos;t look for motivation; they
              seek to elevate their ideas and apply their knowledge to shape
              the world.
              <br />
              <br />
              Readlink is for readers who know what&apos;s worth their time.
              Level up to a community of minds that read with purpose, think
              deeply, and turn knowledge into impact.
            </p>
          </div>
          
          <div className="rounded-3xl border border-dark-fg/10 bg-dark-fg/5 p-8">
            <div className="mb-3 flex items-center gap-3">
              <Network className="h-6 w-6 text-dark-fg/80" />
              <h3 className="text-xl font-medium">Networked Intelligence</h3>
            </div>
            <p className="text-dark-fg/60 leading-relaxed">
              Your library shouldn&apos;t be sitting still.
              <br />
              Real knowledge doesn&apos;t live in isolation, it grows when ideas
              connect.
              <br />
              <br />
              Upload and connect your library into a living network that
              accelerates the evolution of your thinking. Connect with readers,
              dicover their libraries, link insights, and watch your knowledge
              compound into real intellectual power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

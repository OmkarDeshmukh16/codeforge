import React from 'react';

export default function ComingSoon() {
  return (
    <section
      id="about"
      className="relative bg-slate-50/70 dark:bg-[#080A14] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300"
    >
      {/* Ambient Blue Glowing Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/[0.05] dark:bg-blue-600/[0.1] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center z-10 space-y-10">
        
        {/* Section Headings */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            We’re{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-xs dark:drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              almost ready.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
            Our new digital experience is taking shape. We’re putting the finishing touches on CodeForge.
          </p>
        </div>

        {/* Sophisticated Architectural Progress Line with Glowing Energy Rail */}
        <div className="max-w-xl mx-auto pt-6">
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0C101D]/90 border border-slate-200 dark:border-blue-500/30 shadow-xl dark:shadow-[0_0_35px_rgba(37,99,235,0.2)] backdrop-blur-sm space-y-6">
            
            {/* Concept Markers */}
            <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-slate-400">
              <span className="text-blue-600 dark:text-cyan-400 font-semibold drop-shadow-xs dark:drop-shadow-[0_0_8px_#22d3ee]">ARCHITECTURE</span>
              <span className="text-slate-700 dark:text-slate-200 font-semibold">EXPERIENCE</span>
            </div>

            {/* Glowing Architectural Line with Pulse Node */}
            <div className="relative w-full h-1.5 bg-slate-200 dark:bg-white/[0.08] rounded-full overflow-hidden shadow-inner">
              {/* Progress Beam with Neon Glow */}
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full shadow-xs dark:shadow-[0_0_15px_#38bdf8]"
                style={{ width: '70%' }}
              >
                {/* Clean scan line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-scan-line" />
              </div>

              {/* Glowing Architectural Node */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 dark:border-cyan-400 shadow-md dark:shadow-[0_0_14px_#38bdf8] animate-arch-node"
                style={{ left: 'calc(70% - 8px)' }}
              />
            </div>

            {/* Status subline */}
            <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-ping shadow-[0_0_6px_#22d3ee]" />
              <span>Finalizing digital launch preparations</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';

export default function CinematicTransition() {
  return (
    <section className="relative bg-white dark:bg-[#06080F] py-28 sm:py-40 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">
      {/* Central Luminous Glowing Light Pool */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/[0.05] dark:bg-blue-600/[0.1] rounded-full blur-3xl pointer-events-none" />

      {/* Animated network / orbit line visual with subtle glow */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-40">
        <svg
          className="w-[700px] h-[700px] text-blue-600/15 dark:text-blue-500/25 animate-slow-rotate"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          <ellipse cx="200" cy="200" rx="190" ry="80" strokeDasharray="4 6" />
          <ellipse cx="200" cy="200" rx="150" ry="120" strokeDasharray="3 5" />
          <circle cx="200" cy="200" r="170" strokeDasharray="6 8" />
          <line x1="10" y1="200" x2="390" y2="200" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center z-10 space-y-6">
        {/* Cinematic Large Statement */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] font-sans drop-shadow-none dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
          Technology is changing.<br />
          <span className="bg-gradient-to-r from-slate-500 via-slate-700 to-slate-500 dark:from-slate-400 dark:via-slate-300 dark:to-slate-400 bg-clip-text text-transparent font-light">
            So are we.
          </span>
        </h2>

        {/* Minimal Sub-line */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 tracking-wide font-normal max-w-md mx-auto pt-2">
          Engineering software with clarity, precision, and purpose.
        </p>
      </div>
    </section>
  );
}

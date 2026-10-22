import React from 'react';
import { CheckCircle2, Clock, Sparkles, ArrowRight } from 'lucide-react';

export default function ComingSoon({ onOpenContact }) {
  const milestones = [
    { title: 'Core Architecture & Infrastructure', status: 'Complete', progress: 100, done: true },
    { title: 'Full-Stack Web & Software Framework', status: 'Complete', progress: 100, done: true },
    { title: 'UI Experience & Animation Synthesis', status: 'Final Polish', progress: 95, done: true },
    { title: 'Public Production Deployment', status: 'Target: 25/10/2026', progress: 0, done: false },
  ];

  return (
    <section
      id="progress"
      className="relative bg-slate-50/70 dark:bg-[#080A14] py-20 sm:py-28 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300"
    >
      {/* Ambient Blue Glowing Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/[0.06] dark:bg-blue-600/[0.12] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 z-10 space-y-12">
        
        {/* Section Headings */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-500" />
            <span>Target Launch Date: 25 October 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            We’re{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent drop-shadow-xs dark:drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
              almost ready.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            Our new digital experience is taking shape. We’re putting the finishing touches on CodeForge for our official release on <span className="font-semibold text-blue-600 dark:text-cyan-300">October 25, 2026</span>.
          </p>
        </div>

        {/* Sophisticated Architectural Progress Line Card */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0C101D]/90 border border-slate-200 dark:border-blue-500/30 shadow-xl dark:shadow-[0_0_35px_rgba(37,99,235,0.2)] backdrop-blur-sm space-y-6">
            
            {/* Header / Percentage */}
            <div className="flex items-center justify-between text-xs font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400">
              <span className="text-blue-600 dark:text-cyan-400 font-semibold drop-shadow-xs dark:drop-shadow-[0_0_8px_#22d3ee]">
                SYSTEM READINESS
              </span>
              <span className="text-slate-900 dark:text-white font-bold text-sm">
                92% COMPLETE
              </span>
            </div>

            {/* Glowing Architectural Line with Pulse Node */}
            <div className="relative w-full h-2 bg-slate-200 dark:bg-white/[0.08] rounded-full overflow-hidden shadow-inner">
              {/* Progress Beam with Neon Glow */}
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 rounded-full shadow-xs dark:shadow-[0_0_15px_#38bdf8]"
                style={{ width: '92%' }}
              >
                {/* Clean scan line */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-scan-line" />
              </div>

              {/* Glowing Architectural Node */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-600 dark:border-cyan-400 shadow-md dark:shadow-[0_0_14px_#38bdf8] animate-arch-node"
                style={{ left: 'calc(92% - 8px)' }}
              />
            </div>

            {/* Status subline */}
            <div className="pt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping shadow-[0_0_6px_#34d399]" />
              <span>Final pre-launch testing & production staging in progress</span>
            </div>

          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {milestones.map((m, idx) => (
            <div
              key={m.title}
              className={`p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 flex flex-col justify-between ${
                m.done
                  ? 'bg-white dark:bg-[#0B0F1E]/80 border-slate-200/90 dark:border-white/[0.08] hover:border-blue-500/40'
                  : 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-200/80 dark:border-cyan-500/30'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                  Phase 0{idx + 1}
                </span>
                {m.done ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Clock className="w-4 h-4 text-blue-600 dark:text-cyan-400 animate-pulse" />
                )}
              </div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug">
                {m.title}
              </h4>
              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 dark:text-slate-400">{m.status}</span>
                <span className={`font-bold ${m.done ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-cyan-400'}`}>
                  {m.done ? `${m.progress}%` : '25/10/26'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA Hook */}
        {onOpenContact && (
          <div className="text-center pt-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors cursor-pointer group"
            >
              <span>Have a project starting soon? Connect with our engineering team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

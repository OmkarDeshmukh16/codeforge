import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FinalCTA({ onOpenContact }) {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative overflow-hidden py-28 sm:py-44 transition-colors duration-300">

      {/* ── Premium layered background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:from-[#05070E] dark:via-[#07091A] dark:to-[#05070E]" />

      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full
          bg-blue-500/[0.06] dark:bg-blue-600/[0.18] blur-[120px]" />
        <div className="animate-orb-2 absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full
          bg-indigo-500/[0.05] dark:bg-indigo-600/[0.14] blur-[100px]" />
        <div className="animate-orb-3 absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full
          bg-cyan-500/[0.04] dark:bg-cyan-500/[0.12] blur-[90px]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-subtle-grid opacity-25" />

        {/* Top radial gradient — dark */}
        <div className="hidden dark:block absolute inset-0
          bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent)]" />

        {/* Horizontal divider lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8 z-10">

        {/* Label */}
        <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full
          bg-blue-50/80 dark:bg-blue-950/60
          border border-blue-200/80 dark:border-blue-500/40
          shadow-sm dark:shadow-[0_0_20px_rgba(37,99,235,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-700 dark:text-blue-300">
            Ready to Start?
          </span>
        </div>

        {/* Heading */}
        <h2 className="reveal text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
          Let's build{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
              dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400
              bg-clip-text text-transparent
              dark:drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]">
              what's next.
            </span>
            {/* Underline */}
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full
              bg-gradient-to-r from-blue-500/50 via-cyan-500/60 to-indigo-500/50
              dark:shadow-[0_0_8px_#38bdf8]" />
          </span>
        </h2>

        {/* Copy */}
        <p className="reveal text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto">
          Have an idea, challenge or digital product in mind? Let's talk about how technology can turn it into reality.
        </p>

        {/* CTA */}
        <div className="reveal pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="btn-shimmer inline-flex items-center gap-2.5 px-10 py-4 rounded-xl
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-500 hover:to-indigo-500
              text-white font-semibold text-sm
              shadow-xl shadow-blue-600/30
              dark:shadow-[0_0_40px_rgba(37,99,235,0.6)]
              hover:shadow-2xl dark:hover:shadow-[0_0_60px_rgba(59,130,246,0.85)]
              hover:-translate-y-0.5 active:scale-98 transition-all duration-200 cursor-pointer group"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <span className="text-xs text-slate-400 dark:text-slate-600">No obligation, no commitment.</span>
        </div>

      </div>
    </section>
  );
}

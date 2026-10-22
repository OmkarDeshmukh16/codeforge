import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function PortfolioPlaceholder() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="work" className="relative bg-white dark:bg-[#06080F] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 reveal">
          <div>
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Our portfolio is{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                taking shape.
              </span>
            </h2>
          </div>
        </div>

        {/* Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="reveal group relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-white/[0.07] bg-slate-50 dark:bg-[#0B0F1B]/80 hover:border-blue-500/40 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.18)] transition-all duration-300"
              style={{ transitionDelay: `${n * 80}ms` }}
            >
              {/* Placeholder visual */}
              <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200/70 dark:from-[#0D1020] dark:to-[#0A0E1A] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-subtle-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/[0.08] dark:bg-blue-500/[0.12] rounded-full blur-2xl" />
                {/* Abstract tech mark */}
                <svg viewBox="0 0 80 80" className="w-14 h-14 text-blue-600/20 dark:text-blue-500/25" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="40,10 65,25 65,55 40,70 15,55 15,25" strokeDasharray="4 3" />
                  <circle cx="40" cy="40" r="12" strokeDasharray="3 4" />
                  <line x1="40" y1="10" x2="40" y2="28" />
                  <line x1="40" y1="52" x2="40" y2="70" />
                </svg>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                    Coming Soon
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Project {n < 10 ? `0${n}` : n}</h3>
                <p className="text-sm text-slate-400 dark:text-slate-500">
                  This case study will be published when the project is ready to be featured.
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-slate-500 dark:text-slate-600 max-w-lg mx-auto leading-relaxed">
          We are actively building and shipping. Real project case studies will be added here as they become available for public sharing.
        </p>
      </div>
    </section>
  );
}

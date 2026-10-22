import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Reusable inner-page hero used by About, Services, Solutions, Contact pages.
 */
export default function PageHero({ label, title, titleAccent, subtitle, children }) {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative bg-white dark:bg-[#06080F] pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-subtle-grid opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/[0.05] dark:bg-blue-600/[0.1] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="max-w-3xl">
          {label && (
            <p className="reveal text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-5">
              {label}
            </p>
          )}
          <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            {title}{' '}
            {titleAccent && (
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            )}
          </h1>
          {subtitle && (
            <p className="reveal mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

import React from 'react';

export default function BrandStatement() {
  const pillars = [
    {
      number: '01',
      title: 'Innovation',
      statement: 'Turning ambitious ideas into intelligent digital solutions.',
    },
    {
      number: '02',
      title: 'Technology',
      statement: 'Building scalable systems designed for the future.',
    },
    {
      number: '03',
      title: 'Impact',
      statement: 'Creating technology that delivers meaningful business value.',
    },
  ];

  return (
    <section
      id="statement"
      className="relative bg-slate-50/80 dark:bg-[#070913] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300"
    >
      {/* Ambient Neon Backlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/[0.06] dark:bg-blue-600/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/[0.04] dark:bg-cyan-500/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16 sm:mb-20 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent drop-shadow-xs dark:drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              what's next.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl">
            CodeForge combines technology, intelligence and thoughtful engineering to build digital experiences for modern businesses.
          </p>
        </div>

        {/* 3 Minimal Editorial Cards with Glowing Borders on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-2xl bg-white dark:bg-[#0B0F1B]/80 p-8 sm:p-10 border border-slate-200/80 dark:border-white/[0.08] hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-[0_0_35px_rgba(37,99,235,0.25)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 backdrop-blur-xs"
            >
              <div className="space-y-6">
                {/* Minimal Editorial Monospace Index with Hover Glow */}
                <div className="text-xs font-mono font-semibold tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_#22d3ee] transition-colors">
                  {item.number} — {item.title}
                </div>

                {/* Clear Headline Statement */}
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-snug tracking-tight">
                  {item.statement}
                </h3>
              </div>

              {/* Glowing Accent Line on Hover */}
              <div className="mt-10 h-0.5 w-10 bg-slate-200 dark:bg-white/10 group-hover:w-full group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:shadow-[0_0_12px_#3b82f6] transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

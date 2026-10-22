import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const pillars = [
  {
    num: '01',
    title: 'Innovation',
    desc: 'We approach technology with curiosity and a focus on meaningful outcomes.',
    accent: 'text-blue-600 dark:text-blue-400',
  },
  {
    num: '02',
    title: 'Engineering',
    desc: 'We build with scalability, performance and reliability at the core.',
    accent: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    num: '03',
    title: 'Partnership',
    desc: 'We understand the business problem deeply before writing a single line of code.',
    accent: 'text-cyan-600 dark:text-cyan-400',
  },
];

export default function WhoWeAre() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      id="who-we-are"
      className="relative bg-slate-50/60 dark:bg-[#070913] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300"
    >
      {/* Orb background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-orb-3 absolute top-1/2 left-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-blue-500/[0.05] dark:bg-blue-600/[0.09] blur-[100px]" />
        <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_60%,rgba(37,99,235,0.06),transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">

          {/* Left: Header + description */}
          <div className="reveal">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 rounded-full" />
              <p className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-400">
                Who We Are
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Technology built{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  with purpose.
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500/50 to-indigo-500/50 dark:from-blue-400/50 dark:to-cyan-400/50" />
              </span>
            </h2>

            <p className="mt-7 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              CodeForge is a technology company focused on building thoughtful, scalable and reliable digital solutions for modern businesses.
            </p>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-500 leading-relaxed">
              We combine engineering discipline with a deep understanding of business needs — creating technology that delivers real impact, not just features.
            </p>

            {/* Incubation badge */}
            <div className="mt-10 inline-flex items-center gap-3 px-4 py-3 rounded-xl
              bg-white dark:bg-[#0B0F1B]/70
              border border-slate-200 dark:border-white/[0.08]
              shadow-sm">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-800 dark:text-white leading-tight">DYPCOEI Incubation Center</div>
                <div className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Supported &amp; incubated</div>
              </div>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.num}
                className={`reveal group relative flex gap-5 p-6 rounded-2xl
                  bg-white/90 dark:bg-[#0B0F1B]/70
                  border border-slate-200/80 dark:border-white/[0.07]
                  hover:border-blue-500/40 dark:hover:border-blue-500/40
                  hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]
                  hover:-translate-y-0.5 transition-all duration-300 overflow-hidden`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Left accent bar */}
                <div className={`absolute left-0 top-4 bottom-4 w-0.5 rounded-r-full transition-all duration-300
                  bg-transparent group-hover:bg-gradient-to-b group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-cyan-500`} />

                <div className={`flex-shrink-0 text-sm font-mono font-black ${p.accent} pt-0.5`}>
                  {p.num}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white mb-1.5">{p.title}</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}

            {/* Stat row */}
            <div className="reveal grid grid-cols-3 gap-4 pt-2" style={{ transitionDelay: '240ms' }}>
              {[
                { val: '5+', label: 'Services' },
                { val: '4', label: 'Solutions' },
                { val: '1', label: 'Mission' },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-white/60 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.06]">
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 mb-0.5">{s.val}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

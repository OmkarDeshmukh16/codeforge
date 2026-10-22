import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const capabilities = [
  {
    num: '01',
    title: 'Digital Products',
    desc: 'End-to-end product engineering — from concept validation to a production-ready digital product that users love.',
    details: ['Product Design', 'Frontend Engineering', 'Backend Systems', 'Mobile Applications'],
  },
  {
    num: '02',
    title: 'Intelligent Applications',
    desc: 'Applications powered by AI and machine learning that make smarter decisions and automate complex workflows.',
    details: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'AI Integration'],
  },
  {
    num: '03',
    title: 'Business Automation',
    desc: 'Streamlining business operations by automating repetitive processes, reducing costs and improving accuracy.',
    details: ['Process Automation', 'Workflow Systems', 'System Integration', 'Data Pipelines'],
  },
  {
    num: '04',
    title: 'Scalable Platforms',
    desc: 'High-performance, cloud-native platforms built to scale as your business grows — reliable, fast and secure.',
    details: ['Cloud Architecture', 'Microservices', 'API Platforms', 'Infrastructure'],
  },
];

export default function SolutionsCapabilities() {
  const [active, setActive] = useState(null);
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="solutions" className="relative bg-slate-50/60 dark:bg-[#070913] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/[0.04] dark:bg-indigo-600/[0.08] rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 reveal">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-4">
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Technology designed{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              around your needs.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We deliver focused, high-quality solutions across four core capability areas.
          </p>
        </div>

        {/* Capability Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap, i) => {
            const isActive = active === i;
            return (
              <div
                key={cap.num}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`reveal group relative rounded-2xl p-8 border cursor-default transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'bg-white dark:bg-[#0D1426] border-blue-500/60 shadow-xl dark:shadow-[0_0_40px_rgba(37,99,235,0.28)] -translate-y-1'
                    : 'bg-white/70 dark:bg-[#0B0F1B]/70 border-slate-200/80 dark:border-white/[0.07] hover:border-blue-400/40'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Subtle top glow line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 shadow-[0_0_12px_#3b82f6]' : 'bg-transparent'}`} />

                {/* Number */}
                <div className={`text-xs font-mono font-bold tracking-widest mb-4 transition-colors duration-300 ${isActive ? 'text-blue-600 dark:text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]' : 'text-slate-400 dark:text-slate-600'}`}>
                  {cap.num}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 tracking-tight">{cap.title}</h3>

                {/* Desc */}
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{cap.desc}</p>

                {/* Detail list — reveals on hover */}
                <div className={`grid grid-cols-2 gap-2 transition-all duration-300 overflow-hidden ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {cap.details.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-500 dark:bg-cyan-400 flex-shrink-0" />
                      <span className="text-xs text-slate-600 dark:text-slate-400">{d}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom line */}
                <div className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full transition-all duration-500 ${isActive ? 'bg-blue-600/30 dark:bg-blue-500/30 w-full' : 'w-0 bg-transparent'}`} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

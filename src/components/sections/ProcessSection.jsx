import React, { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand the business, users and the problem deeply before proposing a solution.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Shape the right product approach and technical architecture for your specific context.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Engineer, test and iteratively refine the solution with quality and performance in mind.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Deploy with confidence, monitor closely, and continuously improve post-launch.',
  },
];

export default function ProcessSection() {
  const ref = useScrollReveal();
  const lineRef = useRef(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLineVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="process" className="relative bg-white dark:bg-[#06080F] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-subtle-grid opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/[0.04] dark:bg-blue-600/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">

        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20 reveal">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-4">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            From Idea{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              to Impact.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div ref={lineRef} className="relative">

          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-9 left-0 right-0 h-px bg-slate-200 dark:bg-white/[0.06] z-0">
            <div
              className={`h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 shadow-[0_0_8px_#3b82f6] transition-all duration-1500 ease-out`}
              style={{ width: lineVisible ? '100%' : '0%', transition: 'width 1.4s ease' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="reveal flex flex-col items-start lg:items-center lg:text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step indicator */}
                <div className="relative flex-shrink-0 mb-6">
                  {/* Node circle */}
                  <div className="w-[72px] h-[72px] rounded-full bg-white dark:bg-[#0B0F1B] border-2 border-blue-600/70 dark:border-blue-500/60 shadow-[0_0_20px_rgba(37,99,235,0.2)] dark:shadow-[0_0_25px_rgba(37,99,235,0.35)] flex items-center justify-center transition-all duration-300 hover:scale-105">
                    <span className="text-xl font-bold font-sans text-blue-600 dark:text-blue-400">{step.num}</span>
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-blue-500/30 dark:border-blue-400/20 animate-ping" style={{ animationDuration: `${2 + i * 0.4}s` }} />
                </div>

                {/* Content */}
                <div className="lg:px-2">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                </div>

                {/* Mobile connector line */}
                {i < steps.length - 1 && (
                  <div className="sm:hidden mt-6 ml-9 w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

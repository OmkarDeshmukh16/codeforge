import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const techCategories = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/30',
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Python', 'REST APIs', 'GraphQL'],
    color: 'from-indigo-500/20 to-blue-500/10',
    border: 'border-indigo-500/30',
  },
  {
    label: 'Cloud',
    items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'],
    color: 'from-cyan-500/20 to-blue-500/10',
    border: 'border-cyan-500/30',
  },
  {
    label: 'AI & Data',
    items: ['TensorFlow', 'OpenAI', 'LangChain', 'PostgreSQL'],
    color: 'from-violet-500/20 to-indigo-500/10',
    border: 'border-violet-500/30',
  },
  {
    label: 'Infrastructure',
    items: ['Linux', 'Nginx', 'CI/CD', 'Git'],
    color: 'from-blue-500/15 to-slate-500/10',
    border: 'border-blue-500/20',
  },
  {
    label: 'Mobile',
    items: ['React Native', 'Android', 'iOS', 'PWA'],
    color: 'from-sky-500/20 to-blue-500/10',
    border: 'border-sky-500/30',
  },
];

export default function TechSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-slate-50/60 dark:bg-[#070913] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.05] dark:bg-blue-600/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">

        {/* Header */}
        <div className="max-w-3xl mb-16 reveal">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-4">
            Technology Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Engineering for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              the future.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We work with modern, proven technologies — chosen for reliability, developer experience, and long-term maintainability.
          </p>
        </div>

        {/* Tech Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {techCategories.map((cat, i) => (
            <div
              key={cat.label}
              className={`reveal group p-6 rounded-2xl bg-gradient-to-br ${cat.color} border ${cat.border} dark:border-opacity-50 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] transition-all duration-300`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-4">
                {cat.label}
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-xs text-slate-400 dark:text-slate-600 font-mono">
          Technology choices are always guided by the needs of the project — not trend-following.
        </p>
      </div>
    </section>
  );
}

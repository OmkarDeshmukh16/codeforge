import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Globe, Brain, Cloud, RefreshCw, Lightbulb } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  {
    icon: Code2,
    num: '01',
    title: 'Software Development',
    desc: 'Custom software engineered around your business requirements — built to perform, scale and last.',
    tags: ['Custom Software', 'APIs', 'Integrations'],
    gradient: 'from-blue-500/15 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/15',
    iconBg: 'bg-blue-50 dark:bg-blue-500/15 border-blue-100 dark:border-blue-500/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    icon: Globe,
    num: '02',
    title: 'Web & Application Development',
    desc: 'Modern, responsive and scalable digital experiences that engage users and drive business outcomes.',
    tags: ['Web Apps', 'Mobile', 'PWA'],
    gradient: 'from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/15 dark:to-blue-500/15',
    iconBg: 'bg-cyan-50 dark:bg-cyan-500/10 border-cyan-100 dark:border-cyan-500/25',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Brain,
    num: '03',
    title: 'AI & Intelligent Solutions',
    desc: 'Practical AI-powered applications and automation that solve real business problems.',
    tags: ['AI/ML', 'Automation', 'NLP'],
    gradient: 'from-violet-500/10 to-indigo-500/10 dark:from-violet-500/15 dark:to-indigo-500/15',
    iconBg: 'bg-violet-50 dark:bg-violet-500/10 border-violet-100 dark:border-violet-500/25',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Cloud,
    num: '04',
    title: 'Cloud & Technology',
    desc: 'Reliable infrastructure and scalable cloud solutions that keep your systems running at peak performance.',
    tags: ['Cloud', 'DevOps', 'Infrastructure'],
    gradient: 'from-sky-500/10 to-blue-500/10 dark:from-sky-500/15 dark:to-blue-500/15',
    iconBg: 'bg-sky-50 dark:bg-sky-500/10 border-sky-100 dark:border-sky-500/25',
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
  {
    icon: RefreshCw,
    num: '05',
    title: 'Digital Transformation',
    desc: 'Helping businesses modernize processes, systems and teams through thoughtful technology adoption.',
    tags: ['Strategy', 'Process', 'Migration'],
    gradient: 'from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/15 dark:to-teal-500/15',
    iconBg: 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-100 dark:border-emerald-500/25',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: Lightbulb,
    num: '06',
    title: 'Technology Consulting',
    desc: 'Turning technical challenges into clear, practical solutions with architecture guidance and strategic advisory.',
    tags: ['Advisory', 'Architecture', 'Strategy'],
    gradient: 'from-amber-500/10 to-orange-500/10 dark:from-amber-500/15 dark:to-orange-500/10',
    iconBg: 'bg-amber-50 dark:bg-amber-500/10 border-amber-100 dark:border-amber-500/25',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
];

export default function ServicesGrid() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="services" className="relative bg-white dark:bg-[#06080F] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">

      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-orb-2 absolute top-1/3 left-1/5 w-[500px] h-[500px] rounded-full bg-blue-500/[0.04] dark:bg-blue-600/[0.08] blur-[100px]" />
        <div className="animate-orb-1 absolute bottom-1/4 right-1/5 w-[400px] h-[400px] rounded-full bg-indigo-500/[0.04] dark:bg-indigo-600/[0.07] blur-[90px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 reveal">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-400 mb-4">
            What We Build
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Services designed to{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                create real value.
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-500/40 to-indigo-500/40 dark:from-blue-400/50 dark:to-cyan-400/50" />
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            From digital experiences to intelligent software systems — we turn ideas into technology that creates measurable business impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className={`reveal grad-border-card group relative flex flex-col p-7 rounded-2xl bg-gradient-to-br ${svc.gradient} border border-slate-200/80 dark:border-white/[0.08] hover:border-transparent hover:shadow-2xl dark:hover:shadow-[0_20px_60px_-10px_rgba(37,99,235,0.3)] hover:-translate-y-1.5 transition-all duration-300 cursor-default overflow-hidden`}
                style={{ transitionDelay: `${i * 55}ms` }}
              >
                {/* Large watermark number */}
                <div className="absolute -top-3 -right-1 text-[80px] font-black text-slate-900/[0.03] dark:text-white/[0.04] select-none leading-none pointer-events-none font-sans">
                  {svc.num}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${svc.iconBg} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon className={`w-5 h-5 ${svc.iconColor}`} />
                </div>

                {/* Small number label */}
                <div className={`text-[10px] font-mono font-bold tracking-widest mb-2 ${svc.iconColor} opacity-70`}>
                  {svc.num}
                </div>

                {/* Content */}
                <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-2 leading-snug">{svc.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-grow">{svc.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/70 dark:bg-white/[0.05] text-slate-500 dark:text-slate-500 border border-slate-200/80 dark:border-white/[0.08]">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Animated bottom accent line */}
                <div className="mt-5 h-0.5 w-6 rounded-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent group-hover:w-full group-hover:via-blue-500 dark:group-hover:via-cyan-400 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.5)] transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal mt-14 text-center">
          <Link
            to="/services"
            className="btn-shimmer inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-500 hover:to-indigo-500
              text-white font-semibold text-sm
              shadow-lg shadow-blue-600/25 dark:shadow-[0_0_25px_rgba(37,99,235,0.4)]
              hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}

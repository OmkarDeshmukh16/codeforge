import React from 'react';
import PageHero from '../components/sections/PageHero';
import FinalCTA from '../components/sections/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
  {
    num: '01',
    title: 'Innovation',
    desc: 'We approach every problem with curiosity — looking for solutions that are thoughtful, practical and forward-looking.',
  },
  {
    num: '02',
    title: 'Integrity',
    desc: 'Transparent communication, honest advice and doing the right thing — even when it is not the easiest path.',
  },
  {
    num: '03',
    title: 'Engineering Excellence',
    desc: 'We take pride in our craft. Code quality, system design and reliability are not optional — they are the standard.',
  },
  {
    num: '04',
    title: 'Customer Success',
    desc: 'We measure our success by our clients\' outcomes. Technology is only valuable when it creates real business impact.',
  },
];

const principles = [
  { title: 'Mission', body: 'To help businesses succeed by building technology that is reliable, purposeful and built to last.' },
  { title: 'Vision', body: 'A world where every business — regardless of size — can access world-class software and technology solutions.' },
];

function AboutSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-slate-50/60 dark:bg-[#070913] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/[0.05] dark:bg-blue-600/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div className="reveal">
            <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-5">
              The Company
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              Who is CodeForge?
            </h2>
            <div className="space-y-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                CodeForge is a software and technology company built with a single conviction: technology, when built thoughtfully, can transform how businesses operate and grow.
              </p>
              <p>
                We work with businesses to design, engineer and deliver digital solutions that are reliable, scalable and genuinely useful — not just technically impressive.
              </p>
              <p>
                Our work spans across web and application development, intelligent systems, cloud infrastructure and digital transformation. Each engagement is approached with rigor, care and a deep commitment to quality.
              </p>
            </div>
          </div>

          {/* Right: Mission + Vision */}
          <div className="space-y-5">
            {principles.map((p, i) => (
              <div key={p.title} className={`reveal p-7 rounded-2xl bg-white dark:bg-[#0B0F1B]/80 border border-slate-200/80 dark:border-white/[0.07]`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400 mb-3">{p.title}</div>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">{p.body}</p>
              </div>
            ))}

            {/* DYPCOEI note */}
            <div className="reveal p-5 rounded-xl bg-blue-50/80 dark:bg-blue-600/[0.08] border border-blue-100 dark:border-blue-500/25 text-sm text-blue-700 dark:text-blue-300 leading-relaxed" style={{ transitionDelay: '160ms' }}>
              <span className="font-semibold">Incubated at DYPCOEI</span> — CodeForge is a product of the Dr. D.Y. Patil College of Engineering and Innovation incubation program.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-white dark:bg-[#06080F] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="mb-16 reveal">
          <p className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-4">Our Values</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            What we stand for.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <div
              key={v.num}
              className="reveal group p-8 rounded-2xl bg-slate-50/80 dark:bg-[#0B0F1B]/80 border border-slate-200/80 dark:border-white/[0.07] hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-[0_0_35px_rgba(37,99,235,0.22)] hover:-translate-y-0.5 transition-all duration-300"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex gap-5">
                <div className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 group-hover:drop-shadow-[0_0_8px_#22d3ee] transition-all pt-0.5">{v.num}</div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
              <div className="mt-6 h-0.5 w-8 bg-slate-200 dark:bg-white/10 group-hover:w-full group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:shadow-[0_0_10px_#3b82f6] transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurApproach() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative bg-slate-50/60 dark:bg-[#070913] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-indigo-500/[0.04] dark:bg-indigo-600/[0.07] rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="reveal text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400 mb-5">Our Approach</p>
          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-8">
            Built for what comes{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              next.
            </span>
          </h2>
          <p className="reveal text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            We don't just write code. We embed ourselves in your business context — understanding the people, the problem and the outcomes before proposing any solution. This discipline ensures the technology we build creates real, lasting value.
          </p>
        </div>

        {/* Three principles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            { label: 'Understand First', desc: 'Every engagement starts with listening, not building.' },
            { label: 'Engineer with Care', desc: 'Scalability, performance and maintainability are non-negotiable.' },
            { label: 'Deliver Together', desc: 'We work as a true partner — communicating openly throughout.' },
          ].map((item, i) => (
            <div key={item.label} className="reveal text-center p-6" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-0.5 h-8 bg-blue-600/40 dark:bg-blue-500/40 mx-auto mb-5 rounded-full" />
              <div className="font-semibold text-slate-900 dark:text-white mb-2">{item.label}</div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage({ onOpenContact }) {
  return (
    <>
      <PageHero
        label="About CodeForge"
        title="Technology with"
        titleAccent="purpose."
        subtitle="We are a technology company that believes in building software that is reliable, purposeful and genuinely useful — not just impressive on paper."
      />
      <AboutSection />
      <ValuesSection />
      <OurApproach />
      <FinalCTA onOpenContact={onOpenContact} />
    </>
  );
}

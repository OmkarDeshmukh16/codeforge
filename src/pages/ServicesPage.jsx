import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code2, Globe, Brain, Cloud, RefreshCw, Lightbulb } from 'lucide-react';
import PageHero from '../components/sections/PageHero';
import FinalCTA from '../components/sections/FinalCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Code2,
    title: 'Software Development',
    intro: 'Custom software engineered from the ground up to solve specific business problems.',
    whatWeSolve: 'Generic off-the-shelf products don\'t fit every business. We build tailored software that aligns exactly with your workflows, data models and user needs.',
    capabilities: ['Custom Web Applications', 'Backend Systems & APIs', 'Database Architecture', 'Third-party Integrations', 'Legacy System Modernization', 'Technical Consulting'],
    tech: 'Node.js, Python, React, PostgreSQL, REST, GraphQL',
  },
  {
    icon: Globe,
    title: 'Web & Application Development',
    intro: 'Modern, responsive and scalable web and mobile applications that deliver exceptional user experiences.',
    whatWeSolve: 'Users expect fast, beautiful and reliable digital experiences. We build web and mobile applications that perform at scale and feel effortless to use.',
    capabilities: ['Progressive Web Apps', 'Responsive Web Design', 'React / Next.js Applications', 'E-commerce Platforms', 'Content Management', 'Performance Optimization'],
    tech: 'React, Next.js, TypeScript, Tailwind CSS, React Native',
  },
  {
    icon: Brain,
    title: 'AI & Intelligent Solutions',
    intro: 'Practical AI-powered features and applications that solve real business problems.',
    whatWeSolve: 'AI doesn\'t need to be complex or abstract. We build focused, practical AI integrations that add genuine value to existing products or stand alone as new capabilities.',
    capabilities: ['AI-Powered Chatbots', 'Document Processing', 'Predictive Analytics', 'Natural Language Processing', 'Recommendation Systems', 'AI API Integration'],
    tech: 'OpenAI, LangChain, TensorFlow, Python, Vector Databases',
  },
  {
    icon: Cloud,
    title: 'Cloud & Technology Infrastructure',
    intro: 'Reliable, scalable cloud infrastructure designed for performance and cost efficiency.',
    whatWeSolve: 'Infrastructure that isn\'t architected correctly creates bottlenecks, outages and unnecessary costs. We design cloud systems that scale confidently and run reliably.',
    capabilities: ['Cloud Architecture Design', 'AWS / GCP Setup', 'Container Orchestration', 'CI/CD Pipelines', 'Monitoring & Observability', 'Cost Optimization'],
    tech: 'AWS, Google Cloud, Docker, Kubernetes, Linux, Nginx',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    intro: 'Helping businesses modernize their processes, systems and ways of working through technology.',
    whatWeSolve: 'Many businesses are held back by outdated technology, manual processes or fragmented systems. We create a clear, pragmatic path to modernization.',
    capabilities: ['Process Digitization', 'Legacy Migration', 'System Integration', 'Change Enablement', 'Digital Strategy', 'Training & Support'],
    tech: 'Varies by project — chosen to serve the business outcome',
  },
  {
    icon: Lightbulb,
    title: 'Technology Consulting',
    intro: 'Independent technical guidance to help businesses make the right technology decisions.',
    whatWeSolve: 'Technology decisions made without the right expertise can be costly to reverse. We provide honest, experienced guidance — independent of vendor relationships.',
    capabilities: ['Architecture Review', 'Technology Selection', 'Product Strategy', 'Technical Due Diligence', 'Team Assessment', 'Roadmap Planning'],
    tech: 'Platform-agnostic — focused on your business context',
  },
];

function ServiceCard({ svc, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = svc.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className={`reveal flex flex-col lg:flex-row gap-10 lg:gap-16 items-start py-14 sm:py-16 border-b border-slate-200/80 dark:border-white/[0.05] last:border-0 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>

      {/* Icon + Number */}
      <div className="flex-shrink-0 flex flex-col items-start gap-5 lg:w-44">
        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-600/15 border border-blue-100 dark:border-blue-500/30 flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600">
          {String(index + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">{svc.title}</h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{svc.intro}</p>

        {/* Expand: what we solve */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors mb-5 cursor-pointer"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? 'Show less' : 'What we solve'}
        </button>

        {expanded && (
          <div className="mb-6 p-5 rounded-xl bg-blue-50/80 dark:bg-blue-600/[0.08] border border-blue-100 dark:border-blue-500/20 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {svc.whatWeSolve}
          </div>
        )}

        {/* Capabilities */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
          {svc.capabilities.map((cap) => (
            <div key={cap} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-500 dark:bg-cyan-400 flex-shrink-0" />
              <span className="text-xs text-slate-600 dark:text-slate-400">{cap}</span>
            </div>
          ))}
        </div>

        {/* Tech note */}
        <p className="text-xs font-mono text-slate-400 dark:text-slate-600">
          <span className="text-slate-500 dark:text-slate-500 font-semibold">Stack: </span>
          {svc.tech}
        </p>
      </div>
    </div>
  );
}

function ServicesContent() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="relative bg-white dark:bg-[#06080F] transition-colors duration-300">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 z-10">
        {services.map((svc, i) => (
          <ServiceCard key={svc.title} svc={svc} index={i} />
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage({ onOpenContact }) {
  return (
    <>
      <PageHero
        label="Services"
        title="Technology solutions built around"
        titleAccent="your business."
        subtitle="We deliver focused, high-quality services across software development, AI, cloud infrastructure and digital transformation."
      />
      <ServicesContent />
      <FinalCTA onOpenContact={onOpenContact} />
    </>
  );
}

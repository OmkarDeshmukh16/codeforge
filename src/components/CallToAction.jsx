import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CallToAction({ onOpenContact }) {
  return (
    <section className="relative bg-white dark:bg-[#06080F] py-24 sm:py-32 border-b border-slate-200/80 dark:border-white/[0.05] overflow-hidden transition-colors duration-300">
      {/* Ambient Blue Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/[0.06] dark:bg-blue-600/[0.12] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8 z-10">
        
        {/* Heading with Glowing Blue Accent */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          Let’s build{' '}
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent drop-shadow-xs dark:drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]">
            what’s next.
          </span>
        </h2>

        {/* Supporting Line */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl mx-auto">
          CodeForge is engineering the next generation of digital infrastructure. Connect with our founding team as we prepare to launch.
        </p>

        {/* Action Button with Radiant Neon Glow */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(59,130,246,0.7)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}

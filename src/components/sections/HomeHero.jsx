import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import CodeForgeLightningText from '../CodeForgeLightningText';
import TiltCard3D from '../TiltCard3D';

/**
 * HomeHero — Premium homepage hero.
 * Animated floating orb background, shimmer CTA, Lightning wordmark in 3D tilt card.
 */
export default function HomeHero({ onOpenContact }) {
  const scrollDown = (e) => {
    e.preventDefault();
    document.querySelector('#who-we-are')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-[#06080F] pt-10 sm:pt-16 lg:pt-20 pb-20 sm:pb-28 lg:pb-36 transition-colors duration-300"
    >
      {/* ── Animated Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Fine grid */}
        <div className="absolute inset-0 bg-subtle-grid opacity-40" />

        {/* Floating orbs — dark mode vivid, light mode very subtle */}
        <div className="animate-orb-1 absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full
          bg-blue-500/[0.07] dark:bg-blue-500/[0.18]
          blur-[100px]" />
        <div className="animate-orb-2 absolute bottom-1/4 left-1/5 w-[420px] h-[420px] rounded-full
          bg-indigo-500/[0.05] dark:bg-indigo-600/[0.14]
          blur-[90px]" />
        <div className="animate-orb-3 absolute top-10 left-1/3 w-[280px] h-[280px] rounded-full
          bg-cyan-400/[0.04] dark:bg-cyan-400/[0.10]
          blur-[70px]" />

        {/* Radial spotlight — dark mode only */}
        <div className="hidden dark:block absolute inset-0
          bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(37,99,235,0.15),transparent)]" />

        {/* Horizontal laser line — dark mode accent */}
        <div className="hidden dark:block absolute top-[38%] left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Headline & CTAs ── */}
          <div className="lg:col-span-7 space-y-7 text-left z-10">

            {/* Animated badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
              bg-gradient-to-r from-blue-50 to-indigo-50
              dark:from-blue-950/80 dark:to-indigo-950/80
              border border-blue-200/80 dark:border-blue-500/40
              shadow-sm dark:shadow-[0_0_20px_rgba(37,99,235,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="animate-glow-pulse relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-400" />
              </span>
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-700 dark:text-blue-300">
                Software &amp; Technology
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.06] font-sans">
                Building Technology
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.06] font-sans">
                That Moves Businesses
              </h1>
              <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-7xl font-extrabold tracking-tight leading-[1.06] font-sans">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
                    dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400
                    bg-clip-text text-transparent
                    drop-shadow-xs dark:drop-shadow-[0_0_35px_rgba(56,189,248,0.7)]">
                    Forward.
                  </span>
                  {/* Underline accent */}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full
                    bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600
                    dark:shadow-[0_0_10px_#38bdf8] opacity-60" />
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl">
              CodeForge creates modern software solutions that help businesses
              innovate, scale and succeed in a digital-first world.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-4">
              {/* Primary — shimmer button */}
              <button
                onClick={onOpenContact}
                className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl
                  bg-gradient-to-r from-blue-600 to-indigo-600
                  hover:from-blue-500 hover:to-indigo-500
                  text-white font-semibold text-sm
                  shadow-lg shadow-blue-600/30
                  dark:shadow-[0_0_30px_rgba(37,99,235,0.55)]
                  hover:shadow-xl dark:hover:shadow-[0_0_50px_rgba(59,130,246,0.8)]
                  hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Ghost */}
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl
                  bg-slate-100/80 hover:bg-slate-200/80
                  dark:bg-white/[0.05] dark:hover:bg-white/[0.09]
                  text-slate-800 dark:text-slate-200 font-semibold text-sm
                  border border-slate-300 dark:border-white/[0.12]
                  hover:border-blue-400/60 dark:hover:border-blue-500/50
                  hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Scroll cue */}
            <div className="hidden sm:flex items-center gap-3 pt-2">
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-slate-300 dark:to-white/20" />
              <a
                href="#who-we-are"
                onClick={scrollDown}
                className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer group"
              >
                <span>Scroll to explore</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform animate-bounce" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Lightning Wordmark in 3D Tilt Card ── */}
          <div className="lg:col-span-5 flex justify-center items-center z-10 w-full">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] lg:max-w-[510px]">

              {/* Multi-layer ambient backlight */}
              <div className="absolute -inset-8 rounded-3xl pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr
                  from-blue-500/10 via-cyan-400/10 to-indigo-500/8
                  dark:from-blue-600/30 dark:via-cyan-400/20 dark:to-indigo-600/22
                  blur-3xl" />
                <div className="hidden dark:block absolute inset-0
                  bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(59,130,246,0.15),transparent)]" />
              </div>

              {/* Corner accent glow dots */}
              <div className="hidden dark:block absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-500/50 blur-md animate-pulse" />
              <div className="hidden dark:block absolute -bottom-3 -right-3 w-4 h-4 rounded-full bg-cyan-400/60 blur-md animate-pulse" style={{ animationDelay: '1.2s' }} />

              {/* 3D Tilt Card */}
              <TiltCard3D
                maxTilt={8}
                perspective={1200}
                scale={1.015}
                className="relative rounded-3xl
                  bg-white dark:bg-[#0A0E1C]/95
                  p-3 sm:p-4
                  border border-slate-200/80 dark:border-blue-500/35
                  shadow-2xl dark:shadow-[0_0_60px_rgba(37,99,235,0.35)]
                  backdrop-blur-xl transition-colors"
              >
                {/* Card top bar */}
                <div className="flex items-center justify-between px-2 pb-3 border-b border-slate-100/80 dark:border-white/[0.05] mb-2">
                  <div className="flex items-center gap-2">
                    <span className="animate-glow-pulse w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
                    <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-slate-500 dark:text-cyan-300 font-semibold">
                      CodeForge
                    </span>
                  </div>
                  {/* Traffic light dots */}
                  <div className="flex items-center gap-1.5">
                    {['bg-red-400/60', 'bg-amber-400/60', 'bg-emerald-400/60'].map((c, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${c}`} />
                    ))}
                  </div>
                </div>

                {/* Lightning Wordmark Viewport */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden
                  bg-gradient-to-b from-slate-50 to-white
                  dark:from-[#070A14] dark:to-[#05070F]
                  flex items-center justify-center
                  border border-slate-200/60 dark:border-white/[0.06]">
                  <CodeForgeLightningText />
                </div>

                {/* Card bottom status */}
                <div className="flex items-center justify-between px-1 pt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
                      Systems Active
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-blue-600/70 dark:text-cyan-400/70">
                    v2.0
                  </span>
                </div>
              </TiltCard3D>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

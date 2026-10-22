import React, { useState } from 'react';
import { ArrowRight, Zap, Image as ImageIcon } from 'lucide-react';
import CodeForgeLightningText from './CodeForgeLightningText';
import TiltCard3D from './TiltCard3D';

export default function Hero({ onOpenContact }) {
  const [viewMode, setViewMode] = useState('lightning'); // 'lightning' | 'render'

  const scrollToExplore = (e) => {
    e.preventDefault();
    const target = document.querySelector('#statement');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-[#06080F] pt-6 sm:pt-10 lg:pt-12 pb-16 sm:pb-24 lg:pb-32 border-b border-slate-200/80 dark:border-white/[0.05] transition-colors duration-300"
    >
      {/* Background Decorators: Fine Grid, Subtle Radial Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Fine architectural grid */}
        <div className="absolute inset-0 bg-subtle-grid opacity-60" />

        {/* Ambient Glow Blobs */}
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-blue-500/[0.06] dark:bg-blue-600/[0.12] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/5 w-[450px] h-[450px] bg-cyan-500/[0.04] dark:bg-cyan-500/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Text & Executive Messaging */}
          <div className="lg:col-span-7 space-y-7 text-left z-10">
            
            {/* Small Status Indicator with Glowing Pulse Dot */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-300 dark:border-blue-500/40 text-slate-800 dark:text-slate-200 shadow-xs dark:shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-blue-500 shadow-[0_0_8px_#38bdf8]" />
              </span>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-200">
                WEBSITE UNDER CONSTRUCTION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.08] font-sans">
              Something Powerful<br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent drop-shadow-xs dark:drop-shadow-[0_0_30px_rgba(56,189,248,0.55)]">
                Is Coming.
              </span>
            </h1>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 tracking-tight">
              We’re building the future of digital innovation.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl">
              CodeForge is currently building something new. Our team is working behind the scenes to create innovative technology solutions that make businesses smarter, faster and more connected.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 dark:shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-xl dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.85)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#statement"
                onClick={scrollToExplore}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.08] text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-300 dark:border-white/[0.1] hover:border-slate-400 dark:hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Explore CodeForge</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Aceternity Lightning Wordmark inside 3D Tilt Container */}
          <div className="lg:col-span-5 flex justify-center items-center z-10 w-full">
            <div className="relative w-full max-w-[450px] sm:max-w-[490px] lg:max-w-[520px]">
              
              {/* Luminous Ambient Radial Backlight */}
              <div className="absolute -inset-5 bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-indigo-500/10 dark:from-blue-600/25 dark:via-cyan-400/20 dark:to-indigo-600/20 rounded-3xl blur-3xl pointer-events-none" />

              {/* 3D Perspective Tilt Container */}
              <TiltCard3D
                maxTilt={8}
                perspective={1200}
                scale={1.01}
                className="relative rounded-3xl bg-white dark:bg-[#0B0F1B]/90 p-3 sm:p-4 border border-slate-200 dark:border-blue-500/35 shadow-xl dark:shadow-[0_0_45px_rgba(37,99,235,0.3)] backdrop-blur-md transition-colors"
              >
                {/* Mode Selector Header Pill */}
                <div className="flex items-center justify-between px-2 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse shadow-xs dark:shadow-[0_0_8px_#38bdf8]" />
                    <span className="text-[11px] font-mono tracking-wider uppercase text-slate-600 dark:text-cyan-300 font-semibold">
                      {viewMode === 'lightning' ? 'Coming Soon' : '3D Sculpture'}
                    </span>
                  </div>

                  <div className="inline-flex rounded-lg bg-slate-100 dark:bg-white/[0.05] p-0.5 border border-slate-200 dark:border-white/[0.1]">
                    <button
                      onClick={() => setViewMode('lightning')}
                      className={`px-2.5 py-1 text-[10px] font-medium rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                        viewMode === 'lightning'
                          ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-xs dark:shadow-[0_0_12px_rgba(37,99,235,0.7)]'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                      title="Switch to Aceternity Lightning Wordmark"
                    >
                      <Zap className="w-3 h-3 text-amber-500 dark:text-amber-400" />
                      <span>Lightning</span>
                    </button>
                    <button
                      onClick={() => setViewMode('render')}
                      className={`px-2.5 py-1 text-[10px] font-medium rounded-md transition-all flex items-center gap-1 cursor-pointer ${
                        viewMode === 'render'
                          ? 'bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-xs dark:shadow-[0_0_12px_rgba(37,99,235,0.7)]'
                          : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                      title="Switch to 3D Render Sculpture"
                    >
                      <ImageIcon className="w-3 h-3" />
                      <span>3D Render</span>
                    </button>
                  </div>
                </div>

                {/* Viewport: Lightning Wordmark OR 3D Render Sculpture */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#070A12] flex items-center justify-center border border-slate-200/80 dark:border-white/[0.08]">
                  {viewMode === 'lightning' ? (
                    <CodeForgeLightningText />
                  ) : (
                    <div className="w-full h-full relative p-4 flex items-center justify-center bg-gradient-to-b from-slate-100 to-white dark:from-[#090D18] dark:to-[#06080F]">
                      <img
                        src="/assets/tech-sphere.jpg"
                        alt="CodeForge 3D Digital Innovation Sculpture"
                        className="w-full h-full object-contain filter contrast-105 brightness-105 drop-shadow-md dark:drop-shadow-[0_0_30px_rgba(37,99,235,0.6)] animate-soft-float"
                        loading="eager"
                      />
                    </div>
                  )}
                </div>
              </TiltCard3D>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

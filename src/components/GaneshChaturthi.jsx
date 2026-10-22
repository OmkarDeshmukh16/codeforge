import React from 'react';

export default function GaneshChaturthi() {
  return (
    <section
      id="festive"
      className="relative w-full overflow-hidden bg-white dark:bg-[#06080F] transition-colors duration-300"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/[0.12] dark:bg-amber-500/[0.12] rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-orange-400/[0.08] dark:bg-orange-500/[0.08] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-4 sm:pb-6 flex flex-col md:flex-row items-center justify-between gap-8 z-10">
        
        {/* LEFT: Premium Corporate Festive Greeting */}
        <div className="flex-1 space-y-3.5 text-center md:text-left">
          
          {/* Header Brandmark & Festive Label */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <div className="flex items-center gap-2 pr-3 border-r border-slate-200 dark:border-white/15">
              <span className="font-extrabold text-sm tracking-tight text-slate-900 dark:text-white font-sans">
                Code<span className="text-blue-600 dark:text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">Forge</span>
              </span>
            </div>

            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-amber-600 dark:text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.4)]">
              FESTIVE GREETINGS
            </span>
          </div>

          {/* Large Heading with Golden Glow */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Happy{' '}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 dark:from-amber-300 dark:via-amber-400 dark:to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              Ganesh Chaturthi
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl">
            May Lord Ganesha bring wisdom, prosperity and new beginnings.
          </p>

        </div>

        {/* RIGHT: Elegant Premium Lord Ganesha Artwork with Mandala Halo Behind It */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative group flex items-center justify-center">
            
            {/* 1. Ambient Golden Halo Glow */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-400/30 via-orange-400/20 to-amber-200/25 dark:from-amber-500/35 dark:via-orange-500/25 dark:to-amber-300/30 rounded-full blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:opacity-100 opacity-85" />

            {/* 2. Sacred Mandala Outline Watermark (Centered directly behind the Ganesh image) */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 text-amber-500/25 dark:text-amber-400/30 animate-slow-rotate pointer-events-none drop-shadow-[0_0_12px_rgba(251,191,36,0.3)]"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
            >
              <circle cx="100" cy="100" r="90" />
              <circle cx="100" cy="100" r="75" strokeDasharray="3 3" />
              <circle cx="100" cy="100" r="60" />
              <circle cx="100" cy="100" r="45" strokeDasharray="2 2" />
              <circle cx="100" cy="100" r="30" />
              <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" />
              <polygon points="100,15 120,70 185,75 135,115 150,180 100,145 50,180 65,115 15,75 80,70" />
            </svg>

            {/* 3. Artwork Frame Container */}
            <div className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-white dark:bg-[#0E121D] border border-amber-200 dark:border-amber-500/40 shadow-xl dark:shadow-[0_0_35px_rgba(245,158,11,0.3)] flex items-center justify-center transition-all duration-300 group-hover:border-amber-400/70 group-hover:shadow-2xl dark:group-hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]">
              <img
                src="/assets/ganesha-3d.jpg"
                alt="Lord Ganesha - CodeForge Festive Artwork"
                className="w-full h-full object-contain filter contrast-105 brightness-105 drop-shadow-[0_0_16px_rgba(245,158,11,0.4)] transition-transform duration-500 group-hover:scale-105"
                loading="eager"
              />

              {/* Minimal caption */}
              <div className="absolute bottom-1.5 inset-x-2 bg-white/95 dark:bg-[#090C15]/90 backdrop-blur-xs py-0.5 rounded text-center border border-amber-200/80 dark:border-amber-500/30 shadow-xs">
                <span className="text-[10px] font-bold tracking-widest text-amber-700 dark:text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
                  ॥ श्री गणेशाय नमः ॥
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

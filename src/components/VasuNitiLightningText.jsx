import React, { useEffect, useState } from 'react';
import { Zap, RefreshCw } from 'lucide-react';

export function CodeForgeLightningText({ className = '' }) {
  const letters = [
    { char: 'C', isAccent: false },
    { char: 'o', isAccent: false },
    { char: 'd', isAccent: false },
    { char: 'e', isAccent: false },
    { char: 'F', isAccent: true },
    { char: 'o', isAccent: true },
    { char: 'r', isAccent: true },
    { char: 'g', isAccent: true },
    { char: 'e', isAccent: true },
  ];

  const [activeIndices, setActiveIndices] = useState([]);
  const [currentLightningIndex, setCurrentLightningIndex] = useState(-1);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    setActiveIndices([]);
    setCurrentLightningIndex(-1);

    const letterDelay = 220; // ms per letter

    letters.forEach((_, idx) => {
      setTimeout(() => {
        setCurrentLightningIndex(idx);
        setActiveIndices((prev) => [...prev, idx]);
      }, idx * letterDelay + 100);
    });

    const totalTime = letters.length * letterDelay + 500;
    const strikeTimer = setTimeout(() => {
      setCurrentLightningIndex(-1);
    }, totalTime);

    const loopInterval = setInterval(() => {
      setCycleKey((k) => k + 1);
    }, 7000);

    return () => {
      clearTimeout(strikeTimer);
      clearInterval(loopInterval);
    };
  }, [cycleKey]);

  const handleReplay = () => {
    setCycleKey((k) => k + 1);
  };

  return (
    <div
      onClick={handleReplay}
      className={`relative w-full h-full min-h-[340px] sm:min-h-[400px] flex flex-col items-center justify-center p-6 select-none overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-50/90 dark:bg-[#090D18]/95 border border-slate-200/90 dark:border-cyan-500/30 shadow-xl dark:shadow-[0_0_35px_rgba(6,182,212,0.2)] group cursor-pointer transition-all duration-300 ${className}`}
      title="Click to recharge electric lightning sequence"
    >
      {/* 1. Aceternity Top Ambient Spotlight Glow */}
      <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-blue-500/15 via-cyan-400/10 dark:from-cyan-400/25 dark:via-blue-500/15 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute -top-12 w-72 h-36 bg-blue-500/20 dark:bg-cyan-500/30 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle fine grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-30 dark:opacity-40 pointer-events-none" />

      {/* 2. Top Status & Replay Control */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none z-10">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#0E1424]/90 border border-slate-200 dark:border-cyan-500/40 shadow-xs dark:shadow-[0_0_12px_rgba(6,182,212,0.3)] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-cyan-300">
            Electric Synthesis
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleReplay();
          }}
          className="pointer-events-auto p-1.5 rounded-lg bg-white/90 dark:bg-[#0E1424]/80 hover:bg-slate-100 dark:hover:bg-[#151D33] text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-cyan-300 border border-slate-200 dark:border-cyan-500/25 shadow-xs transition-all hover:scale-105 active:scale-95 cursor-pointer dark:hover:shadow-[0_0_10px_rgba(6,182,212,0.4)]"
          title="Replay Lightning Sequence"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Main Wordmark Display */}
      <div className="relative z-10 my-auto py-8 w-full text-center">

        {/* Aceternity Radiant Radial Aura Behind Letters */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-88 h-36 bg-gradient-to-r from-blue-600/35 via-cyan-400/40 to-indigo-600/30 rounded-full blur-2xl pointer-events-none" />

        {/* Letters Container */}
        <div className="relative flex items-center justify-center font-sans tracking-tight max-w-full overflow-hidden px-2">
          {letters.map((item, index) => {
            const isVisible = activeIndices.includes(index);
            const isStriking = currentLightningIndex === index;

            return (
              <div
                key={`${cycleKey}-${index}`}
                className="relative inline-block"
              >
                {/* Electric Lightning Arc & Strike with Intense Glow */}
                {isStriking && (
                  <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-10 h-28 pointer-events-none z-20 flex flex-col items-center">
                    <div className="w-1 h-full bg-gradient-to-b from-transparent via-cyan-300 to-blue-500 animate-pulse shadow-[0_0_20px_#38bdf8]" />
                    <div className="absolute top-0 animate-bounce">
                      <Zap className="w-5 h-5 text-amber-300 fill-amber-300 drop-shadow-[0_0_16px_rgba(245,158,11,1)]" />
                    </div>
                    <div className="absolute bottom-2 w-10 h-10 rounded-full bg-cyan-300/80 blur-xs animate-ping" />
                  </div>
                )}

                {/* The Letter */}
                <span
                  className={`inline-block text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl font-extrabold transition-all duration-300 transform ${
                    isVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-4 scale-90'
                  } ${
                    isStriking
                      ? 'text-blue-600 dark:text-cyan-200 drop-shadow-[0_0_30px_#38bdf8] scale-110 brightness-125 dark:brightness-150'
                      : item.isAccent
                        ? 'bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-xs dark:drop-shadow-[0_0_18px_rgba(56,189,248,0.85)]'
                        : 'text-slate-900 dark:text-white drop-shadow-xs dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                  }`}
                  style={{
                    textShadow: isStriking
                      ? '0 0 35px rgba(56, 189, 248, 1), 0 0 18px rgba(37, 99, 235, 1)'
                      : undefined,
                  }}
                >
                  {item.char}
                </span>

                {/* Reflection underline under each letter */}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                    isStriking
                      ? 'bg-blue-600 dark:bg-cyan-300 shadow-[0_0_14px_#38bdf8] opacity-100 scale-x-125'
                      : isVisible
                        ? 'bg-blue-500/50 dark:bg-cyan-400/50 opacity-80 shadow-xs dark:shadow-[0_0_8px_rgba(6,182,212,0.4)]'
                        : 'opacity-0 scale-x-0'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* 4. Radiant Horizontal Underline Laser Beam with Vivid Glow */}
        <div className="relative mt-4 w-full flex items-center justify-center px-4">
          <div className="w-56 sm:w-72 h-1.5 bg-gradient-to-r from-transparent via-blue-500 dark:via-cyan-400 to-transparent blur-xs opacity-95 shadow-[0_0_18px_#38bdf8]" />
          <div className="absolute w-40 sm:w-56 h-0.5 bg-gradient-to-r from-transparent via-blue-600 dark:via-white to-transparent shadow-[0_0_8px_#fff]" />
          <div className="absolute w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-white shadow-[0_0_18px_#38bdf8] border border-blue-400 dark:border-cyan-400" />
        </div>

        {/* Subtitle Tagline */}
        <div className="mt-4 text-center px-2">
          <span className="text-[10px] sm:text-xs font-mono font-medium uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300 drop-shadow-xs dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
            Intelligent Software & Systems
          </span>
        </div>

      </div>

      {/* 5. Card Footer Info */}
      <div className="w-full pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 z-10">
        <div className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" />
          <span>Click to recharge lightning</span>
        </div>

        <span className="font-mono font-bold text-blue-600 dark:text-cyan-300 bg-blue-50 dark:bg-cyan-500/15 px-2 py-0.5 rounded text-[10px] border border-blue-200 dark:border-cyan-500/30 shadow-xs dark:shadow-[0_0_10px_rgba(6,182,212,0.3)]">
          Coming Soon !
        </span>
      </div>

    </div>
  );
}

export default CodeForgeLightningText;

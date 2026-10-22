import React, { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer({
  targetDate = '2026-10-25T00:00:00',
  className = '',
}) {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      total: difference,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <div className={`space-y-3 ${className}`}>
      {/* Header Label */}
      <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-blue-600 dark:text-cyan-400">
        <Clock className="w-3.5 h-3.5 animate-pulse" />
        <span>Launching In</span>
        <span className="text-slate-400 dark:text-slate-500 font-normal">| 25 October 2026</span>
      </div>

      {/* Countdown Cards Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="group relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-[#0B0F1D]/80 border border-slate-200/90 dark:border-white/[0.08] shadow-sm dark:shadow-[0_0_20px_rgba(37,99,235,0.15)] hover:border-blue-500/50 dark:hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md"
          >
            {/* Top ambient highlight */}
            <div className="absolute top-0 inset-x-0 h-0.5 rounded-t-xl bg-gradient-to-r from-transparent via-blue-500/40 dark:via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Digit */}
            <span className="font-mono text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight drop-shadow-xs dark:drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
              {formatNumber(unit.value)}
            </span>

            {/* Unit Label */}
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

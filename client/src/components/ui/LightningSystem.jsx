import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LightningBolt({ x, y, opacity, scale }) {
  return (
    <motion.svg
      style={{ position: 'absolute', left: x, top: y, pointerEvents: 'none', zIndex: 0 }}
      width="60" height="160" viewBox="0 0 60 160"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity, scale }}
      transition={{ duration: 0.08 }}
    >
      <polyline
        points="38,0 18,70 32,70 14,160"
        fill="none"
        stroke="rgba(160,120,255,0.9)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#lglow)"
      />
      <polyline
        points="38,0 18,70 32,70 14,160"
        fill="none"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
      <defs>
        <filter id="lglow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
    </motion.svg>
  );
}

export default function LightningSystem({ active }) {
  const [bolts, setBolts] = useState([]);

  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => {
      const count = Math.floor(Math.random() * 3) + 1;
      const newBolts = Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 40}%`,
        opacity: Math.random() * 0.7 + 0.3,
        scale: Math.random() * 0.8 + 0.6,
      }));
      setBolts(newBolts);
      setTimeout(() => setBolts([]), 150);
    }, Math.random() * 1800 + 800);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }}>
      {bolts.map(b => (
        <LightningBolt key={b.id} x={b.x} y={b.y} opacity={b.opacity} scale={b.scale} />
      ))}
    </div>
  );
}

export function ScrollLightning({ scrollYProgress }) {
  const [flash, setFlash] = useState(false);
  const lastProgress = useRef(0);

  useEffect(() => {
    if (!scrollYProgress) return;
    return scrollYProgress.on('change', v => {
      const delta = Math.abs(v - lastProgress.current);
      if (delta > 0.015 && Math.random() > 0.6) {
        setFlash(true);
        setTimeout(() => setFlash(false), 120);
      }
      lastProgress.current = v;
    });
  }, [scrollYProgress]);

  return (
    <AnimatePresence>
      {flash && (
        <motion.div
          key="flash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.06 }}
          style={{
            position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999,
            background: 'radial-gradient(ellipse at 50% 0%, rgba(120,80,255,0.12) 0%, transparent 70%)',
          }}
        />
      )}
    </AnimatePresence>
  );
}

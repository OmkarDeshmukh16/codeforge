import { motion } from 'framer-motion';

export default function FloatingParticles() {
  return (
    <div className="hero__particles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{ 
            '--i': i,
            position: 'absolute',
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'rgba(160,120,255,0.7)',
            boxShadow: '0 0 6px rgba(160,120,255,0.8)',
            left: `calc(${i} * 3.33%)`,
            top: `calc(20% + (${i} % 5) * 12%)`
          }}
          animate={{
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

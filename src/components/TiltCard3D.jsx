import React, { useRef, useState } from 'react';

/**
 * TiltCard3D: Premium 3D perspective tilt effect with dynamic light glare
 * Supports transform-style: preserve-3d for children with translateZ
 */
export default function TiltCard3D({
  children,
  className = '',
  maxTilt = 12,
  perspective = 1000,
  glare = true,
  glareOpacity = 0.15,
  scale = 1.02,
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize from -1 to 1
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    setCoords({
      rotateX: -yPct * maxTilt,
      rotateY: xPct * maxTilt,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        transform: isHovered
          ? `perspective(${perspective}px) rotateX(${coords.rotateX}deg) rotateY(${coords.rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
          : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        ...style,
      }}
      {...props}
    >
      {children}

      {/* Dynamic 3D Glare / Light Reflection Overlay */}
      {glare && isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden transition-opacity duration-300"
          style={{
            opacity: glareOpacity,
            background: `radial-gradient(circle 320px at ${coords.glareX}% ${coords.glareY}%, rgba(255, 255, 255, 0.9), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}

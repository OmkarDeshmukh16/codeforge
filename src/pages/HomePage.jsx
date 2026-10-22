import React from 'react';
import Hero from '../components/Hero';
import ComingSoon from '../components/ComingSoon';
import BrandStatement from '../components/BrandStatement';
import CallToAction from '../components/CallToAction';

export default function HomePage({ onOpenContact }) {
  return (
    <>
      {/* Dedicated Under Construction Hero with Countdown & Interactive 3D Wordmark */}
      <Hero onOpenContact={onOpenContact} />

      {/* Launch Progress & Engineering Milestones towards 25/10/2026 */}
      <ComingSoon onOpenContact={onOpenContact} />

      {/* Brand & Pillars Teaser */}
      <BrandStatement />

      {/* Early Access / Get in Touch */}
      <CallToAction onOpenContact={onOpenContact} />
    </>
  );
}

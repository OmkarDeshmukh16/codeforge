import React from 'react';
import GaneshChaturthi from '../components/GaneshChaturthi';
import HomeHero from '../components/sections/HomeHero';
import WhoWeAre from '../components/sections/WhoWeAre';
import ServicesGrid from '../components/sections/ServicesGrid';
import SolutionsCapabilities from '../components/sections/SolutionsCapabilities';
import ProcessSection from '../components/sections/ProcessSection';
import PortfolioPlaceholder from '../components/sections/PortfolioPlaceholder';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage({ onOpenContact }) {
  return (
    <>


      {/* Main Hero */}
      <HomeHero onOpenContact={onOpenContact} />

      {/* Who We Are */}
      <WhoWeAre />

      {/* Services */}
      <ServicesGrid />

      {/* Solutions & Capabilities */}
      <SolutionsCapabilities />

      {/* Process */}
      <ProcessSection />

      {/* Portfolio */}
      <PortfolioPlaceholder />

      {/* Final CTA */}
      <FinalCTA onOpenContact={onOpenContact} />
    </>
  );
}

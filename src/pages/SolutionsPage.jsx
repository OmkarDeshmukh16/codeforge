import React from 'react';
import PageHero from '../components/sections/PageHero';
import SolutionsCapabilities from '../components/sections/SolutionsCapabilities';
import TechSection from '../components/sections/TechSection';
import PortfolioPlaceholder from '../components/sections/PortfolioPlaceholder';
import ProcessSection from '../components/sections/ProcessSection';
import FinalCTA from '../components/sections/FinalCTA';

export default function SolutionsPage({ onOpenContact }) {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Technology designed around"
        titleAccent="your needs."
        subtitle="We deliver end-to-end solutions across four core capability areas — from digital product engineering to intelligent, scalable platforms."
      />
      <SolutionsCapabilities />
      <ProcessSection />
      <TechSection />
      <PortfolioPlaceholder />
      <FinalCTA onOpenContact={onOpenContact} />
    </>
  );
}

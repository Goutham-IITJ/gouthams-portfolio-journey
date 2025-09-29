import { useState, useEffect } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SomethingMoreSection from "@/components/SomethingMoreSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-bg font-poppins">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <PortfolioShowcase />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <SomethingMoreSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;

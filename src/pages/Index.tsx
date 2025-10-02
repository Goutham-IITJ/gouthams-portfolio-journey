import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "@/components/LoadingAnimation";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SomethingMoreSection from "@/components/SomethingMoreSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleNavigate = (path: string) => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate(path);
    }, 300); // Duration of the fade-out animation
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-gradient-bg font-poppins transition-opacity duration-300 ${isNavigating ? 'page-fade-out' : 'animate-fade-in'}`}>
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <PortfolioShowcase />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <SomethingMoreSection onNavigate={handleNavigate} />
      </main>
    </div>
  );
};

export default Index;

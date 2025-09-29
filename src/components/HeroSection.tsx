import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Eye, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 27, 75, 0.8)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Goutham A S
          </h1>

          {/* Subheading with Gradient */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">
            <span className="gradient-text">Electrical Engineering Student</span>{" "}
            <span className="text-secondary-text">|</span>{" "}
            <span className="text-white">Aspiring Software Developer & AI Enthusiast</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-secondary-text max-w-3xl mx-auto leading-relaxed">
            A passionate and results-driven Electrical Engineering student at IIT Jodhpur with a strong foundation in 
            software development, machine learning, and robotics. Dedicated to creating innovative solutions that bridge 
            the gap between technology and real-world applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              onClick={() => scrollToSection("portfolio")}
              className="bg-accent-solid hover:bg-accent-purple text-white px-8 py-3 text-lg font-medium button-glow"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-3 text-lg font-medium"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-secondary-text text-secondary-text hover:bg-secondary hover:text-white px-8 py-3 text-lg font-medium"
              onClick={() => window.open("/Goutham_Resumenew_1.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="https://linkedin.com/in/goutham-a-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-accent-blue transition-colors p-3 rounded-full hover:bg-card/50"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/goutham-a-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-text hover:text-accent-purple transition-colors p-3 rounded-full hover:bg-card/50"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-purple rounded-full animate-pulse-slow opacity-60" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent-blue rounded-full animate-float opacity-40" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-30" />
      </div>
    </section>
  );
};

export default HeroSection;
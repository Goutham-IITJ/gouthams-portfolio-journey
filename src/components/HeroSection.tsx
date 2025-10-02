import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Eye, Mail } from "lucide-react";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden hero-glass"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="hero-card">
          {/* Main Content */}
          <div className="space-y-8 animate-fade-in text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Goutham A S
            </h1>

            {/* Subheading with Gradient */}
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium">
              <span className="gradient-text">Electrical Engineering Student</span>{" "}
              <span className="text-secondary-text">|</span>{" "}
              <span className="text-white">AI Enthusiast</span>
            </h2>

            {/* Concise Description */}
            <p className="text-lg text-secondary-text leading-relaxed max-w-xl mx-auto">
              IIT Jodhpur student passionate about AI, robotics, and software development. 
              Creating innovative solutions at the intersection of technology and real-world applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button 
                onClick={() => scrollToSection("portfolio")}
                className="bg-accent-solid hover:bg-accent-purple text-white px-6 py-3 text-base font-medium button-glow"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline" 
                className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-6 py-3 text-base font-medium"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button 
                variant="outline"
                className="btn-glass"
                onClick={() => window.open("/Goutham_Resumenew_1.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6 justify-center">
              <a
                href="https://www.linkedin.com/in/goutham-a-s-93b30b312/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-accent-blue transition-all duration-300 p-3 rounded-full hover:bg-accent-blue/10 hover:shadow-lg hover:shadow-accent-blue/25"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Goutham-IITJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-accent-purple transition-all duration-300 p-3 rounded-full hover:bg-accent-purple/10 hover:shadow-lg hover:shadow-accent-purple/25"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/goutham99/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-accent-yellow transition-all duration-300 p-3 rounded-full hover:bg-accent-yellow/10 hover:shadow-lg hover:shadow-accent-yellow/25"
                aria-label="LeetCode profile"
              >
                {/* Inline minimal LeetCode logo */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={true}>
                  <path d="M6.5 12C7.32843 12 8 11.3284 8 10.5C8 9.67157 7.32843 9 6.5 9C5.67157 9 5 9.67157 5 10.5C5 11.3284 5.67157 12 6.5 12Z" fill="#FFA116"/>
                  <path d="M18 7L13 12" stroke="#FFA116" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 15L11.5 12.5" stroke="#FFA116" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5 16.5L18 13" stroke="#FFA116" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


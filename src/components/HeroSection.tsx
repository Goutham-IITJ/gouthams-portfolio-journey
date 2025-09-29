import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Eye, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import heroAnimation from "@/assets/hero-animation.jpg";

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
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in text-left">
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
            <p className="text-lg text-secondary-text leading-relaxed max-w-xl">
              IIT Jodhpur student passionate about AI, robotics, and software development. 
              Creating innovative solutions at the intersection of technology and real-world applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com/in/goutham-a-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-accent-blue transition-all duration-300 p-3 rounded-full hover:bg-accent-blue/10 hover:shadow-lg hover:shadow-accent-blue/25"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/goutham-a-s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-text hover:text-accent-purple transition-all duration-300 p-3 rounded-full hover:bg-accent-purple/10 hover:shadow-lg hover:shadow-accent-purple/25"
              >
                <Github size={20} />
              </a>
              <Button 
                variant="outline" 
                size="sm"
                className="border-secondary-text text-secondary-text hover:bg-secondary hover:text-white"
                onClick={() => window.open("/Goutham_Resumenew_1.pdf", "_blank")}
              >
                <Download className="mr-2 h-4 w-4" />
                CV
              </Button>
            </div>
          </div>

          {/* Right Animation */}
          <div className="relative animate-scale-in lg:block hidden">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={heroAnimation}
                alt="AI and Technology Animation"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20" />
            </div>
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-accent-purple rounded-full animate-pulse" />
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-accent-blue rounded-full animate-bounce" />
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
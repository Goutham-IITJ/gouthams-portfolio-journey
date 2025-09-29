import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Wrench, 
  Monitor, 
  Brain, 
  Cpu, 
  Globe, 
  Smartphone 
} from "lucide-react";

const SkillsSection = () => {
  const allSkills = [
    "Python", "C++", "JavaScript", "TypeScript", "React", "Node.js", 
    "TensorFlow", "PyTorch", "OpenCV", "Git", "Docker", "Linux", 
    "MATLAB", "AutoCAD", "SolidWorks", "Arduino IDE", "MongoDB", "Express"
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-background via-background-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>

          {/* Horizontal Scrolling Skills Strip */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-horizontal space-x-4">
              {/* First set of skills */}
              {allSkills.map((skill, index) => (
                <div key={index} className="flex-shrink-0 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-accent-purple/20 hover:border-accent-purple/50 hover:bg-accent-purple/10 transition-all duration-300">
                  <span className="text-white font-medium whitespace-nowrap">{skill}</span>
                </div>
              ))}
              {/* Duplicate set for continuous scroll */}
              {allSkills.map((skill, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-accent-blue/20 hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-all duration-300">
                  <span className="text-white font-medium whitespace-nowrap">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
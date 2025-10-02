import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code, Bot, Waypoints, Puzzle } from "lucide-react";
import profilePic from "@/assets/profile-pic.jpg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const highlights = [
    {
      icon: <Code className="text-accent-purple" size={24} />,
      title: "Software Development",
      description: "Building full-stack applications with a focus on clean, efficient code."
    },
    {
      icon: <Waypoints className="text-accent-blue" size={24} />,
      title: "System Design",
      description: "Architecting scalable and robust systems for complex problems."
    },
    {
      icon: <Bot className="text-accent-purple" size={24} />,
      title: "Robotics & AI",
      description: "Developing intelligent systems and autonomous navigation algorithms."
    },
    {
      icon: <Puzzle className="text-accent-blue" size={24} />,
      title: "Problem Solving",
      description: "Applying engineering principles to innovate and solve real-world challenges."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-background-secondary to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold gradient-text mb-4">Hello, I'm Goutham A S</h3>
                <p className="text-lg text-secondary-text leading-relaxed">
                  I'm an <span className="text-accent-purple font-medium">Electrical Engineering student</span> at IIT Jodhpur with a deep focus on <span className="text-accent-blue font-medium">software development and system design</span>. My passion lies in architecting scalable applications and exploring the intersection of AI and robotics to create practical, intelligent solutions.
                </p>
                
                <p className="text-lg text-secondary-text leading-relaxed">
                  With hands-on experience in 
                  <span className="text-white font-medium"> machine learning, autonomous systems, and full-stack development</span>, 
                  I am driven to build robust technologies that solve complex, real-world problems.
                </p>
                
                <div className="text-sm text-secondary-text space-y-1">
                  <p><span className="text-accent-purple font-medium">Coordinator</span> - Robotics Society, IIT Jodhpur</p>
                  <p><span className="text-accent-blue font-medium">Ex Joint Secretary</span> - Fine Arts Society , IIT Jodhpur</p>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Image Section */}
            <div className={`relative flex justify-center transition-all duration-700 lg:-translate-y-8 lg:translate-x-8 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '300ms' }}>
              <div className="relative w-80 h-80">
                <img 
                  src={profilePic}
                  alt="Goutham A S - Profile Picture"
                  className="w-full h-full object-cover rounded-full border-4 border-accent-purple/50 shadow-2xl shadow-accent-purple/10"
                />
              </div>
            </div>
          </div>
          
          {/* Key Highlights Row - now below the main grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16">
            {highlights.map((highlight, index) => (
              <Card key={index} 
                    className={`highlight-card text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}>
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-card rounded-full border border-border">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{highlight.title}</h3>
                <p className="text-xs text-secondary-text">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


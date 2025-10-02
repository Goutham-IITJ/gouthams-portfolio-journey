import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users, Beaker, Target } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Inter IIT Tech Meet 13.0",
      role: "Team Member - Autonomous Swarm Navigation",
      organization: "Kalyani Bharat Forge",
      location: "Mumbai, India",
      duration: "December 2024",
      type: "Competition",
      icon: <Trophy className="text-accent-purple" size={24} />,
      description: "Represented IIT Jodhpur in the prestigious Inter IIT Tech Meet, working on autonomous robot swarm navigation with dynamic path planning.",
      achievements: [
        "Secured 5th Rank among top IIT teams nationwide",
        "35% reduction in pathfinding latency through optimized algorithms",
        "22% improvement in obstacle avoidance accuracy using YOLOv8 Nano",
        "20% enhanced swarm responsiveness via centralized MongoDB communication",
        "Successfully coordinated 10+ robots in 50+ simulation runs"
      ],
      technologies: ["Reinforcement Learning", "YOLOv8", "MongoDB", "Gazebo", "TurtleBot", "Python"],
      highlights: [
        "Dual-layered architecture design",
        "Real-time object detection integration", 
        "Centralized intelligence system",
        "Dynamic environment adaptation"
      ]
    },
    {
      title: "Undergraduate Researcher",
      role: "Research Assistant - Knowledge Graph Systems",
      organization: "IIT Jodhpur",
      location: "Jodhpur, India", 
      duration: "Ongoing",
      type: "Research",
      icon: <Beaker className="text-accent-blue" size={24} />,
      description: "Conducting research on semantic bridge dual-hybrid knowledge graph systems under faculty supervision, focusing on graph representation and semantic preservation.",
      achievements: [
        "Identified 40% semantic loss in existing fusion frameworks",
        "Designed novel dual-hybrid graph representation with 100% semantic fidelity",
        "Proposed hub-aware selective conversion strategy",
        "Projected 30-40% reduction in clique blowup for improved query efficiency",
        "Developed lossless mapping between original and line graphs"
      ],
      technologies: ["Graph Theory", "Semantic Web", "Python", "Neo4j", "SPARQL", "RDF"],
      highlights: [
        "Novel dual-hybrid representation",
        "Semantic fidelity preservation",
        "Hub explosion mitigation",
        "Query efficiency optimization"
      ]
    }
  ];

  const positions = [
    {
      title: "Electronic Subsystem Coordinator",
      organization: "Robotics Society",
      institution: "IIT Jodhpur",
      duration: "Aug 2025 - Present",
      icon: <Users className="text-accent-purple" size={20} />,
      responsibilities: [
        "Leading electronic subsystem design and integration",
        "Coordinate sensor and actuator integration across teams",
        "Ensure reliability in field tests and competitions"
      ]
    },
    {
      title: "Design Coordinator",
      organization: "Office of Placement and Training",
      institution: "IIT Jodhpur",
      duration: "Aug 2025 - Present",
      icon: <Target className="text-accent-blue" size={20} />,
      responsibilities: [
        "Lead design workshops ",
        "Coordinate with placement teams for presentation assets"
      ]
    },
    {
      title: "Associate",
      organization: "Product Club",
      institution: "IIT Jodhpur",
      duration: "2024",
      icon: <Target className="text-accent-blue" size={20} />,
      responsibilities: [
        "Participated in product management workshops",
        "Collaborated on product development initiatives",
        "Contributed to winning Pitch Rush Hackathon project"
      ]
    },
    {
      title: "Joint Secretary",
      organization: "Fine Arts Society",
      institution: "IIT Jodhpur",
      duration: "2024",
      icon: <Users className="text-accent-purple" size={20} />,
      responsibilities: [
        "Organized cultural events and exhibitions",
        "Managed artist collaborations and budgets",
        "Led outreach initiatives across campus"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background-secondary via-background to-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-secondary-text max-w-3xl mx-auto">
            A timeline of my technical achievements, research contributions, and leadership roles 
            that have shaped my journey in engineering and innovation.
          </p>
        </div>

        {/* Experience cards displayed side-by-side on wider screens */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              tabIndex={0}
              className="group relative overflow-hidden card-glow p-6 transition-transform duration-300 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/40 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* hover/focus glow behind content */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent-purple/20 via-transparent to-accent-blue/20 blur-2xl opacity-0 transform scale-95 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100" aria-hidden />

              <div className="relative z-10 space-y-4">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-card rounded-full border border-accent-purple/20">
                    {exp.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold gradient-text">{exp.title}</h3>
                        <p className="text-lg text-white font-medium">{exp.role}</p>
                        <p className="text-accent-blue font-medium">{exp.organization}</p>
                      </div>
                      <Badge className={`${exp.type === 'Competition' ? 'bg-accent-solid' : 'bg-accent-blue/20 text-accent-blue'} text-white`}>
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-text mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-secondary-text leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white">Key Achievements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-secondary-text">
                        <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} className="bg-accent-solid/20 text-accent-purple border-accent-purple/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-white">Technical Highlights:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                        <span className="text-accent-blue">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Positions of Responsibility */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Leadership & <span className="gradient-text">Positions</span>
            </h3>
            <p className="text-secondary-text">
              Active involvement in student organizations and community building
            </p>
          </div>

          {/* Leadership marquee of cards with center scaling */}
          <MarqueePositions positions={positions} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

// Helper marquee component placed at the bottom to keep top-level component tidy
function MarqueePositions({ positions }: { positions: any[] }) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [centerIdx, setCenterIdx] = useState<number | null>(null);

  // Duplicate positions for seamless loop
  const loop = positions.concat(positions);

  useEffect(() => {
    let raf = 0;
    const track = marqueeRef.current;
    if (!track) return;

    const update = () => {
      const container = track.parentElement as HTMLElement | null;
      if (container) {
        const crect = container.getBoundingClientRect();
        const centerX = crect.left + crect.width / 2;
        let best = -1;
        let bestDist = Infinity;
        itemsRef.current.forEach((el, i) => {
          if (!el) return;
          const r = el.getBoundingClientRect();
          const itemCenter = r.left + r.width / 2;
          const dist = Math.abs(itemCenter - centerX);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        if (best >= 0) setCenterIdx(best);
      }
      raf = requestAnimationFrame(update);
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [positions.length]);

  // Pause animation on focus within (accessibility)
  useEffect(() => {
    const container = marqueeRef.current?.parentElement;
    if (!container) return;
    const track = marqueeRef.current as HTMLElement;
    function handleFocus() {
      track.style.animationPlayState = 'paused';
    }
    function handleBlur() {
      track.style.animationPlayState = 'running';
    }
    container.addEventListener('focusin', handleFocus);
    container.addEventListener('focusout', handleBlur);
    return () => {
      container.removeEventListener('focusin', handleFocus);
      container.removeEventListener('focusout', handleBlur);
    };
  }, []);

  return (
    <div className="marquee-container mt-6" aria-label="Leadership positions marquee">
      <div className="marquee-track" ref={marqueeRef}>
        {loop.map((position, i) => {
          const isCenter = centerIdx === i;
          return (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="marquee-item px-2"
            >
              <Card
                tabIndex={0}
                className={`card-glow p-4 w-72 transition-transform duration-500 ${isCenter ? 'scale-110 z-20' : 'scale-100'}`}
              >
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-card rounded-full border border-accent-purple/20">
                      {position.icon}
                    </div>
                    <div>
                      <h4 className="font-bold gradient-text">{position.title}</h4>
                      <p className="text-sm text-accent-blue font-medium">{position.organization}</p>
                      <p className="text-xs text-secondary-text">{position.institution}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {position.duration}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {position.responsibilities.map((resp: string, idx: number) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm text-secondary-text">
                        <div className="w-1 h-1 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
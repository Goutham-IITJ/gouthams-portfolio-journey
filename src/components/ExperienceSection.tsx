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
      title: "Joint Secretary",
      organization: "Ateliers, Board of Art and Culture",
      institution: "IIT Jodhpur",
      duration: "Present",
      icon: <Users className="text-accent-purple" size={20} />,
      responsibilities: [
        "Lead cultural event organization and management",
        "Coordinate with artist communities and cultural societies",
        "Manage budgets and resource allocation for events",
        "Foster creative collaboration across campus"
      ]
    },
    {
      title: "Associate",
      organization: "Product Club",
      institution: "IIT Jodhpur", 
      duration: "Present",
      icon: <Target className="text-accent-blue" size={20} />,
      responsibilities: [
        "Participate in product management workshops and case studies",
        "Collaborate on innovative product development initiatives",
        "Won 1st Place in Pitch Rush Hackathon",
        "Develop entrepreneurial and product strategy skills"
      ]
    },
    {
      title: "Project Mentor",
      organization: "Robotics Society",
      institution: "IIT Jodhpur",
      duration: "Oct 2024 - Nov 2024",
      icon: <Users className="text-accent-purple" size={20} />,
      responsibilities: [
        "Guide junior students in robotics project development",
        "Provide technical mentorship in autonomous systems",
        "Conduct workshops on robot programming and design",
        "Foster innovation and hands-on learning experiences"
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

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-24 bg-gradient-accent opacity-30" />
              )}
              
              <Card className="card-glow p-8 hover:scale-105 transition-all duration-300 ml-16">
                <div className="space-y-6">
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
              
              {/* Timeline Dot */}
              <div className="absolute left-5 top-8 w-3 h-3 bg-accent-purple rounded-full border-4 border-background" />
            </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="card-glow p-6 hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
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
                    {position.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm text-secondary-text">
                        <div className="w-1 h-1 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
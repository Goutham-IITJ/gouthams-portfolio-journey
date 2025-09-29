import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Award, Code, Brain, Shield, ShoppingCart, Image } from "lucide-react";

const PortfolioShowcase = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Project Raseed",
      description: "An AI-powered agricultural advisory system that provides farmers with real-time crop recommendations, disease detection, and market price predictions using machine learning algorithms.",
      tech: ["Python", "TensorFlow", "OpenCV", "Flask", "React"],
      category: "AI/ML",
      icon: <Brain className="text-accent-purple" size={24} />,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null // User can upload image later
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX, secure payment integration, real-time inventory management, and advanced analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "Web Development",
      icon: <ShoppingCart className="text-accent-blue" size={24} />,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null
    },
    {
      title: "SentimentSphere",
      description: "Advanced sentiment analysis application using NLP techniques to analyze social media trends, customer feedback, and market sentiment with real-time visualization.",
      tech: ["Python", "NLTK", "Django", "D3.js", "PostgreSQL"],
      category: "Data Science",
      icon: <Brain className="text-accent-purple" size={24} />,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null
    },
    {
      title: "Network Intrusion Detection System",
      description: "Robust cybersecurity solution implementing machine learning algorithms to detect and prevent network intrusions with real-time monitoring and alert systems.",
      tech: ["Python", "Scikit-learn", "Wireshark", "Flask", "MySQL"],
      category: "Cybersecurity",
      icon: <Shield className="text-accent-blue" size={24} />,
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: null
    }
  ];

  const certificates = [
    {
      title: "Inter IIT Tech Meet 13.0",
      issuer: "Indian Institute of Technology",
      achievement: "Top 5 Finalist",
      description: "Autonomous Swarm Navigation project - developed intelligent multi-robot coordination system",
      date: "2024",
      icon: <Award className="text-accent-purple" size={24} />,
      imageUrl: null
    },
    {
      title: "Pitch Rush Hackathon",
      issuer: "Product Club, IIT Jodhpur",
      achievement: "1st Place Winner",
      description: "Innovative product solution with comprehensive business strategy and technical implementation",
      date: "2024",
      icon: <Award className="text-accent-blue" size={24} />,
      imageUrl: null
    },
    {
      title: "RowBoatics Competition",
      issuer: "National Robotics Championship",
      achievement: "Finalist",
      description: "Advanced autonomous boat navigation system with AI-powered obstacle avoidance",
      date: "2023",
      icon: <Award className="text-accent-purple" size={24} />,
      imageUrl: null
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <Card 
      className="card-glow p-6 hover:scale-105 transition-all duration-300 animate-fade-in group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="space-y-4">
        {/* Project Image or Icon */}
        <div className="relative h-48 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 rounded-lg overflow-hidden">
          {project.imageUrl ? (
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-3">
                {project.icon}
                <div className="text-2xl font-bold gradient-text">{project.title}</div>
                <div className="text-xs text-secondary-text opacity-60 flex items-center justify-center gap-2">
                  <Image size={14} />
                  Upload Project Image
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <Badge variant="outline" className="border-accent-purple/50 text-accent-purple">
              {project.category}
            </Badge>
          </div>
          
          <p className="text-secondary-text text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, techIndex: number) => (
              <span key={techIndex} className="bg-card/50 text-xs px-2 py-1 rounded-full text-secondary-text">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button size="sm" variant="outline" className="border-accent-purple/50 text-accent-purple hover:bg-accent-purple/10">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
            <Button size="sm" variant="outline" className="border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  const CertificateCard = ({ certificate, index }: { certificate: any; index: number }) => (
    <Card 
      className="card-glow p-6 hover:scale-105 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="space-y-4">
        {/* Certificate Image or Icon */}
        <div className="relative h-32 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 rounded-lg overflow-hidden">
          {certificate.imageUrl ? (
            <img 
              src={certificate.imageUrl} 
              alt={certificate.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-2">
                {certificate.icon}
                <div className="text-lg font-bold gradient-text">{certificate.achievement}</div>
                <div className="text-xs text-secondary-text opacity-60 flex items-center justify-center gap-2">
                  <Image size={12} />
                  Upload Certificate
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Certificate Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-white">{certificate.title}</h3>
          <p className="text-sm text-accent-purple font-medium">{certificate.issuer}</p>
          <p className="text-sm text-secondary-text leading-relaxed">{certificate.description}</p>
          <div className="flex justify-between items-center">
            <Badge variant="outline" className="border-accent-blue/50 text-accent-blue text-xs">
              {certificate.achievement}
            </Badge>
            <p className="text-xs text-secondary-text opacity-70">{certificate.date}</p>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-background via-background-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio <span className="gradient-text">Showcase</span>
            </h2>
            <p className="text-xl text-secondary-text max-w-3xl mx-auto">
              Explore my journey through projects, certifications, and technical expertise 
              that demonstrate my passion for innovation and problem-solving.
            </p>
          </div>

          {/* Tabbed Interface */}
          <Tabs defaultValue="projects" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="projects" className="data-[state=active]:bg-accent-purple/20 data-[state=active]:text-accent-purple">
                <Code className="mr-2 h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger value="certificates" className="data-[state=active]:bg-accent-blue/20 data-[state=active]:text-accent-blue">
                <Award className="mr-2 h-4 w-4" />
                Certificates
              </TabsTrigger>
              <TabsTrigger value="tech-stack" className="data-[state=active]:bg-accent-purple/20 data-[state=active]:text-accent-purple">
                <Brain className="mr-2 h-4 w-4" />
                Tech Stack
              </TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="certificates" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate, index) => (
                  <CertificateCard key={index} certificate={certificate} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tech-stack" className="space-y-8">
              <div className="text-center animate-fade-in">
                <div className="bg-gradient-accent/10 p-8 rounded-2xl border border-accent-purple/20">
                  <Brain className="text-accent-purple mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
                  <p className="text-secondary-text mb-6">
                    Explore my comprehensive technical skill set below.
                  </p>
                  <Button 
                    onClick={() => scrollToSection("skills")}
                    className="bg-accent-solid hover:bg-accent-purple text-white"
                  >
                    View Skills Section
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
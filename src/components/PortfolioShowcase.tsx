import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Award, Code, Brain, Shield, ShoppingCart, Image, ChevronDown, ChevronUp } from "lucide-react";

const PortfolioShowcase = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Project Raseed",
      description: "AI-First Receipt Intelligence Engine with Google Wallet Integration.A scalable Google Cloud Platform (GCP) serverless backend using Cloud Functions and Firebase, powered by Gemini AI, which achieved a 60% reduction in latency for multimodal receipt processing. The system enables queries in local languages through Vertex AI Agent, delivering real-time insights like spending trends and savings alerts as interactive Google Wallet passes. It also features a Gemini Vision ingestion pipeline with 98% OCR accuracy.",
      tech: ["Gemini Pro Vision", "Vertex AI", "OpenCV", "Firebase", "Cloud Functions"],
      category: "AI/ML",
      icon: <Brain className="text-accent-purple" size={24} />,
      githubUrl: "https://github.com/Goutham-IITJ/Raseed",
      liveUrl: "#",
      imageUrl: '/project-raseed.png' // User can upload image later
    },
    {
      title: " Autonomous Swarm Navigation",
      description: "Built a centralized intelligence system for robot swarm navigation, achieving a 35% reduction in pathfinding latency in unpredictable environments through optimized path-planning algorithms.A dual-layered architecture integrating reinforcement learning for path planning and YOLOv8 Nano for real time object detection, improving obstacle avoidance accuracy by 22%",
      tech: ["Gazebo", " ROS", "MongoDB", "YOLOv8 Nano", "RL"],
      category: "Robotics",
      icon: <ShoppingCart className="text-accent-blue" size={24} />,
      githubUrl: "https://github.com/Goutham-IITJ/E-commerce-platform",
      liveUrl: "#",
      imageUrl: '/swarm.png'
    },
    {
      title: "E-commerce Platform",
      description: "Architected and developed a responsive e-commerce web application using the MERN stack, which supports user authentication, real-time product management, and secure transactions. The platform features a mobile-first user interface built with Tailwind CSS, which improved user engagement by 30% and reduced page load times by 2 seconds."
      ,tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      category: "Web Development",
      icon: <ShoppingCart className="text-accent-blue" size={24} />,
      githubUrl: "https://github.com/Goutham-IITJ/E-commerce-platform",
      liveUrl: "#",
      imageUrl: null
    },
    {
      title: "SentimentSphere",
      description: "Advanced sentiment analysis application using NLP techniques to analyze social media trends, customer feedback, and market sentiment with real-time visualization.This project involved creating a real-time facial emotion detector using a CNN with a 50ms response latency and developing a BiLSTM text classifier with GloVe embeddings. The unified platform improved end-user detection accuracy by 20% compared to single-modality systems. ",
      tech: ["Python", "NLTK", "Django", "D3.js", "PostgreSQL"],
      category: "Data Science",
      icon: <Brain className="text-accent-purple" size={24} />,
      githubUrl: "https://github.com/Goutham-IITJ/SentimentSphere",
      liveUrl: "#",
      imageUrl: null
    },
    {
      title: "Network Intrusion Detection System",
      description: "Robust cybersecurity solution implementing machine learning algorithms to identify malicious network activities, including DoS attacks and unauthorized access, with over 90% detection accuracy. The project involved feature engineering and preprocessing of the KDD Cup 99 and NSL-KDD datasets and applying various ML models like k-NN, SVM, and XGBoost, which achieved AUC scores above 0.90",
      tech: ["Python", "Scikit-learn", "Wireshark", "Flask", "MySQL"],
      category: "Cybersecurity",
      icon: <Shield className="text-accent-blue" size={24} />,
      githubUrl: "https://github.com/Goutham-IITJ/Network-Intrusion-Detector",
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
      imageUrl: '/mine3.jpg'
    }
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2);

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <Card
      tabIndex={0}
      className="relative overflow-hidden p-6 transition-transform duration-300 ease-in-out transform group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/40 hover:scale-105"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow background */}
      <span className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent-purple/30 via-transparent to-accent-blue/30 blur-2xl opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100" aria-hidden />

      <div className="relative z-10 space-y-4">
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
            <Button size="sm" variant="outline" className="border-accent-purple/50 text-accent-purple hover:bg-accent-purple/10" onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
            <Button size="sm" variant="outline" className="border-accent-blue/50 text-accent-blue hover:bg-accent-blue/10" onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}
            >
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
      tabIndex={0}
      className="relative overflow-hidden p-6 transition-transform duration-300 ease-in-out transform group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/40 hover:scale-102"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow background */}
      <span className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tr from-accent-blue/30 via-transparent to-accent-purple/30 blur-2xl opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-focus:opacity-100" aria-hidden />

      <div className="relative z-10 space-y-4">
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
                {displayedProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>

              {/* Show More / Show Less Button */}
              {projects.length > 2 && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    className="border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                  >
                    {showAllProjects ? (
                      <>
                        <ChevronUp className="mr-2 h-4 w-4" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 h-4 w-4" />
                        Show More
                      </>
                    )}
                  </Button>
                </div>
              )}
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

                  {/* Marquee conveyor for tech logos */}
                  <div className="mt-6 marquee-container rounded-md" aria-label="Technology logos marquee">
                    <div className="marquee-track">
                      {[
                        { src: '/reactjs.svg', alt: 'React' },
                        { src: '/javascript.svg', alt: 'JavaScript' },
                        { src: '/nodejs.svg', alt: 'Node.js' },
                        { src: '/tailwind.svg', alt: 'Tailwind CSS' },
                        { src: '/vite.svg', alt: 'Vite' },
                        { src: '/firebase.svg', alt: 'Firebase' },
                        { src: '/MUI.svg', alt: 'MUI' },
                        { src: '/bootstrap.svg', alt: 'Bootstrap' },
                        { src: '/css.svg', alt: 'CSS3' },
                        { src: '/html.svg', alt: 'HTML5' },
                        { src: '/vercel.svg', alt: 'Vercel' }
                      ].concat([
                        { src: '/reactjs.svg', alt: 'React' },
                        { src: '/javascript.svg', alt: 'JavaScript' },
                        { src: '/nodejs.svg', alt: 'Node.js' },
                        { src: '/tailwind.svg', alt: 'Tailwind CSS' },
                        { src: '/vite.svg', alt: 'Vite' },
                        { src: '/firebase.svg', alt: 'Firebase' },
                        { src: '/MUI.svg', alt: 'MUI' },
                        { src: '/bootstrap.svg', alt: 'Bootstrap' },
                        { src: '/css.svg', alt: 'CSS3' },
                        { src: '/html.svg', alt: 'HTML5' },
                        { src: '/vercel.svg', alt: 'Vercel' }
                      ]).map((logo, i) => (
                        <div key={i} className="marquee-item w-24 h-14 flex items-center justify-center p-2">
                          <div className="w-full h-full flex items-center justify-center bg-card/10 rounded-md p-2">
                            <img src={logo.src} alt={logo.alt} loading="lazy" className="max-h-10 max-w-full object-contain" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      onClick={() => scrollToSection("skills")}
                      className="bg-accent-solid hover:bg-accent-purple text-white"
                    >
                      View Skills Section
                    </Button>
                  </div>
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
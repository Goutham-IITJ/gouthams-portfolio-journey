import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award, Code, Layers } from "lucide-react";

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const scrollToSkills = () => {
    const element = document.getElementById("skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Project Raseed",
      description: "AI-First Receipt Intelligence Engine with Google Wallet Integration. Architected a scalable GCP serverless backend achieving 60% reduction in processing latency.",
      tech: ["Gemini Pro Vision", "Vertex AI", "Google Wallet API", "Firebase", "Cloud Functions"],
      status: "Ongoing",
      highlights: ["98% OCR Accuracy", "90%+ User Engagement", "Real-time Processing"]
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce website using MERN stack with user authentication, real-time product management, and secure transactions.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux", "Tailwind CSS", "Razorpay"],
      status: "In Development",
      highlights: ["Mobile-First Design", "2s Load Time Reduction", "30% Better Engagement"]
    },
    {
      title: "SentimentSphere",
      description: "Multimodal Emotion Recognition system combining visual and textual data for real-time emotion detection with 68% validation accuracy.",
      tech: ["Python", "TensorFlow", "OpenCV", "NLP", "GloVe", "BiLSTM"],
      status: "Completed",
      highlights: ["50ms Response Time", "20% Accuracy Improvement", "Live Video Analysis"]
    },
    {
      title: "Network Intrusion Detection System",
      description: "Machine learning-based NIDS to identify malicious network activities with 90%+ detection accuracy using advanced ML algorithms.",
      tech: ["Python", "TensorFlow", "Scikit-learn", "XGBoost", "NumPy", "Pandas"],
      status: "Completed",
      highlights: ["90%+ Detection Rate", "AUC Score >0.90", "Real-time Monitoring"]
    }
  ];

  const certificates = [
    {
      title: "Inter IIT Tech Meet 13.0",
      achievement: "Top 5 Rank",
      description: "Autonomous Swarm Navigation - Kalyani Bharat Forge challenge with centralized robot intelligence system.",
      year: "2024"
    },
    {
      title: "Pitch Rush Hackathon",
      achievement: "1st Place Winner",
      description: "Product management and innovation hackathon showcasing entrepreneurial skills and product development.",
      year: "2024"
    },
    {
      title: "RowBoatics Competition",
      achievement: "Finalist",
      description: "RC Boat Racing competition at Techfest IIT Bombay, demonstrating engineering and robotics expertise.",
      year: "2023"
    }
  ];

  const techStack = {
    "Programming Languages": ["C/C++", "Python", "JavaScript", "SQL"],
    "Libraries & Frameworks": ["NumPy", "Pandas", "Matplotlib", "OpenCV", "Scikit-Learn", "TensorFlow", "React", "Express.js"],
    "Tools & OS": ["Git", "Jupyter Notebook", "Google Colab", "Linux", "Windows", "MongoDB"],
    "Software": ["Gazebo", "SolidWorks", "Fusion 360", "Vivado", "Firebase"]
  };

  const renderProjects = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <Card key={index} className="card-glow p-6 hover:scale-105 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
              <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                {project.status}
              </Badge>
            </div>
            
            <p className="text-secondary-text text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Key Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-white mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} className="text-xs bg-accent-solid/20 text-accent-purple border-accent-purple/30">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 4 && (
                    <Badge className="text-xs bg-secondary text-secondary-text">
                      +{project.tech.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderCertificates = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {certificates.map((cert, index) => (
        <Card key={index} className="card-glow p-6 hover:scale-105 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Award className="text-accent-purple" size={24} />
              <div>
                <h3 className="font-bold gradient-text">{cert.title}</h3>
                <Badge className="mt-1 bg-accent-solid text-white">
                  {cert.achievement}
                </Badge>
              </div>
            </div>
            
            <p className="text-secondary-text text-sm leading-relaxed">
              {cert.description}
            </p>
            
            <div className="text-xs text-accent-blue font-medium">
              {cert.year}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderTechStack = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Object.entries(techStack).map(([category, technologies]) => (
        <Card key={category} className="card-glow p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Code className="text-accent-purple" size={20} />
              <h3 className="font-bold gradient-text">{category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <Badge key={idx} className="bg-accent-solid/10 text-accent-blue border-accent-blue/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
      
      <div className="md:col-span-2 text-center mt-6">
        <Button 
          onClick={scrollToSkills}
          className="bg-accent-solid hover:bg-accent-purple text-white px-6 py-2 button-glow"
        >
          <Layers className="mr-2 h-4 w-4" />
          View Detailed Skills Section
        </Button>
      </div>
    </div>
  );

  const tabs = [
    { id: "projects", label: "Projects", icon: <Code size={18} /> },
    { id: "certificates", label: "Certificates", icon: <Award size={18} /> },
    { id: "techstack", label: "Tech Stack", icon: <Layers size={18} /> }
  ];

  return (
    <section className="py-20 bg-background/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Portfolio Showcase</span>
          </h2>
          <p className="text-xl text-secondary-text max-w-3xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise that showcase 
            my passion for innovation and continuous learning in technology.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card/50 backdrop-blur-md rounded-lg p-1 flex space-x-1 border border-border">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 transition-all ${
                  activeTab === tab.id 
                    ? "bg-accent-solid text-white shadow-md" 
                    : "text-secondary-text hover:text-white hover:bg-card/50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === "projects" && renderProjects()}
          {activeTab === "certificates" && renderCertificates()}
          {activeTab === "techstack" && renderTechStack()}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
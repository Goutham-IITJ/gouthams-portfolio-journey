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
  const skillCategories = [
    {
      icon: <Code className="text-accent-purple" size={32} />,
      title: "Programming Languages",
      description: "Core programming languages for development and research",
      skills: [
        { name: "Python", level: 90, description: "ML/AI, Data Science, Backend Development" },
        { name: "C/C++", level: 85, description: "System Programming, Competitive Programming" },
        { name: "JavaScript", level: 80, description: "Full-stack Web Development, Node.js" },
        { name: "SQL", level: 75, description: "Database Management, Query Optimization" }
      ]
    },
    {
      icon: <Database className="text-accent-blue" size={32} />,
      title: "Libraries & Frameworks",
      description: "Advanced libraries and frameworks for specialized applications",
      skills: [
        { name: "TensorFlow", level: 88, description: "Deep Learning, Neural Networks" },
        { name: "React", level: 85, description: "Frontend Development, Component Architecture" },
        { name: "NumPy/Pandas", level: 92, description: "Data Manipulation, Scientific Computing" },
        { name: "OpenCV", level: 80, description: "Computer Vision, Image Processing" },
        { name: "Scikit-Learn", level: 87, description: "Machine Learning, Model Training" },
        { name: "Express.js", level: 82, description: "Backend API Development" }
      ]
    },
    {
      icon: <Wrench className="text-accent-purple" size={32} />,
      title: "Tools & Operating Systems",
      description: "Development tools and system administration",
      skills: [
        { name: "Git/GitHub", level: 90, description: "Version Control, Collaboration" },
        { name: "Linux", level: 85, description: "System Administration, Command Line" },
        { name: "Docker", level: 75, description: "Containerization, Deployment" },
        { name: "Jupyter", level: 88, description: "Data Science, Research Development" },
        { name: "Google Colab", level: 90, description: "ML Research, GPU Computing" }
      ]
    },
    {
      icon: <Monitor className="text-accent-blue" size={32} />,
      title: "Software & Design",
      description: "Professional software for design and simulation",
      skills: [
        { name: "Gazebo", level: 85, description: "Robotics Simulation, ROS Integration" },
        { name: "SolidWorks", level: 80, description: "3D Modeling, Mechanical Design" },
        { name: "Fusion 360", level: 75, description: "CAD Design, Prototyping" },
        { name: "Vivado", level: 70, description: "FPGA Development, HDL Synthesis" }
      ]
    }
  ];

  const specializations = [
    {
      icon: <Brain className="text-accent-purple" size={24} />,
      title: "Machine Learning & AI",
      areas: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "Neural Networks"]
    },
    {
      icon: <Cpu className="text-accent-blue" size={24} />,
      title: "Robotics & Automation",
      areas: ["Autonomous Systems", "Swarm Intelligence", "Path Planning", "ROS", "Sensor Integration"]
    },
    {
      icon: <Globe className="text-accent-purple" size={24} />,
      title: "Web Development",
      areas: ["MERN Stack", "RESTful APIs", "Cloud Integration", "Responsive Design", "State Management"]
    },
    {
      icon: <Smartphone className="text-accent-blue" size={24} />,
      title: "Mobile & Cloud",
      areas: ["Firebase", "Google Cloud Platform", "Serverless Functions", "Real-time Databases", "API Integration"]
    }
  ];

  const SkillBar = ({ skill }: { skill: any }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-medium text-white">{skill.name}</span>
        <span className="text-sm text-accent-purple font-medium">{skill.level}%</span>
      </div>
      <div className="h-2 bg-card rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <p className="text-xs text-secondary-text">{skill.description}</p>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-secondary-text max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across programming languages, 
            frameworks, tools, and specialized domains in AI, robotics, and software development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-glow p-6 hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold gradient-text">{category.title}</h3>
                    <p className="text-sm text-secondary-text">{category.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} skill={skill} />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Specializations Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Areas of <span className="gradient-text">Specialization</span>
            </h3>
            <p className="text-secondary-text">
              Focused expertise in cutting-edge technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="card-glow p-6 hover:scale-105 transition-all duration-300 text-center">
                <div className="space-y-4">
                  <div className="flex justify-center">
                    {spec.icon}
                  </div>
                  <h4 className="font-bold gradient-text">{spec.title}</h4>
                  <div className="space-y-2">
                    {spec.areas.map((area, areaIndex) => (
                      <Badge 
                        key={areaIndex} 
                        variant="outline" 
                        className="text-xs mx-1 border-accent-purple/30 text-accent-blue"
                      >
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-glow p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-secondary-text mb-6">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              languages, and methodologies to stay at the forefront of innovation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-accent-solid/20 text-accent-purple border-accent-purple/30">
                Currently Learning: PyTorch
              </Badge>
              <Badge className="bg-accent-solid/20 text-accent-blue border-accent-blue/30">
                Next Goal: Kubernetes
              </Badge>
              <Badge className="bg-accent-solid/20 text-accent-purple border-accent-purple/30">
                Exploring: Web3 Technologies
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
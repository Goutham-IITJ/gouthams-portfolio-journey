import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb, Rocket } from "lucide-react";
import projectWorkspace from "@/assets/project-workspace.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-accent-purple" size={24} />,
      title: "Academic Excellence",
      description: "Electrical Engineering student at IIT Jodhpur with strong fundamentals in circuit theory, signals, and systems."
    },
    {
      icon: <Target className="text-accent-blue" size={24} />,
      title: "Technical Expertise",
      description: "Proficient in machine learning, robotics, and full-stack development with hands-on project experience."
    },
    {
      icon: <Lightbulb className="text-accent-purple" size={24} />,
      title: "Innovation Focus",
      description: "Passionate about creating intelligent solutions that bridge theoretical knowledge with practical applications."
    },
    {
      icon: <Rocket className="text-accent-blue" size={24} />,
      title: "Future Vision",
      description: "Aspiring to contribute to cutting-edge AI and robotics technologies that shape the future of automation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-background-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <p className="text-lg text-secondary-text leading-relaxed">
                  I am a motivated and detail-oriented <span className="text-accent-purple font-medium">Electrical Engineering undergraduate</span> at 
                  the prestigious Indian Institute of Technology, Jodhpur. My academic journey has been marked by a deep fascination 
                  with the intersection of <span className="text-accent-blue font-medium">electrical systems, artificial intelligence, and software development</span>.
                </p>
                
                <p className="text-lg text-secondary-text leading-relaxed">
                  With a <span className="gradient-text font-medium">CGPA of 7.36</span> and consistently strong academic performance, I have built a solid foundation 
                  in core engineering principles while actively pursuing practical applications through various projects and research initiatives. 
                  My experience spans from <span className="text-white font-medium">autonomous robotics and machine learning</span> to 
                  <span className="text-white font-medium">full-stack web development and AI-driven applications</span>.
                </p>

                <p className="text-lg text-secondary-text leading-relaxed">
                  Beyond academics, I actively contribute to the IIT Jodhpur community as <span className="text-accent-purple font-medium">Joint Secretary</span> of 
                  the Board of Art and Culture, where I balance my technical pursuits with creative leadership. My goal is to leverage 
                  technology to create meaningful impact and drive innovation in the rapidly evolving landscape of AI and automation.
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-12">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="card-glow p-4 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{highlight.title}</h3>
                        <p className="text-sm text-secondary-text leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative animate-scale-in">
              <div className="relative overflow-hidden rounded-2xl hero-glow">
                <img 
                  src={projectWorkspace}
                  alt="Project Workspace - AI and Robotics Development Environment"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-secondary/80 via-transparent to-transparent" />
                
                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-card/90 backdrop-blur-md p-3 border-accent-purple/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">7.36</div>
                        <div className="text-xs text-secondary-text">CGPA</div>
                      </div>
                    </Card>
                    <Card className="bg-card/90 backdrop-blur-md p-3 border-accent-blue/20">
                      <div className="text-center">
                        <div className="text-2xl font-bold gradient-text">IIT</div>
                        <div className="text-xs text-secondary-text">Jodhpur</div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-purple/20 rounded-full opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
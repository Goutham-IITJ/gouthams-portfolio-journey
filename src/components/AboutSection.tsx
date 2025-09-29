import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Lightbulb, Rocket } from "lucide-react";
import profilePic from "@/assets/profile-pic.png";

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
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold gradient-text mb-4">Hello, I'm Goutham A S</h3>
                <p className="text-lg text-secondary-text leading-relaxed">
                  I'm an <span className="text-accent-purple font-medium">Electrical Engineering student</span> at IIT Jodhpur 
                  with a strong interest in <span className="text-accent-blue font-medium">AI, robotics, and software development</span>. 
                  I'm passionate about creating intelligent solutions that bridge theoretical knowledge with practical applications.
                </p>
                
                <p className="text-lg text-secondary-text leading-relaxed">
                  With a <span className="gradient-text font-medium">CGPA of 7.36</span> and hands-on experience in 
                  <span className="text-white font-medium"> machine learning, autonomous systems, and full-stack development</span>, 
                  I'm dedicated to pushing the boundaries of technology and innovation.
                </p>
                
                <div className="text-sm text-secondary-text space-y-1">
                  <p><span className="text-accent-purple font-medium">Joint Secretary</span> - Board of Art and Culture, IIT Jodhpur</p>
                  <p><span className="text-accent-blue font-medium">Project Mentor</span> - Robotics Society, IIT Jodhpur</p>
                </div>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="card-glow p-4 hover:scale-105 transition-all duration-300 animate-slide-up" 
                        style={{ animationDelay: `${index * 0.1}s` }}>
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

            {/* Profile Image Section */}
            <div className="relative animate-scale-in flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-accent shadow-2xl hover:scale-105 transition-all duration-500 hover:shadow-accent-purple/30">
                  <img 
                    src={profilePic}
                    alt="Goutham A S - Profile Picture"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 blur-xl scale-110 animate-pulse" />
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-accent-purple/30 to-accent-blue/30 blur-2xl animate-pulse" />
                
                {/* Floating elements */}
                <div className="absolute top-8 -right-4 w-6 h-6 bg-accent-purple rounded-full animate-bounce opacity-60" />
                <div className="absolute bottom-12 -left-6 w-4 h-4 bg-accent-blue rounded-full animate-pulse opacity-40" />
                <div className="absolute top-1/2 -right-8 w-3 h-3 bg-white rounded-full animate-pulse opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
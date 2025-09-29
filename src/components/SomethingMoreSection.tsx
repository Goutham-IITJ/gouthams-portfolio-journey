import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Compass, Sparkles, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SomethingMoreSection = () => {
  const navigate = useNavigate();

  const handleDiscoverJourney = () => {
    navigate('/journey');
  };

  const personalHighlights = [
    {
      icon: <Compass className="text-accent-purple" size={24} />,
      title: "Adventures Beyond Tech",
      description: "From building RC planes to organizing cultural events, discover the creative side of my engineering journey."
    },
    {
      icon: <Sparkles className="text-accent-blue" size={24} />,
      title: "Creative Pursuits",
      description: "Exploring art, design, and creative expression as Joint Secretary of the Board of Art and Culture at IIT Jodhpur."
    },
    {
      icon: <Heart className="text-accent-purple" size={24} />,
      title: "Personal Stories",
      description: "The experiences, challenges, and moments that shaped my perspective and fueled my passion for innovation."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-background via-background-secondary to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent-purple rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Want to know <span className="gradient-text">more?</span>
            </h2>
            <p className="text-xl md:text-2xl text-secondary-text max-w-4xl mx-auto leading-relaxed">
              Beyond the technical achievements and academic credentials lies a journey filled with 
              creativity, leadership, and personal growth. Discover the stories that make me who I am.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {personalHighlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="card-glow p-6 hover:scale-105 transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-card rounded-full border border-accent-purple/20">
                      {highlight.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold gradient-text">
                    {highlight.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Main Call to Action */}
          <div className="space-y-8">
            <div className="relative inline-block">
              <Button 
                onClick={handleDiscoverJourney}
                size="lg"
                className="bg-gradient-accent hover:scale-110 text-white px-12 py-6 text-xl font-semibold button-glow transform transition-all duration-300 shadow-2xl"
              >
                <span className="flex items-center space-x-3">
                  <span>Discover My Journey</span>
                  <ArrowRight className="ml-2 h-6 w-6" />
                </span>
              </Button>
              
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 blur-xl scale-150 animate-pulse" />
            </div>

            <p className="text-secondary-text text-lg">
              Explore personal experiences, creative projects, and the moments that shaped my engineering journey
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-8 opacity-30">
            <div className="w-2 h-2 bg-accent-purple rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-gradient-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 bg-accent-blue rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-accent-purple rounded-full animate-float opacity-60" />
        <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-accent-blue rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse opacity-30" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-gradient-accent rounded-full animate-float opacity-20" style={{ animationDelay: '1.5s' }} />
      </div>
    </section>
  );
};

export default SomethingMoreSection;
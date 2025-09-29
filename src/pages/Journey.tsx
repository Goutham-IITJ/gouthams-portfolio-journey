import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import teamWork from "@/assets/team-work.jpg";
import rcPlane from "@/assets/rc-plane.jpg";
import artGallery from "@/assets/art-gallery.jpg";

const Journey = () => {
  const journeyEntries = [
    {
      title: "My Journey at the Inter IIT Tech Meet 13.0",
      date: "December 2024",
      location: "Mumbai, India",
      description: "Representing IIT Jodhpur at the prestigious Inter IIT Tech Meet was a defining moment in my engineering journey. Working on the Autonomous Swarm Navigation challenge for Kalyani Bharat Forge, our team developed a sophisticated centralized intelligence system that could coordinate multiple robots in real-time. The technical challenges were immense - from implementing reinforcement learning algorithms for dynamic path planning to integrating YOLOv8 Nano for real-time object detection. What made this experience truly special was the collaborative spirit, the late-night debugging sessions, and the moment we achieved our 35% reduction in pathfinding latency. Securing 5th place among India's top engineering institutions wasn't just a victory for our team; it was validation of our innovative approach and dedication to pushing technological boundaries.",
      image: teamWork,
      highlights: ["5th Place National Ranking", "35% Latency Reduction", "Real-time Multi-robot Coordination"]
    },
    {
      title: "Guiding the Next Wave: My Role as a Project Mentor",
      date: "October - November 2024",
      location: "IIT Jodhpur",
      description: "Mentoring junior students in the Robotics Society has been one of the most fulfilling experiences of my academic journey. Watching bright minds grapple with complex robotics concepts and gradually develop confidence in their problem-solving abilities reminded me of my own early days with technology. I guided multiple projects ranging from basic autonomous navigation to advanced computer vision applications. The joy of seeing a student's face light up when their robot successfully completes a task, or when they finally understand a complex algorithm, is incomparable. This role taught me that knowledge grows when shared, and that teaching is often the best way to deepen one's own understanding.",
      image: teamWork,
      highlights: ["10+ Students Mentored", "Multiple Successful Projects", "Knowledge Sharing & Growth"]
    },
    {
      title: "Creativity and Leadership: My Time as Joint Secretary",
      date: "Present",
      location: "IIT Jodhpur",
      description: "Leading the Fine Arts Society as Joint Secretary has been a beautiful balance to my technical pursuits. Organizing cultural events, managing creative collaborations, and fostering artistic expression across campus has taught me invaluable lessons about leadership, creativity, and community building. From coordinating art exhibitions to managing budgets for cultural festivals, this role has expanded my perspective beyond engineering. It's shown me that innovation isn't limited to technology - it thrives in art, culture, and human expression. The challenges of bringing together diverse creative minds and organizing large-scale events have honed my project management and interpersonal skills in ways that complement my technical education perfectly.",
      image: artGallery,
      highlights: ["Cultural Event Leadership", "Budget Management", "Creative Community Building"]
    },
    {
      title: "From Sketch to Sky: Building My First RC Plane",
      date: "2023",
      location: "Personal Project",
      description: "The RC plane project was where my theoretical knowledge of aerodynamics and electronics truly came to life. Starting with hand-drawn sketches and calculations for wing loading and center of gravity, I moved through CAD modeling, material selection, and the intricate process of building every component by hand. The countless hours spent in the workshop, learning to work with balsa wood, covering films, and electronic speed controllers, taught me patience and precision. The most challenging part wasn't the construction - it was the debugging when things didn't work as expected. Failed maiden flights led to analysis, modifications, and improvements. When the plane finally took to the skies successfully, it wasn't just a technical achievement; it was a testament to perseverance and the joy of bringing an idea from concept to reality.",
      image: rcPlane,
      highlights: ["End-to-end Design & Build", "Aerodynamics Application", "Hands-on Engineering"]
    },
    {
      title: "My Journey in the Product Club",
      date: "Present",
      location: "IIT Jodhpur",
      description: "Joining the Product Club opened my eyes to the business and user-centric side of technology. Learning about product management methodologies, user experience design, and market analysis has been incredibly valuable for an engineer. The highlight was winning 1st place at the Pitch Rush hackathon, where our team developed an innovative solution that balanced technical feasibility with market demand. This experience taught me to think beyond just building technically impressive solutions - it's about creating products that solve real problems for real people. The skills I've gained in product strategy, user research, and go-to-market planning have fundamentally changed how I approach engineering projects.",
      image: teamWork,
      highlights: ["1st Place Pitch Rush Winner", "Product Strategy Learning", "User-Centric Thinking"]
    }
  ];

  const artGalleryItems = [
    "Digital Art Composition 1",
    "Pencil Sketch Portrait",
    "Abstract Watercolor",
    "Digital Landscape Design",
    "Traditional Ink Drawing",
    "Mixed Media Artwork"
  ];

  return (
    <div className="min-h-screen bg-gradient-bg font-poppins">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Button 
            onClick={() => window.history.back()}
            variant="ghost" 
            className="text-accent-blue hover:text-accent-purple"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-xl text-secondary-text">
              Personal stories, creative pursuits, and the experiences that shaped who I am today
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="space-y-16">
            {journeyEntries.map((entry, index) => (
              <Card key={index} className="card-glow p-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="space-y-6">
                  {/* Entry Header */}
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold gradient-text">{entry.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-secondary-text">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{entry.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{entry.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-6">
                      <p className="text-secondary-text leading-relaxed text-lg">
                        {entry.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Key Highlights:</h4>
                        <ul className="space-y-2">
                          {entry.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-accent-blue">
                              <div className="w-2 h-2 bg-accent-purple rounded-full" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="relative">
                      <img 
                        src={entry.image} 
                        alt={entry.title}
                        className="w-full h-64 object-cover rounded-lg hero-glow"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Art Gallery Section */}
          <section className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                My <span className="gradient-text">Art Gallery</span>
              </h2>
              <p className="text-secondary-text">
                A collection of my creative works and artistic expressions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {artGalleryItems.map((item, index) => (
                <Card key={index} className="card-glow p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="h-40 bg-gradient-accent/20 rounded-lg flex items-center justify-center">
                      <img 
                        src={artGallery} 
                        alt={item}
                        className="w-full h-full object-cover rounded-lg opacity-70"
                      />
                    </div>
                    <h3 className="font-medium gradient-text">{item}</h3>
                    <p className="text-sm text-secondary-text">Placeholder for artwork</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Journey;
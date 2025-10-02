import { useEffect, useState } from "react";
import { Code2, User, Zap } from "lucide-react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [phase, setPhase] = useState("start");

  useEffect(() => {
    const sequence = [
      setTimeout(() => setPhase("icons"), 100),
      setTimeout(() => setPhase("title"), 600),
      setTimeout(() => setPhase("subtitle"), 1200),
      setTimeout(() => setPhase("end"), 2500),
      setTimeout(onComplete, 3000),
    ];

    return () => sequence.forEach(clearTimeout);
  }, [onComplete]);

  const icons = [Code2, User, Zap];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-bg transition-opacity duration-500"
         style={{ opacity: phase === 'end' ? 0 : 1 }}>
      <div className="text-center space-y-8">
        {/* Loading Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="transition-all duration-700 ease-out"
              style={{ 
                opacity: phase === 'start' ? 0 : 1,
                transform: phase === 'start' ? 'translateY(20px)' : 'translateY(0px)',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <Icon size={48} className="drop-shadow-2xl text-accent-purple animate-icon-float" style={{ animationDelay: `${index * 0.3}s` }}/>
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <div className="space-y-4 transition-all duration-700 ease-out"
             style={{
                opacity: phase === 'title' || phase === 'subtitle' || phase === 'end' ? 1 : 0,
                transform: phase === 'title' || phase === 'subtitle' || phase === 'end' ? 'translateY(0)' : 'translateY(20px)',
             }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-text-glow">
            Welcome To My{" "}
            <span className="gradient-text">Portfolio</span>{" "}
            Website
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-secondary-text transition-opacity duration-700"
              style={{ 
                opacity: phase === 'subtitle' || phase === 'end' ? 1 : 0,
                transitionDelay: '200ms'
             }}
          >
            Goutham-A-S
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;

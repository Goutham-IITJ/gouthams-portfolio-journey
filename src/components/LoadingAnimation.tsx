import { useEffect, useState } from "react";
import { Code2, User, Zap } from "lucide-react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < 3) {
        setCurrentPhase(currentPhase + 1);
      } else {
        onComplete();
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [currentPhase, onComplete]);

  const icons = [Code2, User, Zap];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-bg">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Loading Icons */}
        <div className="flex justify-center space-x-8 mb-12">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className={`loading-icon transition-all duration-700 ease-out transform ${
                currentPhase >= index 
                  ? "opacity-100 scale-100 text-accent-purple animate-bounce" 
                  : "opacity-30 scale-75 text-secondary-text"
              }`}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                transform: currentPhase >= index ? 'translateY(0px)' : 'translateY(10px)'
              }}
            >
              <Icon size={48} className="drop-shadow-2xl" />
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Welcome To My{" "}
            <span className="gradient-text">Portfolio</span>{" "}
            Website
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-secondary-text">
            Goutham-A-S
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-card rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-accent transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${(currentPhase / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
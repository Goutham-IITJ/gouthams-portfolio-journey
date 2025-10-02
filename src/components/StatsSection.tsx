import { useEffect, useState } from "react";
import { FolderOpen, Award, Calendar, ArrowRight } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  description: string;
  delay: number;
}

const StatCard = ({ icon, number, label, description, delay }: StatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, 16);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div 
      id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="stat-card group"
    >
      <div className="stat-card-content">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-card rounded-full border border-accent-purple/20 text-accent-purple group-hover:border-accent-purple/50 group-hover:text-white transition-colors">
            {icon}
          </div>
          <div className="text-5xl font-bold gradient-text">
            {count}
          </div>
        </div>
        <div className="text-left mt-4">
          <div className="text-white font-semibold text-lg">
            {label}
          </div>
          <p className="text-secondary-text text-sm mt-1">
            {description}
          </p>
        </div>
        <div className="mt-4 text-left">
          <span className="text-accent-blue text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            View More <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <FolderOpen size={24} />,
      number: 8,
      label: "TOTAL PROJECTS",
      description: "Innovative web solutions crafted"
    },
    {
      icon: <Award size={24} />,
      number: 5,
      label: "CERTIFICATES",
      description: "Professional skills validated"
    },
    {
      icon: <Calendar size={24} />,
      number: 2,
      label: "YEARS OF EXPERIENCE",
      description: "Continuous learning journey"
    }
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

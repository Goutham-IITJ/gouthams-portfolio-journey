import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { FolderOpen, Award, Calendar } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  number: number;
  label: string;
  delay: number;
}

const StatCard = ({ icon, number, label, delay }: StatCardProps) => {
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
    <Card 
      id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="card-glow p-6 text-center hover:scale-105 transition-all duration-300"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="text-accent-purple">
          {icon}
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold gradient-text">
            {count}+
          </div>
          <div className="text-secondary-text font-medium mt-1">
            {label}
          </div>
        </div>
      </div>
    </Card>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: <FolderOpen size={48} />,
      number: 8,
      label: "TOTAL PROJECTS"
    },
    {
      icon: <Award size={48} />,
      number: 5,
      label: "CERTIFICATES"
    },
    {
      icon: <Calendar size={48} />,
      number: 2,
      label: "YEARS OF EXPERIENCE"
    }
  ];

  return (
    <section className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
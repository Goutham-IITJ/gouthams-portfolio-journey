import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electrical Engineering",
      institution: "Indian Institute of Technology, Jodhpur",
      duration: "2023 - 2027",
      grade: "7.36 CGPA",
      location: "Jodhpur, Rajasthan",
      description: "Pursuing comprehensive education in electrical engineering with focus on circuit theory, signals and systems, and emerging technologies.",
      icon: <GraduationCap className="text-accent-purple" size={28} />,
      highlights: [
        "Core Curriculum in Circuit Theory & Signal Processing",
        "Specialization in Pattern Recognition & Machine Learning", 
        "Advanced coursework in Probability & Stochastic Processes",
        "Hands-on experience with Computer Organization & Architecture"
      ],
      courses: [
        "Data Structures & Algorithms",
        "Pattern Recognition and Machine Learning",
        "Probability, Statistics & Stochastic Processes",
        "Signals and Systems",
        "Circuit Theory",
        "Computer Organization & Architecture"
      ],
      status: "Current",
      bgColor: "bg-accent-purple/10 border-accent-purple/20"
    },
    {
      degree: "Senior Secondary Education",
      field: "Science Stream (PCM)",
      institution: "CBSE Board",
      duration: "2021 - 2023",
      grade: "97.8%",
      location: "India",
      description: "Completed senior secondary education with distinction in Physics, Chemistry, and Mathematics, laying strong foundation for engineering studies.",
      icon: <Award className="text-accent-blue" size={28} />,
      highlights: [
        "Top 1% performance in board examinations",
        "Strong foundation in Mathematics and Physics",
        "Active participation in science olympiads",
        "Leadership roles in school technical societies"
      ],
      courses: [
        "Advanced Mathematics",
        "Physics (Mechanics, Thermodynamics, Electromagnetism)",
        "Chemistry (Physical, Organic, Inorganic)",
        "Computer Science",
        "English Literature"
      ],
      status: "Completed",
      bgColor: "bg-accent-blue/10 border-accent-blue/20"
    },
    {
      degree: "Secondary Education", 
      field: "ICSE Curriculum",
      institution: "ICSE Board",
      duration: "2019 - 2021",
      grade: "96%",
      location: "India",
      description: "Comprehensive secondary education under ICSE curriculum with excellent academic performance and well-rounded development in sciences and humanities.",
      icon: <BookOpen className="text-accent-purple" size={28} />,
      highlights: [
        "Consistent academic excellence across all subjects",
        "Strong performance in science and mathematics",
        "Active involvement in co-curricular activities",
        "Foundation building in analytical thinking"
      ],
      courses: [
        "Mathematics",
        "Physics",
        "Chemistry", 
        "Biology",
        "English Language & Literature",
        "Computer Applications"
      ],
      status: "Completed",
      bgColor: "bg-accent-purple/10 border-accent-purple/20"
    }
  ];

  const academicAchievements = [
    {
      title: "JEE Advanced Qualification",
      description: "Successfully qualified JEE Advanced and secured admission to IIT Jodhpur",
      year: "2023",
      icon: <Award className="text-accent-purple" size={20} />
    },
    {
      title: "JEE Mains B.Arch AIR 132",
      description: "Achieved All India Rank 132 in JEE Mains B.Architecture examination",
      year: "2019", 
      icon: <Award className="text-accent-blue" size={20} />
    },
    {
      title: "Consistent Academic Excellence",
      description: "Maintained top percentile performance throughout academic career",
      year: "2019-2023",
      icon: <GraduationCap className="text-accent-purple" size={20} />
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-secondary-text max-w-3xl mx-auto">
            A comprehensive academic foundation built through rigorous coursework, 
            competitive examinations, and continuous learning at prestigious institutions.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {education.map((edu, index) => (
            <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-accent opacity-30" />
              )}
              
              <Card className={`card-glow p-8 hover:scale-105 transition-all duration-300 ml-16 ${edu.bgColor}`}>
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-card rounded-full border border-accent-purple/20">
                      {edu.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-wrap items-start justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold gradient-text">{edu.degree}</h3>
                          <p className="text-lg text-white font-medium">{edu.field}</p>
                          <p className="text-accent-blue font-medium">{edu.institution}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <Badge className={`${edu.status === 'Current' ? 'bg-accent-solid' : 'bg-accent-blue/20 text-accent-blue'} text-white`}>
                            {edu.status}
                          </Badge>
                          <div className="text-2xl font-bold gradient-text">{edu.grade}</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-text mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary-text leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Academic Highlights:</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-secondary-text">
                          <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Courses */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-accent-purple/30 text-accent-blue">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Timeline Dot */}
              <div className={`absolute left-5 top-8 w-3 h-3 rounded-full border-4 border-background ${
                edu.status === 'Current' ? 'bg-accent-purple animate-pulse' : 'bg-accent-blue'
              }`} />
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Academic <span className="gradient-text">Achievements</span>
            </h3>
            <p className="text-secondary-text">
              Recognition and accomplishments throughout the academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicAchievements.map((achievement, index) => (
              <Card key={index} className="card-glow p-6 hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-2 bg-card rounded-full border border-accent-purple/20">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-bold gradient-text">{achievement.title}</h4>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {achievement.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-sm text-secondary-text leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Learning Goals */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card className="card-glow p-8 text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <GraduationCap className="text-accent-purple" size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Continuous Learning Journey
                </h3>
                <p className="text-secondary-text leading-relaxed mb-6">
                  Education doesn't stop at formal degrees. I'm committed to lifelong learning, 
                  staying updated with emerging technologies, and pursuing advanced studies in AI, 
                  robotics, and electrical engineering to remain at the forefront of innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge className="bg-accent-solid/20 text-accent-purple border-accent-purple/30">
                    Future: Masters in AI/Robotics
                  </Badge>
                  <Badge className="bg-accent-solid/20 text-accent-blue border-accent-blue/30">
                    Continuous: Online Certifications
                  </Badge>
                  <Badge className="bg-accent-solid/20 text-accent-purple border-accent-purple/30">
                    Goal: Research Publications
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
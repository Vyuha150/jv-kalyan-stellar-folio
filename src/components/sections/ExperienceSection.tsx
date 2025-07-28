import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Users, Lightbulb, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const experiences = [
    {
      year: "2023 – Present",
      role: "Founder",
      organization: "Vyuha",
      description: "Leading a student-led innovation movement with 1500+ empowered members",
      icon: <Lightbulb size={24} />,
      image: "/lovable-uploads/74f430d5-8e2d-4be6-8fff-cdb0aa77c8c6.png",
    },
    {
      year: "2022 – Present",
      role: "Vice President",
      organization: "KL SAC",
      description: "Strategic leadership in student affairs and community development",
      icon: <Building size={24} />,
      image: "/lovable-uploads/ec378be5-3472-4f11-a063-4b863707624f.png",
    },
    {
      year: "2023–2024",
      role: "IIC Convener",
      organization: "Innovation & Incubation Cell",
      description: "Fostering entrepreneurship and innovation among students",
      icon: <Users size={24} />,
      image: "/lovable-uploads/2f095c44-3825-450f-93df-96413c20c8d3.png",
    },
    {
      year: "2021–2022",
      role: "Student",
      organization: "AI & DS @ KL University",
      description: "Specialized in Artificial Intelligence and Data Science",
      icon: <GraduationCap size={24} />,
      image: "/lovable-uploads/4824763f-1eb6-4a9a-83bd-0f9dfac722a9.png",
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background to-background/95" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            Experience <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey of leadership, innovation, and impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.organization}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 border-4 border-primary rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="text-primary">
                      {exp.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 card-glass p-6 group">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-medium text-primary mb-3">
                        {exp.organization}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                    
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-lg">
                        <img 
                          src={exp.image} 
                          alt={`${exp.role} at ${exp.organization}`}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
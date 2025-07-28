import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, BookOpen, Mic } from 'lucide-react';

const AchievementsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const achievements = [
    {
      image: "/lovable-uploads/74f430d5-8e2d-4be6-8fff-cdb0aa77c8c6.png",
      title: "Community Outreach Program",
      description: "Leading student engagement initiatives with community leaders and officials",
      icon: <Users size={20} />,
    },
    {
      image: "/lovable-uploads/2f095c44-3825-450f-93df-96413c20c8d3.png",
      title: "Educational Mentorship",
      description: "Mentoring sessions with renowned educators and knowledge sharing initiatives",
      icon: <BookOpen size={20} />,
    },
    {
      image: "/lovable-uploads/ec378be5-3472-4f11-a063-4b863707624f.png",
      title: "Award of Excellence",
      description: "Recognized by KLSAC for outstanding contributions to student affairs and leadership",
      icon: <Award size={20} />,
    },
    {
      image: "/lovable-uploads/a1dd36ac-440c-4b43-9dc3-662f860923d3.png",
      title: "Public Speaking Excellence",
      description: "Leading seminars and talks reaching 800+ participants in entrepreneurship programs",
      icon: <Mic size={20} />,
    },
  ];

  return (
    <section id="achievements" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            <span className="text-primary">Achievements</span> Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones in leadership, community service, and youth empowerment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-glass overflow-hidden group cursor-pointer"
              style={{
                transition: 'all 0.5s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card), var(--shadow-glow-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary/90 text-white p-2 rounded-full">
                  {achievement.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
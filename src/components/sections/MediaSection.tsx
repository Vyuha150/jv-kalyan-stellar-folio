import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Mic, Camera, Award } from 'lucide-react';

const MediaSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const mediaItems = [
    {
      image: "/lovable-uploads/a1dd36ac-440c-4b43-9dc3-662f860923d3.png",
      title: "Entrepreneurship Seminar",
      description: "Leading seminars with 800+ participants, sharing insights on innovation and leadership",
      type: "Speaking",
      icon: <Mic size={20} />,
    },
    {
      image: "/lovable-uploads/a79294f9-72f8-49c9-a09a-2174896866d6.png",
      title: "Leadership Podcast",
      description: "Discussing strategies for youth empowerment and community building",
      type: "Podcast",
      icon: <Camera size={20} />,
    },
    {
      image: "/lovable-uploads/ec378be5-3472-4f11-a063-4b863707624f.png",
      title: "Award Recognition",
      description: "Receiving recognition for excellence in student affairs and leadership initiatives",
      type: "Achievement",
      icon: <Award size={20} />,
    },
  ];

  return (
    <section id="media" ref={ref} className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            Leadership <span className="text-primary">Talks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, speeches, and moments from various leadership events and initiatives
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
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
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-primary/90 text-white p-4 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play size={24} />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  {item.icon}
                  {item.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Interested in having J V Kalyan speak at your event?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300">
            Book Speaking Engagement
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MediaSection;
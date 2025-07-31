import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Play, Sparkles } from 'lucide-react';
import MeshBackground from '../3d/MeshBackground';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <MeshBackground />
      </div>
      
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/30 to-background" />
      </div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-1 h-1 bg-primary/40' : 
              i % 3 === 1 ? 'w-2 h-2 bg-secondary/30' : 
              'w-1.5 h-1.5 bg-accent/30'
            }`}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: [null, -30, 30, -15, 0],
              x: [null, 10, -10, 5, 0],
              opacity: [0, 1, 0.6, 1, 0],
              scale: [0, 1, 0.8, 1, 0]
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Innovation Leader</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            className="text-7xl md:text-9xl font-black font-display mb-6 leading-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <motion.span 
              className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              style={{
                textShadow: '0 0 40px hsl(var(--primary) / 0.3)',
              }}
            >
              J V KALYAN
            </motion.span>
          </motion.h1>
          
          {/* Professional Tagline */}
          <motion.div 
            className="text-2xl md:text-4xl mb-6 font-display font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span className="text-foreground">Strategist</span>
            <span className="text-muted-foreground mx-3">|</span>
            <span className="text-primary">Technologist</span>
            <span className="text-muted-foreground mx-3">|</span>
            <span className="text-secondary">Youth Leader</span>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Empowering minds through <span className="text-primary font-medium">innovation</span> & <span className="text-secondary font-medium">impact</span>.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/venkat-kalyan-4239ba21a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-glow text-background font-semibold rounded-xl text-lg transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: 'var(--shadow-glow-primary)',
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <ExternalLink size={22} />
                View LinkedIn
              </span>
            </motion.a>
            
            <motion.button
              onClick={() => {
                const mediaSection = document.getElementById('media');
                if (mediaSection) {
                  mediaSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-card/50 backdrop-blur-md border-2 border-accent/30 text-foreground font-semibold rounded-xl text-lg hover:bg-accent/10 hover:border-accent transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={22} />
              Watch Leadership Talks
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          onClick={scrollToNext}
        >
          <motion.div
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-300 group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm mb-3 font-medium group-hover:text-primary">Explore More</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center group-hover:border-primary/50 transition-colors">
              <motion.div
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
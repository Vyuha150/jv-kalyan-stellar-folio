import { motion } from 'framer-motion';
import { ChevronDown, ExternalLink, Calendar, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MeshBackground from '../3d/MeshBackground';

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <MeshBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold font-display tracking-tight"
          >
            <span className="block text-foreground">J V</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent glow-text">
              Kalyan
            </span>
          </motion.h1>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
          >
            <span className="block mb-2">Crafting Strategies.</span>
            <span className="block mb-2">Empowering Youth.</span>
            <span className="block text-primary glow-text">Engineering Impact.</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Strategist, Technologist, and Public Leader building tech-enabled ecosystems 
            for students and society. Founder of Vyuha with 1500+ members empowered.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Button
              asChild
              className="btn-primary group"
            >
              <a
                href="https://www.linkedin.com/in/venkat-kalyan-4239ba21a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Visit LinkedIn
                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.div>
              </a>
            </Button>

            <Button className="btn-secondary group">
              <Calendar size={20} />
              Book as Speaker
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
              >
                🎤
              </motion.div>
            </Button>

            <Button className="btn-outline group" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
              <Eye size={20} />
              View Portfolio
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ y: -2 }}
              >
                ↓
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={24} className="animate-pulse-glow" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
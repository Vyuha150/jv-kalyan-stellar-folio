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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/10">
      {/* Clean Background with subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_theme(colors.primary/0.05),_transparent_50%),radial-gradient(circle_at_80%_20%,_theme(colors.secondary/0.05),_transparent_50%)]" />
      
      {/* Animated Image Gallery */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[
          '/lovable-uploads/164345b8-1028-4af7-a957-a347aa2d7838.png',
          '/lovable-uploads/2f095c44-3825-450f-93df-96413c20c8d3.png',
          '/lovable-uploads/36a177f7-a42b-4560-9f6a-f7c0031f7791.png',
          '/lovable-uploads/4824763f-1eb6-4a9a-83bd-0f9dfac722a9.png',
          '/lovable-uploads/74f430d5-8e2d-4be6-8fff-cdb0aa77c8c6.png',
          '/lovable-uploads/783a5a45-55f5-4f93-a969-c1d55a50eac7.png',
          '/lovable-uploads/891f5dee-ec79-4cc4-8cbc-0e75b345bbb5.png',
          '/lovable-uploads/9b07a4a2-48f6-452f-9c84-fbae4d7172ec.png',
          '/lovable-uploads/a1dd36ac-440c-4b43-9dc3-662f860923d3.png',
          '/lovable-uploads/a79294f9-72f8-49c9-a09a-2174896866d6.png',
          '/lovable-uploads/af513be0-c5d4-4426-b783-1cdb8e3dfcd1.png',
          '/lovable-uploads/e9bb5b4a-5e48-47e1-8f41-452a858222d3.png',
          '/lovable-uploads/ec378be5-3472-4f11-a063-4b863707624f.png',
          '/lovable-uploads/ff5d922c-4190-454f-b4a8-250dfd2100ec.png'
        ].map((imageSrc, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 25}%`,
              width: '120px',
              height: '120px',
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              rotate: Math.random() * 360,
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100
            }}
            animate={{
              opacity: [0, 0.6, 0.4, 0.8, 0.3],
              scale: [0, 1, 0.9, 1.1, 0.8],
              rotate: [null, 15, -10, 5, 0],
              x: [null, 20, -15, 10, 0],
              y: [null, -20, 15, -10, 0]
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            whileHover={{
              scale: 1.3,
              opacity: 0.9,
              rotate: 0,
              transition: { duration: 0.3 }
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden backdrop-blur-sm border border-primary/20 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-50" />
              <img
                src={imageSrc}
                alt={`J V Kalyan Achievement ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/50 transition-all duration-300 rounded-2xl" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-15">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-1 h-1 bg-primary/60' : 
              i % 3 === 1 ? 'w-2 h-2 bg-secondary/40' : 
              'w-1.5 h-1.5 bg-accent/50'
            }`}
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0,
              scale: 0
            }}
            animate={{
              y: [null, -40, 40, -20, 0],
              x: [null, 15, -15, 8, 0],
              opacity: [0, 1, 0.7, 1, 0],
              scale: [0, 1, 0.8, 1, 0]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
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
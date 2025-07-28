import { motion } from 'framer-motion';
import { Home, User, Briefcase, Award, Mail } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', icon: <Home size={20} />, label: 'Home', href: '#home' },
  { id: 'about', icon: <User size={20} />, label: 'About', href: '#about' },
  { id: 'skills', icon: <Briefcase size={20} />, label: 'Skills', href: '#skills' },
  { id: 'achievements', icon: <Award size={20} />, label: 'Achievements', href: '#achievements' },
  { id: 'contact', icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
];

const FloatingNav = () => {
  const [activeItem, setActiveItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleNavClick = (href: string, id: string) => {
    setActiveItem(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="nav-floating"
    >
      {navItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
          className="relative"
        >
          <div
            className={`nav-item ${activeItem === item.id ? 'bg-primary/20 border-primary/50' : ''}`}
            onClick={() => handleNavClick(item.href, item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-foreground"
            >
              {item.icon}
            </motion.div>
          </div>
          
          {/* Tooltip */}
          {hoveredItem === item.id && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 
                         bg-card/90 backdrop-blur-md border border-border/50 
                         rounded-lg px-3 py-2 text-sm text-foreground
                         whitespace-nowrap shadow-lg"
            >
              {item.label}
              <div className="absolute left-full top-1/2 -translate-y-1/2 
                              border-4 border-transparent border-l-card/90" />
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default FloatingNav;
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Users, Target, Zap } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: <Users size={24} />, value: '1500+', label: 'Members Empowered' },
    { icon: <Building size={24} />, value: '5+', label: 'Organizations Led' },
    { icon: <Target size={24} />, value: '800+', label: 'Seminar Participants' },
    { icon: <Zap size={24} />, value: '10+', label: 'Tech Projects' },
  ];

  const philosophyCards = [
    {
      icon: <Target size={32} />,
      title: 'Vision',
      subtitle: 'Empowering Young Minds',
      description: 'Building tech-enabled ecosystems that provide students and youth with the tools, knowledge, and opportunities to create meaningful impact in their communities.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Approach',
      subtitle: 'Strategy, Innovation, Execution',
      description: 'Combining strategic thinking with cutting-edge technology and hands-on execution to deliver solutions that scale and create lasting change.',
    },
    {
      icon: <Users size={32} />,
      title: 'Impact',
      subtitle: 'Community, Tech, Education',
      description: 'Fostering collaborative environments where technology meets education to empower the next generation of leaders and innovators.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">
            About <span className="text-primary">J V Kalyan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategist and public speaker building tech-enabled ecosystems for students and society. 
            Passionate about empowering youth through innovation, leadership, and strategic thinking.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card-glass p-6 text-center hover:shadow-glow-primary/10 transition-all duration-500"
            >
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 font-display">
            Vision & Philosophy
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {philosophyCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                className="card-glass p-8 hover:shadow-glow-primary/20 transition-all duration-500 group"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground">{card.title}</h4>
                <h5 className="text-primary font-medium mb-4">{card.subtitle}</h5>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="card-glass p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center font-display">Professional Journey</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Current Focus</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Founder of Vyuha</strong> - Leading a community of 1500+ empowered members</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>VP - KL SAC</strong> - Strategic leadership in student affairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Public Speaker</strong> - 800+ participants in entrepreneurship seminars</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Tech Innovator</strong> - Developing AI and data science solutions</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Core Expertise</h4>
              <div className="space-y-4">
                <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                  <h5 className="font-medium text-foreground mb-2">Strategic Consulting</h5>
                  <p className="text-sm text-muted-foreground">Organizational development and strategic planning</p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                  <h5 className="font-medium text-foreground mb-2">Technology & AI</h5>
                  <p className="text-sm text-muted-foreground">NLP, Scikit-Learn, RPA, and data science</p>
                </div>
                <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                  <h5 className="font-medium text-foreground mb-2">Youth Empowerment</h5>
                  <p className="text-sm text-muted-foreground">Leadership development and community building</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
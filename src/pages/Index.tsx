import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import FloatingNav from '@/components/navigation/FloatingNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <FloatingNav />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

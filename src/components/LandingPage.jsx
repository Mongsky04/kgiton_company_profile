import { useState, useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import ServicesSection from './ServicesSection';
import IndustriesSection from './IndustriesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

function LandingPage() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'tentang-kami', 'layanan', 'kontak'];
      const scrollPosition = window.scrollY + 150;

      setIsScrolled(window.scrollY > 50);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen w-full overflow-hidden">
      <Header activeSection={activeSection} isScrolled={isScrolled} />
      
      <main className="pt-[80px] md:pt-[103px]">
        <HeroSection />
        <AboutSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <IndustriesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;

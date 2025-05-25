// src/App.tsx
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ComponentsSection from './components/ComponentsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MethodologySection from './components/MethodologySection';
import { navItems } from './data/data';
import TimelineSection from './components/TimelineSection';
import DownloadsSection from './components/DownloadsSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Define sections in order
      const sections = navItems;
      let currentSection = 'home';
      
      // Check which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if its top is above the middle of the viewport
          // and its bottom is below the middle of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
            break;
          }
          // Alternative check: if section top is close to viewport top
          if (rect.top <= 200 && rect.bottom > 200) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation 
        activeSection={activeSection}
        isScrolled={isScrolled}
        onSectionClick={scrollToSection}
      />
      <section id="home">
        <HeroSection onScrollToSection={scrollToSection} />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="methodology">
        <MethodologySection />
      </section>
      <section id="components">
        <ComponentsSection />
      </section>
      <section id="timeline">
        <TimelineSection />
      </section>
      <section id="downloads">
        <DownloadsSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default App;
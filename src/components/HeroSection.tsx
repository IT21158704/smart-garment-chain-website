// src/components/HeroSection.tsx
import React from 'react';
import { Brain, ChevronDown, Download } from 'lucide-react';

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {

  const handleDownloadPaper = () => {
    try {
      // Create a link element
      const link = document.createElement('a');
      link.href = '/public/documents/researchpaper.pdf';
      link.download = 'Smart-Garment-Chain-Research-Paper.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Show success message
      console.log('Download initiated successfully');
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: Open in new tab if direct download fails
      window.open('/src/assets/documents/researchpaper.pdf', '_blank');
    }
  };
  
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl px-4 mx-auto text-center">
        <div className="mb-8">
          <Brain className="w-20 h-20 mx-auto mb-6 text-blue-400 animate-bounce" />
          <h1 className="mb-6 text-2xl font-bold leading-tight text-transparent sm:text-3xl md:text-5xl lg:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
            Smart Garment Chain: AI-Based Supply Chain Management System
          </h1>
          <p className="max-w-4xl mx-auto mb-8 text-base leading-relaxed text-gray-300 sm:text-xl md:text-2xl">
            Revolutionizing garment industry operations through intelligent automation, 
            reducing costs effectively with cutting-edge artificial intelligence
          </p>
        </div>
        
        <div className="flex flex-col justify-center gap-4 mb-12 sm:flex-row">
          <button 
            onClick={() => onScrollToSection('about')}
            className="px-8 py-4 text-lg font-semibold transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105"
          >
            Explore Research
          </button>
          <button 
            onClick={handleDownloadPaper}
            className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold transition-all duration-300 border-2 border-blue-400 rounded-lg hover:bg-blue-400/10"
          >
            <Download className="w-5 h-5" />
            Download Research Paper
          </button>
        </div>
        
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;

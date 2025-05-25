// src/components/HeroSection.tsx
import React from 'react';
import { Brain, ChevronDown, Download } from 'lucide-react';

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {

    const handleDownloadPaper = () => {
      // In a real application, this would trigger a file download
      alert('Research paper download would be initiated here. Please contact the research team for the full paper.');
    };
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Brain className="w-20 h-20 mx-auto mb-6 text-blue-400 animate-bounce" />
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Smart Garment Chain: AI-Based Supply Chain Management System
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionizing garment industry operations through intelligent automation, 
            reducing costs effectively with cutting-edge artificial intelligence
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={() => onScrollToSection('about')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Research
          </button>
          <button 
            onClick={handleDownloadPaper}
            className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400/10 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 justify-center"
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

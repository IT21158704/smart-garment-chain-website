// src/components/Navigation.tsx
import React from 'react';
import { Brain } from 'lucide-react';
import { navItems } from '../data/data';

interface NavigationProps {
    activeSection: string;
    isScrolled: boolean;
    onSectionClick: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, isScrolled, onSectionClick }) => {
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <Brain className="w-8 h-8 text-blue-400" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Smart Garment Chain
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => onSectionClick(item)}
                                className={`capitalize hover:text-blue-400 transition-colors ${activeSection === item ? 'text-blue-400' : 'text-gray-300'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
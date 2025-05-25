// src/components/Footer.tsx
import React from 'react';
import { Brain } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Brain className="w-6 h-6 text-blue-400" />
          <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Supply Chain Management System
          </span>
        </div>
        <p className="text-gray-400">
          © 2024 Sri Lanka Institute of Information Technology. Research Portfolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
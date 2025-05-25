// src/components/AboutSection.tsx
import React from 'react';
import { benefits } from '../data/data';
import { BarChart3, Zap, Target, Award } from 'lucide-react';

const iconMap = {
  BarChart3,
  Zap,
  Target,
  Award
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Our Research
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our research focuses on developing an intelligent supply chain management system 
            specifically designed for the garment industry, leveraging artificial intelligence 
            to optimize operations and significantly reduce operational costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Research Objective</h3>
              <p className="text-gray-300 leading-relaxed">
                To create an AI-powered solution that addresses the complex challenges in garment 
                supply chain management, from production scheduling to supplier evaluation, 
                ensuring maximum efficiency and cost-effectiveness.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Innovation Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Our system integrates machine learning algorithms with real-time data analysis 
                to provide actionable insights, predictive capabilities, and automated optimization 
                across the entire supply chain ecosystem.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl border border-gray-600 text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-400 mb-3 flex justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
// src/components/ComponentsSection.tsx
import React from 'react';
import { systemComponents } from '../data/data';
import { Cog, Truck, Package, UserCheck } from 'lucide-react';

const iconMap = {
  Cog,
  Truck,
  Package,
  UserCheck
};

const ComponentsSection: React.FC = () => {
  return (
    <section id="components" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            System Components
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four core AI-powered modules working in harmony to optimize your supply chain operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {systemComponents.map((component, index) => {
            const IconComponent = iconMap[component.icon as keyof typeof iconMap];
            return (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-r ${component.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${component.color} mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {component.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {component.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComponentsSection;
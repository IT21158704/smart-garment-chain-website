// src/components/TeamSection.tsx
import React from 'react';
import { teamMembers } from '../data/data';
import { Mail } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Research Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated researchers from Sri Lanka Institute of Information Technology, Malabe
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group">
              <div className="text-center">
                <div className="w-20 h-20 p-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img src={member.image} className='w-full rounded-full'/>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {member.department}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Sri Lanka Institute of Information Technology, Malabe
                </p>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
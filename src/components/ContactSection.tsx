// src/components/ContactSection.tsx
import React from 'react';
import { teamMembers } from '../data/data';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Interested in our research or looking to collaborate? We'd love to hear from you.
        </p>
        
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Research Institution</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white">Sri Lanka Institute of Information Technology</h4>
                  <p className="text-gray-400">Department of Computer Science and Software Engineering</p>
                  <p className="text-gray-400">Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Quick Contact</h3>
              <div className="space-y-3">
                {teamMembers.map((member, index) => (
                  <a 
                    key={index}
                    href={`mailto:${member.email}`}
                    className="block text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {member.email}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
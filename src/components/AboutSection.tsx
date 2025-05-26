// src/components/AboutSection.tsx
import React from 'react';
import { benefits } from '../data/data';
import { BarChart3, Zap, Target, Award, BookOpen, Search, AlertTriangle, Crosshair, TrendingUp, Shield } from 'lucide-react';

const iconMap = {
  BarChart3,
  Zap,
  Target,
  Award
};

const AboutSection: React.FC = () => {
  return (
    <section id="domain" className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            About Our Research
          </h2>
          <p className="max-w-4xl mx-auto text-xl leading-relaxed text-gray-300">
            Our research focuses on developing an intelligent supply chain management system 
            specifically designed for the garment industry, leveraging artificial intelligence 
            to optimize operations and significantly reduce operational costs.
          </p>
        </div>

        {/* Literature Survey */}
        <div className="mb-16">
          <div className="relative overflow-hidden transition-all duration-300 border border-gray-600 group rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 ">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:opacity-10"></div>
            <div className="relative p-8">
              <div className="inline-flex p-4 mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-white transition-colors group-hover:text-blue-400">Literature Survey</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="relative overflow-hidden transition-all duration-300 border border-gray-600 group/card rounded-xl bg-gradient-to-br from-blue-900/30 to-indigo-900/30 hover:border-blue-400 hover:scale-105">
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover/card:opacity-5"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-3 font-semibold text-blue-300 transition-colors group-hover/card:text-blue-200">Production Scheduling</h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Traditional methods like Job Shop Scheduling and MILP face computational limitations. 
                      AI-based approaches using Random Forest show superior performance in handling complex datasets.
                    </p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden transition-all duration-300 border border-gray-600 group/card rounded-xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 hover:border-green-400 hover:scale-105">
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-400 to-emerald-400 group-hover/card:opacity-5"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-3 font-semibold text-green-300 transition-colors group-hover/card:text-green-200">Logistics Optimization</h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      AI systems analyze destinations, cargo volume, vehicle capacity, and weather conditions 
                      to optimize routes and reduce fuel consumption by up to 30%.
                    </p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden transition-all duration-300 border border-gray-600 group/card rounded-xl bg-gradient-to-br from-purple-900/30 to-violet-900/30 hover:border-purple-400 hover:scale-105">
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-purple-400 to-violet-400 group-hover/card:opacity-5"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-3 font-semibold text-purple-300 transition-colors group-hover/card:text-purple-200">Packing Optimization</h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Bin Packing Algorithms and Genetic Algorithms are employed, with AR-assisted systems 
                      providing real-time visual guidance for improved accuracy.
                    </p>
                  </div>
                </div>
                
                <div className="relative overflow-hidden transition-all duration-300 border border-gray-600 group/card rounded-xl bg-gradient-to-br from-orange-900/30 to-amber-900/30 hover:border-orange-400 hover:scale-105">
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-orange-400 to-amber-400 group-hover/card:opacity-5"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-3 font-semibold text-orange-300 transition-colors group-hover/card:text-orange-200">Supplier Selection</h4>
                    <p className="text-sm leading-relaxed text-gray-300">
                      Machine learning models improve supplier evaluation through predictive analytics 
                      and multi-criteria decision-making approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Gap */}
        <div className="mb-16">
          <div className="relative overflow-hidden transition-all duration-300 border border-gray-600 group rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:scale-[1.02]">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-red-500 to-pink-500 group-hover:opacity-10"></div>
            <div className="relative p-8">
              <div className="inline-flex p-4 mb-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold text-white transition-colors group-hover:text-red-400">Research Gap</h3>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="p-6 border border-red-600/30 bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-xl">
                  <h4 className="flex items-center mb-4 font-semibold text-red-300">
                    <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                    Existing System Limitations
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start transition-colors hover:text-red-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-400 rounded-full"></span>
                      Traditional scheduling methods suffer from human errors and inaccurate predictions
                    </li>
                    <li className="flex items-start transition-colors hover:text-red-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-400 rounded-full"></span>
                      Packing algorithms assume rigid containers, inefficient for flexible garment materials
                    </li>
                    <li className="flex items-start transition-colors hover:text-red-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-400 rounded-full"></span>
                      Limited integration between different supply chain components
                    </li>
                    <li className="flex items-start transition-colors hover:text-red-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-red-400 rounded-full"></span>
                      Lack of real-time adaptability to dynamic market demands
                    </li>
                  </ul>
                </div>
                <div className="p-6 border border-green-600/30 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl">
                  <h4 className="flex items-center mb-4 font-semibold text-green-300">
                    <Target className="w-5 h-5 mr-2 text-green-400" />
                    Our Solution Approach
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start transition-colors hover:text-green-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-400 rounded-full"></span>
                      Integrated AI-driven system combining all four optimization areas
                    </li>
                    <li className="flex items-start transition-colors hover:text-green-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-400 rounded-full"></span>
                      Real-time data processing with explainable AI (XAI) for transparency
                    </li>
                    <li className="flex items-start transition-colors hover:text-green-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-400 rounded-full"></span>
                      Flexible algorithms adapted specifically for garment industry needs
                    </li>
                    <li className="flex items-start transition-colors hover:text-green-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-400 rounded-full"></span>
                      Dynamic adaptation to market changes and demand fluctuations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Problem and Objectives */}
        <div className="grid gap-8 mb-16 lg:grid-cols-2">
          <div className="relative overflow-hidden transition-all duration-300 border border-gray-600 group rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:scale-105">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:opacity-10"></div>
            <div className="relative p-8">
              <div className="inline-flex p-4 mb-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-white transition-colors group-hover:text-amber-400">Research Problem</h3>
              <div className="space-y-4">
                <p className="leading-relaxed text-gray-300">
                  The garment industry faces significant challenges in supply chain management, including:
                </p>
                <div className="p-4 border rounded-lg border-amber-600/30 bg-gradient-to-br from-amber-900/20 to-orange-900/20">
                  <ul className="space-y-2 text-gray-300">
                    <li className="transition-colors hover:text-amber-200">• Poor production scheduling leading to inefficiencies</li>
                    <li className="transition-colors hover:text-amber-200">• High transportation costs due to suboptimal routing</li>
                    <li className="transition-colors hover:text-amber-200">• Ineffective packing strategies increasing shipping expenses</li>
                    <li className="transition-colors hover:text-amber-200">• Unreliable supplier selection impacting quality and costs</li>
                  </ul>
                </div>
                <p className="leading-relaxed text-gray-300">
                  These challenges result in increased expenses, delays, and disruptions that significantly 
                  impact profitability and customer satisfaction in the highly competitive garment industry.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden transition-all duration-300 border border-gray-600 group rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 hover:scale-105">
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-green-500 to-emerald-500 group-hover:opacity-10"></div>
            <div className="relative p-8">
              <div className="inline-flex p-4 mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Crosshair className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-white transition-colors group-hover:text-green-400">Research Objectives</h3>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg border-green-600/30 bg-gradient-to-br from-green-900/20 to-emerald-900/20">
                  <h4 className="mb-2 font-semibold text-green-300">Primary Objective</h4>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Develop ChainMaster, an integrated AI-powered supply chain management system 
                    for the garment industry.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-300">Specific Objectives:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start transition-colors hover:text-green-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-400 rounded-full"></span>
                      Optimize production scheduling using Random Forest algorithms
                    </li>
                    <li className="flex items-start transition-colors hover:text-green-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-400 rounded-full"></span>
                      Minimize transportation costs through AI-driven route optimization
                    </li>
                    <li className="flex items-start transition-colors hover:text-green-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-400 rounded-full"></span>
                      Maximize container space utilization with advanced packing algorithms
                    </li>
                    <li className="flex items-start transition-colors hover:text-green-200">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-green-400 rounded-full"></span>
                      Enhance supplier selection through predictive analytics
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Original Research Content and Benefits */}
        <div className="grid items-center gap-12 md:grid-cols-1">
           
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500', 
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500'
              ];
              return (
                <div key={index} className="relative overflow-hidden transition-all duration-300 border border-gray-600 group rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 hover:border-gray-500 hover:scale-105">
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors[index % colors.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative p-6 text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${colors[index % colors.length]} mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-400">{benefit.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-400">{benefit.description}</p>
                  </div>
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
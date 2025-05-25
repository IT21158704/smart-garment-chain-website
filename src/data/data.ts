import { BarChart3, Zap, Target, Award, Cog, Truck, Package, UserCheck, FlaskConical, TrendingUp, Settings, Code } from 'lucide-react';

import member1 from '../assets/team/nadun.png'

// src/data/data.ts
export interface TeamMember {
    name: string;
    email: string;
    department: string;
    image?: string;
  }
  
  export interface SystemComponent {
    title: string;
    description: string;
    icon: string;
    color: string;
  }
  
  export interface Benefit {
    icon: string;
    title: string;
    description: string;
  }

  interface MethodologyStep {
    title: string;
    description: string;
    icon: string;
    color: string;
    technologies: string[];
  }

  interface TimelineItem {
    title: string;
    date: string;
    description: string;
    icon: string;
    color: string;
  }
  
  interface DownloadItem {
    title: string;
    type: string;
    description?: string;
  }
  
  
  export const teamMembers: TeamMember[] = [
    {
      name: "Weerasinghe W.M.S.R.M",
      email: "sauniweerasinghe@gmail.com",
      department: "Computer Science and Software Engineering",

    },
    {
      name: "Dilshan K.T.D.N",
      email: "nadun.dilshan.733@gmail.com",
      department: "Computer Science and Software Engineering",
      image: member1
    },
    {
      name: "Widanapathirana Y.R",
      email: "yasitha.renuk@gmail.com",
      department: "Computer Science and Software Engineering"
    },
    {
      name: "Mahagedara D.N",
      email: "nimsaramahagedara@gmail.com",
      department: "Computer Science and Software Engineering"
    }
  ];
  
  export const systemComponents: SystemComponent[] = [
    {
      title: "Production Scheduling Optimization",
      description: "AI-based models analyze real-time production constraints, such as machine availability, workforce shifts, and order deadlines, to enhance scheduling efficiency.",
      icon: "Cog",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Logistics and Transportation Optimization",
      description: "Machine learning models predict potential transportation delays and optimize routing to reduce delivery times and costs.",
      icon: "Truck",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Packing Optimization for Shipping",
      description: "Advanced bin packing algorithms maximize space utilization in shipping containers, reducing transportation expenses.",
      icon: "Package",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Supplier Selection and Evaluation",
      description: "AI-driven supplier analysis ensures optimal procurement decisions by evaluating historical performance, quality metrics, and cost-effectiveness.",
      icon: "UserCheck",
      color: "from-orange-500 to-red-500"
    }
  ];
  
  export const benefits: Benefit[] = [
    { 
      icon: "BarChart3", 
      title: "Cost Reduction", 
      description: "Significant reduction in operational costs through optimized processes" 
    },
    { 
      icon: "Zap", 
      title: "Efficiency Boost", 
      description: "Enhanced operational efficiency across all supply chain stages" 
    },
    { 
      icon: "Target", 
      title: "Precision Planning", 
      description: "Data-driven decision making for better resource allocation" 
    },
    { 
      icon: "Award", 
      title: "Quality Assurance", 
      description: "Improved quality control and supplier performance monitoring" 
    }
  ];

  export const methodologySteps: MethodologyStep[] = [
    {
      title: "Production Scheduling",
      description: "Random Forest-based machine learning model trained on historical production data for optimal scheduling efficiency.",
      icon: "FlaskConical",
      color: "from-blue-500 to-indigo-600",
      technologies: ["Random Forest Regressor", "Python Flask", "MongoDB"]
    },
    {
      title: "Logistics Optimization",
      description: "AI-driven logistics using reinforcement learning and real-time data analysis for optimal route planning and vehicle selection.",
      icon: "TrendingUp",
      color: "from-green-500 to-teal-600",
      technologies: ["Reinforcement Learning", "React Native", "Node.js", "Google Maps API"]
    },
    {
      title: "Packing Optimization",
      description: "3D bin packing algorithms with AI-based reinforcement learning for maximum space utilization and cost reduction.",
      icon: "Settings",
      color: "from-purple-500 to-pink-600",
      technologies: ["Genetic Algorithm", "TensorFlow/PyTorch", "React Native", "3D Visualization"]
    },
    {
      title: "Supplier Evaluation",
      description: "Multi-Criteria Decision Analysis (MCDA) with Random Forest for data-driven supplier ranking and selection.",
      icon: "Code",
      color: "from-orange-500 to-red-600",
      technologies: ["MCDA", "Random Forest", "Quality Scoring", "Performance Metrics"]
    }
  ];
  
  export const timelineItems: TimelineItem[] = [
    {
      title: "Project Charter & Team Formation",
      date: "July 2024",
      description: "Project registration, team formation, and initial planning for the AI-based supply chain management system development.",
      icon: "Users",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Project Proposal & Literature Review",
      date: "August 2024", 
      description: "Comprehensive project proposal development, literature survey completion, and technology stack finalization for all four modules.",
      icon: "FileText",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Collection & Model Development",
      date: "September 2024",
      description: "Supply chain data compilation, machine learning model training for production scheduling, logistics, and supplier evaluation systems.",
      icon: "FlaskConical",
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "System Integration & Backend Development",
      date: "October 2024",
      description: "Cloud infrastructure setup, microservices architecture implementation, and API development for seamless integration.",
      icon: "Cog",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Progress Presentation I",
      date: "November 2024",
      description: "Responsive web interface development, mobile optimization, and user experience testing across all modules.",
      icon: "TrendingUp",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Progress Presentation II", 
      date: "March 2025",
      description: "Comprehensive system testing, performance optimization, user feedback collection, and bug fixes.",
      icon: "Settings",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Final Viva and Presentation",
      date: "May 2025",
      description: "Cloud deployment, final documentation completion, research paper submission, and project presentation preparation.",
      icon: "Award",
      color: "from-emerald-500 to-teal-500"
    }
  ];
  
  export const downloadItems: DownloadItem[] = [
    {
      title: "Project Charter",
      type: "Group",
      description: "Initial project charter and team formation documentation"
    },
    {
      title: "Project Proposal",
      type: "Individual", 
      description: "Comprehensive project proposal with technical specifications"
    },
    {
      title: "Proposal Presentation",
      type: "Group",
      description: "Project proposal presentation slides and materials"
    },
    {
      title: "Progress Presentation I",
      type: "Group",
      description: "First progress presentation documenting initial development"
    },
    {
      title: "Status Document I",
      type: "Group",
      description: "First status report covering project milestones"
    },
    {
      title: "Status Document II",
      type: "Individual",
      description: "Individual status report on module development"
    },
    {
      title: "Progress Presentation II",
      type: "Group", 
      description: "Second progress presentation showing system integration"
    },
    {
      title: "Final Group Report",
      type: "Group",
      description: "Complete final report documenting the entire project"
    }
  ];
  
  export const navItems = ['home', 'about', 'methodology', 'components', 'timeline', 'downloads', 'team', 'contact'];

  export const iconMap = {
    BarChart3, Zap, Target, Award, Cog, Truck, Package, UserCheck, 
    FlaskConical, TrendingUp, Settings, Code
  };
  
  
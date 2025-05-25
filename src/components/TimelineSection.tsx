import { iconMap, timelineItems } from "../data/data";

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Project Timeline
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Follow our research journey from initial planning to final deployment, 
            tracking key milestones and deliverables throughout the development process
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              
              // Add this check to prevent the error
              if (!IconComponent) {
                console.warn(`Icon "${item.icon}" not found in iconMap for item:`, item);
                return null; // Skip this item or provide a fallback
              }
              
              return (
                <div key={index} className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105 group">
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-blue-400 font-medium">{item.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="relative flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-gray-900 z-10`}></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
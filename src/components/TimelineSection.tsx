import { iconMap, timelineItems } from "../data/data";

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Project Timeline
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-300 sm:text-xl">
            Follow our research journey from initial planning to final deployment, 
            tracking key milestones and deliverables throughout the development process
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - positioned differently on mobile vs desktop */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-0.5 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>
          
          <div className="space-y-8 md:space-y-12">
            {timelineItems.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              
              // Add this check to prevent the error
              if (!IconComponent) {
                console.warn(`Icon "${item.icon}" not found in iconMap for item:`, item);
                return null; // Skip this item or provide a fallback
              }
              
              return (
                <div key={index} className="relative">
                  {/* Mobile Layout (always left-aligned) */}
                  <div className="flex items-start md:hidden">
                    {/* Timeline dot */}
                    <div className="relative flex items-center justify-center mt-2 mr-4">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} border-4 border-gray-900 z-10`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="p-4 transition-all duration-300 border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl sm:p-6 hover:border-gray-500 hover:scale-105 group">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-r ${item.color} flex-shrink-0`}>
                            <IconComponent className="w-5 h-5 text-white sm:w-6 sm:h-6" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-bold text-white transition-colors sm:text-xl group-hover:text-blue-400">
                              {item.title}
                            </h3>
                            <p className="text-sm font-medium text-blue-400">{item.date}</p>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout (alternating sides) */}
                  <div className={`hidden md:flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="p-6 transition-all duration-300 border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl hover:border-gray-500 hover:scale-105 group">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} ${isEven ? 'order-2' : 'order-1'}`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className={isEven ? 'order-1' : 'order-2'}>
                            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                              {item.title}
                            </h3>
                            <p className="text-sm font-medium text-blue-400">{item.date}</p>
                          </div>
                        </div>
                        <p className="leading-relaxed text-gray-300">
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
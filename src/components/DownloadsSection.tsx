import { Download, FileText, Mail } from "lucide-react";
import { downloadItems, teamMembers } from "../data/data";

const DownloadsSection = () => {
    const handleDownload = (docTitle: string) => {
      // In a real application, this would trigger actual file downloads
      alert(`${docTitle} download would be initiated here. Please contact the research team for access to this document.`);
    };
  
    return (
      <section id="downloads" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project Documents
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access comprehensive documentation, reports, and presentations from our ChainMaster research project
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadItems.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 border border-gray-600 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <FileText className="w-6 h-6 text-blue-400" />
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.type === 'Group' 
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                          : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-gray-400 mb-4">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => handleDownload(item.title)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center hidden">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Need Access to Documents?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                For access to research documents and detailed technical reports, please contact our research team. 
                We're happy to share our findings with fellow researchers and industry professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {teamMembers.slice(0, 2).map((member, index) => (
                  <a 
                    key={index}
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {member.email}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default DownloadsSection;
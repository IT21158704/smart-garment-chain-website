import { Download, FileText, Mail } from "lucide-react";
import { downloadItems, teamMembers } from "../data/data";

const DownloadsSection = () => {
  const handleDownload = (item: any) => {
    try {
      // Create a link element
      const link = document.createElement('a');
      link.href = item.fileUrl;
      
      // Extract filename from the path or use title as fallback
      const fileName = item.fileUrl.split('/').pop() || item.title.replace(/\s+/g, '_');
      link.download = fileName;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log(`Download initiated for: ${item.title}`);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: Open in new tab if direct download fails
      try {
        window.open(item.fileUrl, '_blank');
      } catch (fallbackError) {
        console.error('Fallback download also failed:', fallbackError);
        alert(`Unable to download ${item.title}. Please contact the research team for access to this document.`);
      }
    }
  };

  return (
    <section id="documents" className="py-20 bg-gray-800/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Project Documents
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            Access comprehensive documentation, reports, and presentations from our ChainMaster research project
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {downloadItems.map((item, index) => (
            <div key={index} className="p-6 transition-all duration-300 border border-gray-600 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl hover:border-blue-400/50 hover:scale-105 group">
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
                  <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-blue-400">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mb-4 text-sm text-gray-400">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
              
              <button
                onClick={() => handleDownload(item)}
                className="flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>

        <div className="hidden mt-16 text-center">
          <div className="p-8 border border-gray-600 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-blue-400">Need Access to Documents?</h3>
            <p className="max-w-2xl mx-auto mb-6 text-gray-300">
              For access to research documents and detailed technical reports, please contact our research team. 
              We're happy to share our findings with fellow researchers and industry professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {teamMembers.slice(0, 2).map((member, index) => (
                <a 
                  key={index}
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 transition-colors border border-blue-400 rounded-lg hover:bg-blue-400/10"
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
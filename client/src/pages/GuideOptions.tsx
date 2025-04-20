import { useState } from "react";
import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";
import { guideOptions } from "@/data/mockData";

const GuideOptions = () => {
  const [, navigate] = useLocation();
  const [selectedOptions, setSelectedOptions] = useState({
    show: "All Channels",
    date: "Today",
    time: "Now"
  });

  const handleBackToGuide = () => {
    navigate("/guide");
  };

  const handleOptionChange = (type: string, value: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [type.toLowerCase()]: value
    }));
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <h1 className="text-3xl font-semibold mt-6 mb-4">Guide Options</h1>
      
      <div className="bg-opacity-20 bg-gray-900 rounded-lg p-6 mb-6">
        <p className="text-lg mb-6">
          Options to customize the programs that are displayed in the channel guide.
        </p>
        
        {/* Channel Filters */}
        <div className="mb-8">
          <h2 className="text-xl mb-4">Channel Filters</h2>
          <div className="bg-white rounded-full overflow-hidden">
            <button 
              className="flex items-center justify-between w-full py-3 px-6 text-[#001133]"
              onClick={() => navigate("/guide")}
            >
              <span>Show</span>
              <div className="flex items-center">
                <span>{selectedOptions.show}</span>
                <ChevronRight className="ml-2 w-5 h-5" />
              </div>
            </button>
          </div>
        </div>

        {/* Jump to */}
        <div>
          <h2 className="text-xl mb-4">Jump to</h2>
          
          <div className="space-y-4">
            <div className="bg-transparent border border-gray-600 rounded-full overflow-hidden">
              <button 
                className="flex items-center justify-between w-full py-3 px-6"
                onClick={() => navigate("/guide")}
              >
                <span>Date</span>
                <div className="flex items-center">
                  <span>{selectedOptions.date}</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </button>
            </div>
            
            <div className="bg-transparent border border-gray-600 rounded-full overflow-hidden">
              <button 
                className="flex items-center justify-between w-full py-3 px-6"
                onClick={() => navigate("/guide")}
              >
                <span>Time</span>
                <div className="flex items-center">
                  <span>{selectedOptions.time}</span>
                  <ChevronRight className="ml-2 w-5 h-5" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideOptions;
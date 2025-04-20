import { useState } from "react";
import { useLocation } from "wouter";
import { useTime } from "@/hooks/useTime";
import { guideChannels, guidePrograms } from "@/data/mockData";
import { Heart, Filter, Calendar, Clock, ChevronRight, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatTimeRange } from "@/lib/utils";

const Guide = () => {
  const [, navigate] = useLocation();
  const currentTime = useTime();
  const [hoveredChannel, setHoveredChannel] = useState<number | null>(null);
  
  // Create time slots for the guide header
  const timeSlots = ["NOW", "12:30 PM", "1:00 PM", "1:30 PM"];

  // Filter programs by channel
  const getProgramsByChannel = (channelNumber: number) => {
    return guidePrograms.filter(program => program.channel === channelNumber);
  };

  const handleNavigateToGuideOptions = () => {
    navigate("/guide-options");
  };

  const handleNavigateToChannel = (channelId: number) => {
    navigate(`/channel/${channelId}`);
  };

  return (
    <main className="max-w-full mx-auto pb-8 overflow-x-hidden bg-blue-950">
      <div className="sticky top-16 bg-gradient-to-r from-blue-900 to-blue-800 shadow-md z-10">
        {/* Guide Header with improved styling */}
        <div className="px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-transparent border-blue-400 hover:bg-blue-800"
              onClick={handleNavigateToGuideOptions}
            >
              <Filter className="mr-1 h-4 w-4" />
              <span>All Channels</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="bg-transparent border-blue-400 hover:bg-blue-800"
            >
              <Calendar className="mr-1 h-4 w-4" />
              <span>Today</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="bg-transparent border-blue-400 hover:bg-blue-800"
            >
              <Clock className="mr-1 h-4 w-4" />
              <span>Now</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          
          <div className="text-sm font-medium text-white">{currentTime}</div>
        </div>
        
        {/* Time slots header */}
        <div className="flex border-b border-blue-700 text-blue-200 font-medium px-4 pb-2">
          <div className="w-1/5 pl-2">Channel</div>
          <div className="w-4/5 grid grid-cols-4">
            {timeSlots.map((time, index) => (
              <div key={index} className="px-2">{time}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Channel listings */}
      <div className="px-4">
        {guideChannels.map((channel) => (
          <div 
            key={channel.id} 
            className={`flex border-b border-blue-900 py-3 transition-colors ${
              hoveredChannel === channel.id ? 'bg-blue-800' : 'hover:bg-blue-900'
            }`}
            onClick={() => handleNavigateToChannel(channel.id)}
            onMouseEnter={() => setHoveredChannel(channel.id)}
            onMouseLeave={() => setHoveredChannel(null)}
          >
            {/* Channel info section */}
            <div className="w-1/5 flex items-center space-x-2 pr-4">
              <Heart 
                className={`w-5 h-5 ${channel.favorite ? 'text-blue-400' : 'text-gray-600'}`} 
                fill={channel.favorite ? "#3b82f6" : "none"}
              />
              <div className="text-sm font-medium w-7 text-center">{channel.number}</div>
              <img 
                src={channel.logo} 
                alt={channel.name} 
                className="h-8 w-auto max-w-[80px] object-contain" 
              />
            </div>
            
            {/* Programs section */}
            <div className="w-4/5 grid grid-cols-4 gap-1">
              {getProgramsByChannel(channel.number || 0).map((program) => (
                <div 
                  key={program.id} 
                  className={`px-2 py-1 rounded bg-blue-900 bg-opacity-50 relative ${
                    program.isNew ? 'border-l-4 border-blue-500' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className={`font-medium text-sm ${program.isNew ? 'text-blue-300' : 'text-white'}`}>
                        {program.title}
                      </div>
                      <div className="text-xs text-gray-400">
                        {formatTimeRange(program.startTime, program.endTime)}
                      </div>
                    </div>
                    {program.description && (
                      <Info className="w-4 h-4 text-gray-400 mt-1 cursor-pointer" />
                    )}
                  </div>
                  
                  {program.isNew && (
                    <div className="absolute top-1 right-1">
                      <span className="inline-block bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-sm">
                        NEW
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Guide;
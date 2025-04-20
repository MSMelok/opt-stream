import { useLocation } from "wouter";
import { useTime } from "@/hooks/useTime";
import { guideChannels, guidePrograms } from "@/data/mockData";
import { Heart } from "lucide-react";

const Guide = () => {
  const [, navigate] = useLocation();
  const currentTime = useTime();

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
    <main className="max-w-full mx-auto pb-8 overflow-x-hidden">
      <div className="px-4 sm:px-6 lg:px-8 pt-2 pb-4 relative">
        <div className="flex items-center justify-between mb-2 text-sm">
          <p>Showing All Channels. PRESS and HOLD ⌘ to view Guide Options</p>
          <p>{currentTime}</p>
        </div>

        <div className="flex font-medium mb-2">
          <div className="w-1/4 px-4">TODAY</div>
          <div className="flex-1 grid grid-cols-3">
            <div className="px-4">NOW</div>
            <div className="px-4">12:00 PM</div>
            <div className="px-4">12:30 PM</div>
            <div className="px-4">1:00 PM</div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-2">
          {guideChannels.map((channel) => (
            <div 
              key={channel.id} 
              className="flex border-b border-gray-800 py-2 hover:bg-gray-800 cursor-pointer"
              onClick={() => handleNavigateToChannel(channel.id)}
            >
              <div className="w-1/4 flex items-center">
                <Heart 
                  className={`w-5 h-5 mr-2 ${channel.favorite ? 'text-white' : 'text-gray-600'}`} 
                  fill={channel.favorite ? "white" : "none"}
                />
                <span className="text-sm w-8">{channel.number}</span>
                <img 
                  src={channel.logo} 
                  alt={channel.name} 
                  className="h-6 w-auto max-w-[60px] object-contain mx-1" 
                />
                {getProgramsByChannel(channel.number || 0)[0]?.isNew && (
                  <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                    New
                  </span>
                )}
              </div>
              
              <div className="flex-1 grid grid-cols-3 items-center">
                {getProgramsByChannel(channel.number || 0).map((program) => (
                  <div 
                    key={program.id} 
                    className={`px-2 py-1 ${program.isNew ? 'font-medium' : ''}`}
                  >
                    {program.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Guide;
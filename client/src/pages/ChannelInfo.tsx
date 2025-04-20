import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { guideChannels, guidePrograms } from "@/data/mockData";
import { Heart, Info, RotateCcw, Video } from "lucide-react";

const ChannelInfo = () => {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const channelId = parseInt(params.id, 10);
  
  const channel = guideChannels.find(ch => ch.id === channelId) || guideChannels[0];
  const program = guidePrograms.find(prog => prog.channel === channel.number) || {
    title: "CNN Newsroom With Wolf Blitzer",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    isNew: true,
    channel: channel.number || 0
  };

  const handleBackToGuide = () => {
    navigate("/guide");
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-400">
          Showing All Channels. PRESS and HOLD ⌘ to view Guide Options
        </p>
        <p className="text-sm">11:38 AM</p>
      </div>
      
      <div className="mt-2 flex space-x-4">
        <div className="w-1/4 text-center">
          <p className="font-medium">TODAY</p>
          <p>NOW</p>
        </div>
        <div className="flex-1 flex justify-between">
          <p className="text-center">12:00 PM</p>
          <p className="text-center">12:30 PM</p>
          <p className="text-center">1:00 PM</p>
        </div>
      </div>
      
      <div className="mt-4 flex">
        <div className="w-1/6 flex items-center">
          <Heart 
            className={`w-5 h-5 mr-2 ${channel.favorite ? 'text-white' : 'text-gray-600'}`} 
            fill={channel.favorite ? "white" : "none"}
          />
          <span className="mr-2">{channel.number}</span>
          <img 
            src={channel.logo} 
            alt={channel.name} 
            className="h-8 w-auto" 
          />
        </div>
        
        <div className="flex-1 flex">
          <div className="bg-gray-700 p-3 rounded-l-md flex-grow">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2">
              New
            </span>
            <span>{program.title}</span>
          </div>
          <div className="bg-gray-800 p-3 rounded-r-md flex-grow flex">
            <span className="flex-1">{program.title} With Dana Bash</span>
            <span className="flex-1 text-center">CNN News Central</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-red-900 to-red-700 p-6 rounded-lg">
        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-2">CNN Newsroom With Wolf Blitzer</h1>
          <h2 className="text-xl font-medium mb-4">Don't Cross the Caro-line</h2>
          
          <div className="flex items-center mb-4">
            <div className="flex space-x-2 items-center border-r border-gray-300 pr-4 mr-4">
              <p className="text-sm">11:00 AM - 12:00 PM</p>
            </div>
            <div className="flex space-x-2 items-center">
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-1">NR</span>
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-1">HD</span>
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-1">CC</span>
              <span className="text-sm ml-2">2024 | Interview, News | 1h</span>
            </div>
          </div>
          
          <p className="text-sm mb-8">
            Wolf Blitzer reports on the top news stories of the day.
          </p>
          
          <div className="flex space-x-4">
            <Button className="bg-white text-blue-900 hover:bg-gray-200 font-semibold rounded-full px-6">
              Watch Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10 rounded-full px-6">
              <Info className="w-4 h-4 mr-2" />
              Info
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10 rounded-full px-6">
              <RotateCcw className="w-4 h-4 mr-2" />
              Restart
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10 rounded-full px-6">
              <Video className="w-4 h-4 mr-2" />
              Record
            </Button>
          </div>
        </div>
        
        <div className="col-span-1">
          <img 
            src="https://cdn.cnn.com/cnnnext/dam/assets/181114113311-wolf-blitzer-studio-large-169.jpg" 
            alt="Wolf Blitzer" 
            className="w-full h-auto rounded-lg" 
          />
        </div>
      </div>
    </main>
  );
};

export default ChannelInfo;
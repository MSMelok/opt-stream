import { ScrollArea } from "@/components/ui/scroll-area";
import { dvrItems } from "@/data/mockData";
import { Folder, CircleEllipsis } from "lucide-react";

const DVR = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-3xl font-semibold">DVR</h1>
        <div className="flex items-center space-x-2">
          <span className="text-lg mr-2">1/2</span>
        </div>
      </div>
      
      <div className="mt-6 flex">
        <div className="w-1/4 pr-6 border-r border-gray-800">
          <div className="mb-4">
            <div className="h-1.5 bg-gray-800 rounded-full w-full overflow-hidden">
              <div className="bg-red-600 h-full rounded-full" style={{ width: '83%' }}></div>
            </div>
            <p className="mt-1 text-sm text-gray-400">83% Full</p>
          </div>
          
          <ul className="space-y-4">
            <li className="text-white font-medium">All Recordings</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">Series Manager</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">Scheduled List</li>
            <li className="text-gray-400 hover:text-white cursor-pointer">Clean-Up My DVR</li>
          </ul>
        </div>
        
        <div className="w-3/4 pl-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {dvrItems.map((item) => (
              <div 
                key={item.id}
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:ring-1 hover:ring-blue-500 transition"
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-36 object-cover"
                  />
                  {item.isFolder && (
                    <div className="absolute top-2 right-2 bg-black bg-opacity-70 p-1 rounded">
                      <Folder className="h-5 w-5" />
                    </div>
                  )}
                  {item.isRecording && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-sm font-medium">
                      RECORDING
                    </div>
                  )}
                </div>
                <div className="p-3 flex justify-between items-center">
                  <h3 className="font-medium">{item.title}</h3>
                  <CircleEllipsis className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DVR;
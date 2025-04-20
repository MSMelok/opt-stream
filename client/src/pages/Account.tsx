import { accountInfo } from "@/data/mockData";
import { User, Wifi, Video } from "lucide-react";

const Account = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <h1 className="text-3xl font-semibold mt-6 mb-8">My Account</h1>
      
      <div className="space-y-4">
        <button className="w-full py-4 px-6 bg-white rounded-full flex items-center justify-between text-[#001133]">
          <span className="font-semibold text-lg">Account Details</span>
        </button>
        
        <button className="w-full py-4 px-6 bg-transparent border border-gray-600 rounded-full flex items-center justify-between text-white hover:bg-white hover:bg-opacity-10 transition">
          <span className="font-semibold text-lg">Offers and Upgrades</span>
        </button>
      </div>
      
      <div className="mt-12 mb-6 flex items-center">
        <div className="bg-gray-700 rounded-full h-20 w-20 flex items-center justify-center">
          <User size={36} />
        </div>
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-gray-300">Optimum ID</h2>
          <p className="text-xl text-white">{accountInfo.id}</p>
        </div>
      </div>
      
      <div className="mt-8 mb-4">
        <div className="flex items-center mb-6">
          <Video className="h-8 w-8 mr-4" />
          <div>
            <p className="text-gray-300">Video Service</p>
            <p className="text-xl font-semibold">{accountInfo.videoService}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-6">
          <Wifi className="h-8 w-8 mr-4" />
          <div>
            <p className="text-gray-300">Internet Service</p>
            <p className="text-xl font-semibold">{accountInfo.internetService}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
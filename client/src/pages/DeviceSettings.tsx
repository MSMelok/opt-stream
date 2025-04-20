import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import SettingsItem from "@/components/settings/SettingsItem";
import DeviceSettingsPanel from "@/components/settings/DeviceSettingsPanel";
import { generalSettingsItems, deviceSettings } from "@/data/mockData";
import { Search, Wifi, SmartphoneCharging, Moon, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const DeviceSettings = () => {
  const [, navigate] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [batteryPercentage, setBatteryPercentage] = useState(78);
  const [darkMode, setDarkMode] = useState(true);
  
  // Simulate battery draining
  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryPercentage(prev => {
        const newValue = prev - 1;
        return newValue < 15 ? 76 : newValue;
      });
    }, 45000); // Update every 45 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };
  
  const handleBackToSettings = () => {
    navigate("/settings");
  };
  
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Panel - Navigation and Quick Settings */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="bg-gray-900 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Settings</h3>
              <button 
                onClick={handleSearchToggle}
                className="p-2 rounded-full hover:bg-gray-800"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            
            {showSearch && (
              <div className="mb-4">
                <Input 
                  placeholder="Search settings..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>
            )}
            
            {/* Quick Settings */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <div className="flex items-center">
                  <Wifi className="w-5 h-5 mr-3 text-blue-400" />
                  <span>Wi-Fi</span>
                </div>
                <Switch checked={true} />
              </div>
              
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <div className="flex items-center">
                  <Moon className="w-5 h-5 mr-3 text-purple-400" />
                  <span>Dark mode</span>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode}
                />
              </div>
              
              <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
                <div className="flex items-center">
                  <SmartphoneCharging className="w-5 h-5 mr-3 text-green-400" />
                  <div>
                    <span>Battery</span>
                    <div className="text-xs text-gray-400">{batteryPercentage}%</div>
                  </div>
                </div>
                <div className="w-16 h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      batteryPercentage > 50 ? 'bg-green-500' : batteryPercentage > 20 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${batteryPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="space-y-1">
              <button
                className="flex items-center w-full p-2 text-left hover:bg-gray-800 rounded transition"
                onClick={handleBackToSettings}
              >
                <span className="flex-grow">Back to Settings</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              
              {generalSettingsItems.map((item) => (
                <div 
                  key={item.id}
                  className={`flex items-center w-full p-2 text-left rounded transition ${
                    item.title === "Device & Remote Settings" 
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <span className="flex-grow">{item.title}</span>
                  {item.title !== "Device & Remote Settings" && (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Android TV Style Settings */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <DeviceSettingsPanel settings={deviceSettings} />
          
          {/* Device Info Footer */}
          <div className="mt-6 p-4 bg-gray-900 rounded-lg">
            <div className="flex justify-between text-sm text-gray-400">
              <div>Optimum Stream Box</div>
              <div>Android TV 12</div>
              <div>System Version: 3.2.1</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeviceSettings;

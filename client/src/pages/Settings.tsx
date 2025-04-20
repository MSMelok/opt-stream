import { useState } from "react";
import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";
import DeviceSettingsOverlay from "@/components/settings/DeviceSettingsOverlay";
import { settingsItems, generalSettingsItems, SettingItem } from "@/data/mockData";

const Settings = () => {
  const [, navigate] = useLocation();
  const [selectedSetting, setSelectedSetting] = useState<SettingItem | null>(null);
  const [deviceSettingsOpen, setDeviceSettingsOpen] = useState(false);

  const handleSelectSetting = (setting: SettingItem) => {
    setSelectedSetting(setting);
    
    // Navigate to appropriate page based on selected setting
    if (setting.title === "My Account") {
      navigate("/account");
    } else if (setting.title === "Accessibility") {
      navigate("/accessibility-settings");
    } else if (setting.title === "Device & Remote Settings") {
      setDeviceSettingsOpen(true);
    }
  };

  // Function to handle button style for settings items
  const getButtonClass = (title: string) => {
    const baseClass = "group flex items-center justify-between w-full p-4 rounded-full text-left transition";
    
    if (selectedSetting?.title === title && title === "Device & Remote Settings" && deviceSettingsOpen) {
      return `${baseClass} bg-white text-[#001133]`;
    } else if (title === "Default Channel") {
      // Special case for Default Channel with a value
      return `${baseClass} bg-[#0a1e42] text-white hover:bg-opacity-80`;
    }
    
    return `${baseClass} bg-[#0a1e42] text-white hover:bg-opacity-80`;
  };

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-8 bg-[#001133]">
      <div className="py-5">
        <h1 className="text-3xl font-semibold mb-4">Settings</h1>
        <h2 className="text-xl text-gray-400 mb-6">Optimum TV</h2>
        
        {/* Optimum TV settings */}
        <div className="space-y-3 mb-10 max-w-2xl">
          {settingsItems.map((item) => (
            <button 
              key={item.id}
              className={getButtonClass(item.title)}
              onClick={() => handleSelectSetting(item)}
            >
              <span className="font-medium">{item.title}</span>
              <div className="flex items-center">
                {item.type === "value" && (
                  <span className="text-gray-400 mr-3">{item.value}</span>
                )}
                {item.type === "toggle" && (
                  <span className="text-gray-400 mr-3">{item.value}</span>
                )}
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* General section */}
        <h2 className="text-xl text-gray-400 mb-4">General</h2>
        
        {/* General settings with circular buttons styled like the screenshot */}
        <div className="space-y-3 mb-8 max-w-2xl">
          {generalSettingsItems.map((item) => (
            <button 
              key={item.id}
              className={getButtonClass(item.title)}
              onClick={() => handleSelectSetting(item)}
            >
              <span className="font-medium">{item.title}</span>
              <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600">
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Device Settings Overlay - This appears as a panel on the right */}
      <DeviceSettingsOverlay 
        isOpen={deviceSettingsOpen} 
        onClose={() => setDeviceSettingsOpen(false)} 
      />
    </main>
  );
};

export default Settings;

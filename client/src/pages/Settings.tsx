import { useState } from "react";
import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";
import DeviceSettingsOverlay from "@/components/settings/DeviceSettingsOverlay";
import { settingsItems, generalSettingsItems, SettingItem } from "@/data/mockData";

const Settings = () => {
  const [, navigate] = useLocation();
  const [selectedSetting, setSelectedSetting] = useState<SettingItem>(settingsItems[0]);
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

  // Function to handle button style, the Device & Remote Settings button should be highlighted when selected
  const getButtonClass = (buttonName: string) => {
    const baseClass = "flex items-center justify-between w-full p-4 rounded-full text-left";
    
    if (buttonName === "Device & Remote Settings" || 
        (selectedSetting.title === "Device & Remote Settings" && deviceSettingsOpen)) {
      return `${baseClass} bg-white text-[#001133]`;
    }
    
    return `${baseClass} bg-[#0a1e42] hover:bg-opacity-90 text-white`;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">      
      <div className="py-6">
        <h1 className="text-2xl font-semibold mb-8">General</h1>
        
        {/* General settings with updated design - more circular buttons styled like the screenshot */}
        <div className="space-y-4 mb-8 max-w-3xl">
          <button 
            className={getButtonClass("Accessibility")}
            onClick={() => handleSelectSetting(generalSettingsItems.find(item => item.title === "Accessibility")!)}
          >
            <span>Accessibility</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <button 
            className={getButtonClass("Device & Remote Settings")}
            onClick={() => handleSelectSetting(generalSettingsItems.find(item => item.title === "Device & Remote Settings")!)}
          >
            <span>Device & Remote Settings</span>
            <ChevronRight className="w-5 h-5" />
          </button>
          
          <button 
            className={getButtonClass("Help")}
            onClick={() => handleSelectSetting(generalSettingsItems.find(item => item.title === "Help & Support")!)}
          >
            <span>Help</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Device Settings Overlay - This now appears as a panel on the right */}
      <DeviceSettingsOverlay 
        isOpen={deviceSettingsOpen} 
        onClose={() => setDeviceSettingsOpen(false)} 
      />
    </main>
  );
};

export default Settings;

import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { ChevronRight, HelpCircle, Info } from "lucide-react";
import DeviceSettingsOverlay from "@/components/settings/DeviceSettingsOverlay";
import { settingsItems, generalSettingsItems, SettingItem } from "@/data/mockData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Settings = () => {
  const [, navigate] = useLocation();
  const [selectedSetting, setSelectedSetting] = useState<SettingItem | null>(null);
  const [deviceSettingsOpen, setDeviceSettingsOpen] = useState(false);
  const [showHelpTooltip, setShowHelpTooltip] = useState<number | null>(null);
  
  // Function to handle setting selection
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

  // Function to toggle help tooltip visibility
  const toggleHelpTooltip = (itemId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setShowHelpTooltip(showHelpTooltip === itemId ? null : itemId);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-8 bg-[#001133]">
      <div className="py-5">
        <h1 className="text-3xl font-semibold mb-4">Settings</h1>
        <h2 className="text-xl text-gray-400 mb-6">Optimum TV</h2>
        
        {/* Optimum TV settings with tooltips */}
        <div className="space-y-3 mb-10 max-w-2xl">
          {settingsItems.map((item) => (
            <div key={item.id} className="relative group">
              <button 
                className={getButtonClass(item.title)}
                onClick={() => handleSelectSetting(item)}
              >
                <span className="font-medium flex items-center">
                  {item.title}
                  
                  {/* Help tooltip icon for complex settings */}
                  {(item.title === "Secondary Audio Program (SAP)" || 
                    item.title === "Parental Controls" || 
                    item.title === "DVR Preferences") && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild onClick={(e) => e.stopPropagation()}>
                          <span className="inline-flex ml-2">
                            <Info className="w-4 h-4 text-blue-400 opacity-70 hover:opacity-100" />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="max-w-xs bg-gray-800 text-white border-gray-700">
                          <p className="text-sm">{item.helpText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </span>
                
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
              
              {/* Help tooltip that appears when hovering over the setting */}
              <div 
                className={`absolute -top-1 right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 ${
                  (item.title === "Secondary Audio Program (SAP)" || 
                   item.title === "Parental Controls" || 
                   item.title === "DVR Preferences") ? "" : "hidden"
                }`}
              >
                <div className="bg-gray-800 rounded-md p-2 shadow-lg text-xs text-white max-w-xs">
                  <p>Press <span className="font-bold">?</span> for details</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General section */}
        <h2 className="text-xl text-gray-400 mb-4">General</h2>
        
        {/* General settings with tooltips */}
        <div className="space-y-3 mb-8 max-w-2xl">
          {generalSettingsItems.map((item) => (
            <div key={item.id} className="relative group">
              <button 
                className={getButtonClass(item.title)}
                onClick={() => handleSelectSetting(item)}
              >
                <span className="font-medium">{item.title}</span>
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </button>
              
              {/* Help tooltip for Device & Remote Settings */}
              {item.title === "Device & Remote Settings" && (
                <div className="absolute -top-1 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipContent side="bottom" className="bg-gray-800 text-white border-gray-700">
                        <p className="text-sm">Configure your device, network, and remote settings</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Help Button */}
      <div className="fixed bottom-6 right-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors"
                onClick={() => navigate("/help")}
              >
                <HelpCircle className="w-6 h-6" />
              </button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-gray-800 text-white border-gray-700">
              <p>Get help with settings</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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

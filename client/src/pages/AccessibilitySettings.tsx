import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { ChevronRight } from "lucide-react";
import { accessibilitySettings, accessibilityServices } from "@/data/mockData";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const AccessibilitySettings = () => {
  const [settings, setSettings] = useState(
    accessibilitySettings.map(item => ({
      ...item,
      value: item.value || false
    }))
  );
  
  const [services, setServices] = useState(
    accessibilityServices.map(item => ({
      ...item,
      value: item.value || false
    }))
  );

  const toggleSetting = (id: number) => {
    setSettings(settings.map(item => 
      item.id === id ? { ...item, value: !item.value } : item
    ));
  };
  
  const toggleService = (id: number) => {
    setServices(services.map(item => 
      item.id === id ? { ...item, value: !item.value } : item
    ));
  };

  return (
    <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-8 bg-[#001133]">
      <div className="py-5">
        <h1 className="text-3xl font-semibold mb-4">Accessibility</h1>
        <h2 className="text-xl text-gray-400 mb-6">Settings</h2>
        
        {/* Main settings */}
        <div className="space-y-6 max-w-2xl">
          <div className="bg-[#0a1e42] rounded-lg p-5">
            <h3 className="text-lg font-medium mb-4">Display Options</h3>
            
            <div className="space-y-4">
              {settings.filter(item => !item.experimental).map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">{item.title}</p>
                  </div>
                  {item.type === "toggle" ? (
                    <Switch 
                      checked={Boolean(item.value)} 
                      onCheckedChange={() => toggleSetting(item.id)}
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Experimental features */}
          <div className="bg-[#0a1e42] rounded-lg p-5">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <span>Experimental Features</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="ml-2">
                    <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full text-xs">?</span>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 text-white border-gray-700">
                    <p className="text-sm">These features are in testing and may not work as expected</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </h3>
            
            <div className="space-y-4">
              {settings.filter(item => item.experimental).map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-gray-400">Experimental</p>
                  </div>
                  {item.type === "toggle" ? (
                    <Switch 
                      checked={Boolean(item.value)} 
                      onCheckedChange={() => toggleSetting(item.id)}
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Accessibility Services */}
          <div className="bg-[#0a1e42] rounded-lg p-5">
            <h3 className="text-lg font-medium mb-4 text-blue-400">Accessibility Services</h3>
            
            <div className="space-y-4">
              {services.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.value ? 'Enabled' : 'Disabled'}</p>
                  </div>
                  {item.type === "toggle" ? (
                    <Switch 
                      checked={Boolean(item.value)} 
                      onCheckedChange={() => toggleService(item.id)}
                    />
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccessibilitySettings;
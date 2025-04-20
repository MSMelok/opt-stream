import { useState, useRef, useEffect } from "react";
import { 
  X, ChevronRight, Wifi, User, Grid, Monitor, 
  Settings, Gamepad, ArrowLeft, Info, HelpCircle,
  AlertCircle, Command, Shield
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DeviceSettingsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeviceSettingsOverlay = ({ isOpen, onClose }: DeviceSettingsOverlayProps) => {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [showAppDetails, setShowAppDetails] = useState(false);
  const [showSystemApps, setShowSystemApps] = useState(false);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
  const [showHelpInfo, setShowHelpInfo] = useState<{ show: boolean, message: string }>({ show: false, message: "" });
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Reset state when overlay is opened
  useEffect(() => {
    if (isOpen) {
      setSelectedSetting(null);
      setShowAppDetails(false);
      setShowSystemApps(false);
      setSelectedApp(null);
      setShowHelpInfo({ show: false, message: "" });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSettingClick = (setting: string) => {
    setSelectedSetting(setting);
    setShowAppDetails(false);
    setSelectedApp(null);
    setShowHelpInfo({ show: false, message: "" });
  };

  const handleAppClick = (app: string) => {
    setSelectedApp(app);
    setShowHelpInfo({ show: false, message: "" });
  };

  const handleBackClick = () => {
    if (selectedApp) {
      setSelectedApp(null);
    } else if (showAppDetails) {
      setShowAppDetails(false);
    } else {
      setSelectedSetting(null);
    }
    setShowHelpInfo({ show: false, message: "" });
  };

  const showHelp = (message: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setShowHelpInfo({ show: true, message });
  };

  const hideHelp = () => {
    setShowHelpInfo({ show: false, message: "" });
  };

  // Show complex setting help tip for specific settings
  const getHelpForSetting = (setting: string): string => {
    switch (setting) {
      case "Network & Internet":
        return "Configure your device's internet connection. You can connect via Wi-Fi or Ethernet for streaming content.";
      case "Accounts & sign-in":
        return "Manage your Optimum account and other linked accounts. Sign in to access your personalized content.";
      case "Apps":
        return "Manage your installed apps, permissions, and special features. View system apps to see all software on your device.";
      case "Device Preferences":
        return "Configure device-specific settings including language, date & time, and storage management.";
      case "TV settings":
        return "Adjust display resolution, sound output, HDMI-CEC controls and other TV-related settings.";
      case "Remotes & accessories":
        return "Pair and manage remote controls and accessories connected to your device.";
      default:
        return "Configure your device settings to personalize your experience.";
    }
  };

  // Help for app-specific functions
  const getHelpForAppAction = (action: string): string => {
    switch (action) {
      case "Force stop":
        return "Immediately stops all processes related to this app. Use when the app is unresponsive or causing problems.";
      case "Clear data":
        return "Removes all user data associated with this app including logins, settings, and cached content. This resets the app to its initial state.";
      case "Clear cache":
        return "Removes temporary files stored by the app without affecting your personal data or settings. This can help fix minor performance issues.";
      case "Uninstall updates":
        return "Reverts the app to the factory version by removing updates. Use this if a recent update is causing problems.";
      default:
        return "Manage application settings and data.";
    }
  };

  const renderContent = () => {
    // App details view - shows specific app options with tooltips
    if (selectedApp) {
      return (
        <div>
          <div className="flex items-center border-b border-gray-800 p-4">
            <button
              onClick={handleBackClick}
              className="mr-3 p-1 rounded-full hover:bg-gray-800"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-medium">{selectedApp}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-2 text-blue-400 hover:text-blue-300">
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white border-gray-700 max-w-xs">
                  <p className="text-sm">Manage this app's settings, data, and permissions.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between py-4 border-b border-gray-800">
              <p className="text-sm text-gray-400">App version</p>
              <p className="text-sm">3.2.1</p>
            </div>
            
            <div className="flex items-center justify-between py-4 border-b border-gray-800">
              <p className="text-sm text-gray-400">Storage used</p>
              <p className="text-sm">245 MB</p>
            </div>
            
            <div className="mt-6 space-y-3">
              {/* App action buttons with tooltips */}
              {["Force stop", "Clear data", "Clear cache", "Uninstall updates"].map((action) => (
                <div key={action} className="relative group">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="w-full py-3 px-4 bg-gray-800 rounded-md text-left hover:bg-gray-700 transition flex justify-between items-center">
                          <span>{action}</span>
                          <Info className="w-4 h-4 text-gray-400 opacity-70 group-hover:opacity-100" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="bg-gray-800 text-white border-gray-700 max-w-xs">
                        <p className="text-sm">{getHelpForAppAction(action)}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    // Show all apps view
    if (selectedSetting === "Apps" && showAppDetails) {
      return (
        <div>
          <div className="flex items-center border-b border-gray-800 p-4">
            <button
              onClick={handleBackClick}
              className="mr-3 p-1 rounded-full hover:bg-gray-800"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-medium">See all apps</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-2 text-blue-400 hover:text-blue-300">
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white border-gray-700 max-w-xs">
                  <p className="text-sm">View and manage all installed applications. Toggle 'Show system apps' to see pre-installed system components.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">Show system apps</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={showSystemApps}
                  onChange={() => setShowSystemApps(!showSystemApps)} 
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            {/* Regular apps list */}
            <div className="space-y-3">
              <button
                className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => handleAppClick("Optimum TV App")}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center mr-3">
                    <span className="text-white font-bold">TV</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Optimum TV App</p>
                    <p className="text-xs text-gray-400">v3.2.1 • 245 MB</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              
              <button
                className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => handleAppClick("Netflix")}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center mr-3">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Netflix</p>
                    <p className="text-xs text-gray-400">v5.14.0 • 84 MB</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              
              <button
                className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => handleAppClick("Disney+")}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center mr-3">
                    <span className="text-white font-bold">D+</span>
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Disney+</p>
                    <p className="text-xs text-gray-400">v2.13.0 • 76 MB</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              
              {showSystemApps && (
                <>
                  <div className="w-full pt-2 pb-1 px-3 mt-2">
                    <h4 className="text-sm text-gray-500 font-medium">System Apps</h4>
                  </div>
                  
                  <button
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => handleAppClick("Android System")}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center mr-3">
                        <span className="text-white font-bold">SYS</span>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Android System</p>
                        <p className="text-xs text-gray-400">v12.0 • 4.5 GB</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                  
                  <button
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => handleAppClick("System UI")}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center mr-3">
                        <span className="text-white font-bold">UI</span>
                      </div>
                      <div className="text-left">
                        <p className="font-medium">System UI</p>
                        <p className="text-xs text-gray-400">v12.0 • 325 MB</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    // Settings specific view
    if (selectedSetting) {
      return (
        <div>
          <div className="flex items-center border-b border-gray-800 p-4">
            <button
              onClick={handleBackClick}
              className="mr-3 p-1 rounded-full hover:bg-gray-800"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-medium">{selectedSetting}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-2 text-blue-400 hover:text-blue-300">
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 text-white border-gray-700 max-w-xs">
                  <p className="text-sm">{getHelpForSetting(selectedSetting)}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {selectedSetting === "Network & Internet" && (
            <div className="divide-y divide-gray-800">
              <div className="relative group">
                <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                  <span className="font-medium">Wi-Fi</span>
                  <span className="text-sm text-gray-400">Off</span>
                </button>
                <div className="absolute inset-y-0 right-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="p-1">
                          <Info className="w-4 h-4 text-blue-400" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="bg-gray-800 text-white border-gray-700">
                        <p className="text-sm">Connect to wireless networks to stream content</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="relative group">
                <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                  <span className="font-medium">Ethernet</span>
                  <span className="text-sm text-green-500">Connected</span>
                </button>
                <div className="absolute inset-y-0 right-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="p-1">
                          <Info className="w-4 h-4 text-blue-400" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="bg-gray-800 text-white border-gray-700">
                        <p className="text-sm">Wired connection providing the most stable streaming experience</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          )}

          {selectedSetting === "Accounts & sign-in" && (
            <div className="p-4">
              <div className="bg-gray-800 rounded-md p-3 mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">O</div>
                  <div>
                    <p className="font-medium">Optimum ID</p>
                    <p className="text-sm text-gray-400">family_member</p>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="w-full py-2 px-3 bg-gray-800 rounded-md text-center hover:bg-gray-700 transition">
                  Add another account
                </button>
                <div className="absolute -top-1 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="p-1">
                          <Info className="w-4 h-4 text-blue-400" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-gray-800 text-white border-gray-700">
                        <p className="text-sm">Add additional accounts for different family members</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          )}

          {selectedSetting === "Apps" && (
            <div className="divide-y divide-gray-800">
              <div className="relative group">
                <button 
                  className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
                  onClick={() => setShowAppDetails(true)}
                >
                  <span className="font-medium">See all apps</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
              <div className="relative group">
                <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                  <span className="font-medium">App permissions</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <div className="absolute inset-y-0 right-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="p-1">
                          <Info className="w-4 h-4 text-blue-400" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="bg-gray-800 text-white border-gray-700">
                        <p className="text-sm">Control which services apps can access (camera, microphone, etc.)</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="relative group">
                <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                  <span className="font-medium">Special app access</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <div className="absolute inset-y-0 right-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="p-1">
                          <AlertCircle className="w-4 h-4 text-amber-400" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="bg-gray-800 text-white border-gray-700">
                        <p className="text-sm">Advanced permissions that can affect device functionality. Change with caution.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          )}

          {/* Other settings sections are similar - left unchanged for brevity */}
          {selectedSetting === "Device Preferences" && (
            <div className="divide-y divide-gray-800">
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">About</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Date & time</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Language</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Storage</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          )}

          {selectedSetting === "TV settings" && (
            <div className="divide-y divide-gray-800">
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Display & Sound</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Channels & Inputs</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">HDMI-CEC</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          )}

          {selectedSetting === "Remotes & accessories" && (
            <div className="divide-y divide-gray-800">
              <div className="px-5 py-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Optimum Remote</p>
                    <p className="text-xs text-gray-400">Connected • Battery 78%</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Add accessory</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          )}
        </div>
      );
    }
    
    // Main settings menu with tooltips
    return (
      <div>
        <div className="px-4 py-2">
          <p className="text-sm text-blue-400 font-medium">General Settings</p>
        </div>
        
        <div className="divide-y divide-gray-800">
          {/* Main menu options with tooltips */}
          {[
            { title: "Network & Internet", subtitle: "Ethernet connected", icon: <Wifi className="w-5 h-5" /> },
            { title: "Accounts & sign-in", icon: <User className="w-5 h-5" /> },
            { title: "Apps", icon: <Grid className="w-5 h-5" /> },
            { title: "Device Preferences", icon: <Monitor className="w-5 h-5" /> },
            { title: "TV settings", icon: <Settings className="w-5 h-5" /> },
            { title: "Remotes & accessories", icon: <Gamepad className="w-5 h-5" /> },
            { title: "Privacy", icon: <Shield className="w-5 h-5" /> },
            { title: "System", icon: <Command className="w-5 h-5" /> }
          ].map((setting) => (
            <div key={setting.title} className="relative group">
              <button
                className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
                onClick={() => handleSettingClick(setting.title)}
              >
                <div className="flex items-center">
                  <div className="mr-3 text-white">
                    {setting.icon}
                  </div>
                  <div>
                    <p className="font-medium text-white text-left">{setting.title}</p>
                    {setting.subtitle && (
                      <p className="text-xs text-gray-400 text-left">{setting.subtitle}</p>
                    )}
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              
              {/* Tooltip for each setting */}
              <div className="absolute inset-y-0 right-12 opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="p-1">
                        <Info className="w-4 h-4 text-blue-400" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="bg-gray-800 text-white border-gray-700 max-w-xs">
                      <p className="text-sm">{getHelpForSetting(setting.title)}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50">
      <div 
        ref={overlayRef}
        className="h-screen w-full max-w-sm bg-gray-900 shadow-xl overflow-y-auto"
      >
        {!selectedSetting && (
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-xl font-semibold">Settings</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
        
        {renderContent()}
        
        {/* Help hint that appears at the bottom of the panel */}
        <div className="fixed bottom-0 right-0 max-w-sm w-full bg-gray-800 p-2 border-t border-gray-700 flex items-center justify-between">
          <span className="text-xs text-gray-400">Hover over options for help</span>
          <HelpCircle className="w-4 h-4 text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default DeviceSettingsOverlay;
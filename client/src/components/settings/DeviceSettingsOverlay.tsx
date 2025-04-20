import { useState, useRef, useEffect } from "react";
import { X, ChevronRight, Wifi, User, Grid, 
  Monitor, Settings, Gamepad, ArrowLeft } from "lucide-react";

interface DeviceSettingsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeviceSettingsOverlay = ({ isOpen, onClose }: DeviceSettingsOverlayProps) => {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [showAppDetails, setShowAppDetails] = useState(false);
  const [showSystemApps, setShowSystemApps] = useState(false);
  const [selectedApp, setSelectedApp] = useState<string | null>(null);
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
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSettingClick = (setting: string) => {
    setSelectedSetting(setting);
    setShowAppDetails(false);
    setSelectedApp(null);
  };

  const handleAppClick = (app: string) => {
    setSelectedApp(app);
  };

  const handleBackClick = () => {
    if (selectedApp) {
      setSelectedApp(null);
    } else if (showAppDetails) {
      setShowAppDetails(false);
    } else {
      setSelectedSetting(null);
    }
  };

  const renderContent = () => {
    // App details view - shows specific app options
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
              <button className="w-full py-3 px-4 bg-gray-800 rounded-md text-left hover:bg-gray-700 transition">
                Force stop
              </button>
              
              <button className="w-full py-3 px-4 bg-gray-800 rounded-md text-left hover:bg-gray-700 transition">
                Clear data
              </button>
              
              <button className="w-full py-3 px-4 bg-gray-800 rounded-md text-left hover:bg-gray-700 transition">
                Clear cache
              </button>
              
              <button className="w-full py-3 px-4 bg-gray-800 rounded-md text-left hover:bg-gray-700 transition">
                Uninstall updates
              </button>
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
          </div>

          {selectedSetting === "Network & Internet" && (
            <div className="divide-y divide-gray-800">
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Wi-Fi</span>
                <span className="text-sm text-gray-400">Off</span>
              </button>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Ethernet</span>
                <span className="text-sm text-green-500">Connected</span>
              </button>
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
              <button className="w-full py-2 px-3 bg-gray-800 rounded-md text-center hover:bg-gray-700 transition">
                Add another account
              </button>
            </div>
          )}

          {selectedSetting === "Apps" && (
            <div className="divide-y divide-gray-800">
              <button 
                className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
                onClick={() => setShowAppDetails(true)}
              >
                <span className="font-medium">See all apps</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">App permissions</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
              <button className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
                <span className="font-medium">Special app access</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          )}

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
    
    // Main settings menu
    return (
      <div>
        <div className="px-4 py-2">
          <p className="text-sm text-blue-400 font-medium">General Settings</p>
        </div>
        
        <div className="divide-y divide-gray-800">
          <button
            className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
            onClick={() => handleSettingClick("Network & Internet")}
          >
            <div className="flex items-center">
              <div className="mr-3 text-white">
                <Wifi className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white text-left">Network & Internet</p>
                <p className="text-xs text-gray-400 text-left">Ethernet connected</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
            onClick={() => handleSettingClick("Accounts & sign-in")}
          >
            <div className="flex items-center">
              <div className="mr-3 text-white">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white text-left">Accounts & sign-in</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
            onClick={() => handleSettingClick("Apps")}
          >
            <div className="flex items-center">
              <div className="mr-3 text-white">
                <Grid className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white text-left">Apps</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
            onClick={() => handleSettingClick("Device Preferences")}
          >
            <div className="flex items-center">
              <div className="mr-3 text-white">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white text-left">Device Preferences</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
            onClick={() => handleSettingClick("TV settings")}
          >
            <div className="flex items-center">
              <div className="mr-3 text-white">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white text-left">TV settings</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
            onClick={() => handleSettingClick("Remotes & accessories")}
          >
            <div className="flex items-center">
              <div className="mr-3 text-white">
                <Gamepad className="w-5 h-5" />
              </div>
              <div>
                <p className="font-medium text-white text-left">Remotes & accessories</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
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
      </div>
    </div>
  );
};

export default DeviceSettingsOverlay;
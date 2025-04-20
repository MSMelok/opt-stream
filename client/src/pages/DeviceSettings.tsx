import { useState } from "react";
import { useLocation } from "wouter";
import SettingsItem from "@/components/settings/SettingsItem";
import { generalSettingsItems } from "@/data/mockData";
import { ChevronRight } from "lucide-react";

const DeviceSettings = () => {
  const [, navigate] = useLocation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAppDetails, setShowAppDetails] = useState(false);
  const [showSystemApps, setShowSystemApps] = useState(false);
  
  const handleBackToSettings = () => {
    navigate("/settings");
  };
  
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    if (option === "Apps") {
      setShowAppDetails(false);
    }
  };
  
  const handleShowAllApps = () => {
    setShowAppDetails(true);
  };
  
  // Render the content for the selected option
  const renderOptionContent = () => {
    switch (selectedOption) {
      case "Network & Internet":
        return (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-4">Network & Internet</h3>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">Wi-Fi</span>
              <span className="text-sm text-gray-400">Off</span>
            </div>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">Ethernet</span>
              <span className="text-sm text-green-400">Connected</span>
            </div>
          </div>
        );
        
      case "Accounts & Sign-in":
        return (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-4">Accounts & Sign-in</h3>
            <div className="p-3 bg-gray-800 rounded-md">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">O</div>
                <div>
                  <p className="font-medium">Optimum ID</p>
                  <p className="text-sm text-gray-400">family_member</p>
                </div>
              </div>
              <div className="mt-3 p-2 bg-gray-700 rounded text-center text-sm hover:bg-gray-600 cursor-pointer">
                Add another account
              </div>
            </div>
          </div>
        );
        
      case "Apps":
        return (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-4">Apps</h3>
            
            {!showAppDetails ? (
              <div className="space-y-3">
                <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer" onClick={handleShowAllApps}>
                  <span className="font-medium">See All Apps</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
                <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
                  <span className="font-medium">App permissions</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
                <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
                  <span className="font-medium">Special app access</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center mb-4">
                  <button 
                    className="px-3 py-1 bg-gray-800 rounded-md text-sm mr-2"
                    onClick={() => setShowAppDetails(false)}
                  >
                    Back
                  </button>
                  <h4 className="text-lg font-medium">All Apps</h4>
                </div>
                
                <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between">
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
                
                {/* List of apps */}
                <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center mr-3">
                      <span className="text-white font-bold">TV</span>
                    </div>
                    <div>
                      <p className="font-medium">Optimum TV App</p>
                      <p className="text-xs text-gray-400">v3.2.1 • 245 MB</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">Open</span>
                </div>
                
                <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center mr-3">
                      <span className="text-white font-bold">N</span>
                    </div>
                    <div>
                      <p className="font-medium">Netflix</p>
                      <p className="text-xs text-gray-400">v5.14.0 • 84 MB</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">Open</span>
                </div>
                
                <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center mr-3">
                      <span className="text-white font-bold">D+</span>
                    </div>
                    <div>
                      <p className="font-medium">Disney+</p>
                      <p className="text-xs text-gray-400">v2.13.0 • 76 MB</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">Open</span>
                </div>
                
                {showSystemApps && (
                  <>
                    <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center mr-3">
                          <span className="text-white font-bold">SYS</span>
                        </div>
                        <div>
                          <p className="font-medium">Android System</p>
                          <p className="text-xs text-gray-400">v12.0 • 4.5 GB</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">System</span>
                    </div>
                    
                    <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center mr-3">
                          <span className="text-white font-bold">UI</span>
                        </div>
                        <div>
                          <p className="font-medium">System UI</p>
                          <p className="text-xs text-gray-400">v12.0 • 325 MB</p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-400">System</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        );
        
      case "Device Preferences":
        return (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-4">Device Preferences</h3>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">About</span>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">Date & time</span>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">Language</span>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">Storage</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        );
        
      case "TV Settings":
        return (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-4">TV Settings</h3>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">Display & Sound</span>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">Channels & Inputs</span>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">HDMI-CEC</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        );
        
      case "Remote & Accessories":
        return (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold mb-4">Remote & Accessories</h3>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <div>
                <p className="font-medium">Optimum Remote</p>
                <p className="text-xs text-gray-400">Connected • Battery 78%</p>
              </div>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md flex items-center justify-between cursor-pointer">
              <span className="font-medium">Add accessory</span>
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        );
        
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl text-gray-400 mt-20">Select an option from the menu</p>
          </div>
        );
    }
  };
  
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Left Panel - General Settings */}
        <div className="col-span-2">
          <h3 className="text-lg font-medium mb-4">General</h3>

          {generalSettingsItems.map((item) => (
            <SettingsItem
              key={item.id}
              item={item}
              active={item.title === "Device & Remote Settings"}
              onSelect={() => item.title === "Device & Remote Settings" ? null : handleBackToSettings()}
            />
          ))}
        </div>

        {/* Right Panel - Device Settings */}
        <div className="col-span-1">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <h2 className="text-xl font-semibold">Device & Remote Settings</h2>
            </div>
            
            <div className="flex h-[500px]">
              {/* Left sidebar menu */}
              <div className="w-2/5 bg-gray-900 border-r border-gray-800 p-3">
                <div className="space-y-1">
                  {["Network & Internet", "Accounts & Sign-in", "Apps", "Device Preferences", "TV Settings", "Remote & Accessories"].map((option) => (
                    <div
                      key={option}
                      className={`py-2 px-3 rounded-md cursor-pointer ${
                        selectedOption === option 
                          ? "bg-blue-600 text-white" 
                          : "hover:bg-gray-800 text-gray-300"
                      }`}
                      onClick={() => handleSelectOption(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right content area */}
              <div className="w-3/5 p-4 bg-gray-800 overflow-y-auto">
                {renderOptionContent()}
              </div>
            </div>
            
            <div className="p-3 bg-gray-900 border-t border-gray-800 text-xs text-gray-500 flex justify-between">
              <span>Android TV v12</span>
              <span>Optimum Stream Box</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeviceSettings;

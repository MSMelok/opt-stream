import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { accessibilitySettings, accessibilityServices } from "@/data/mockData";

const AccessibilitySettings = () => {
  const [highContrastEnabled, setHighContrastEnabled] = useState(false);
  const [talkBackEnabled, setTalkBackEnabled] = useState(false);
  const [switchAccessEnabled, setSwitchAccessEnabled] = useState(false);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Left Panel - General Settings */}
        <div className="col-span-2">
          <h1 className="text-3xl font-semibold mb-4">General</h1>
          
          <div className="mb-6 bg-gray-900 bg-opacity-50 rounded-xl p-4">
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-full bg-gray-800 hover:bg-gray-700 text-left">
              <span className="font-medium">My Account</span>
              <span className="ml-2">›</span>
            </button>
          </div>
          
          <div className="mb-6 bg-gray-900 bg-opacity-50 rounded-xl p-4">
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-full bg-gray-800 bg-opacity-50 hover:bg-gray-700 hover:bg-opacity-50 text-left">
              <span className="font-medium">Accessibility</span>
              <span className="ml-2">›</span>
            </button>
          </div>
          
          <div className="mb-6 bg-gray-900 bg-opacity-50 rounded-xl p-4">
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-full bg-gray-800 hover:bg-gray-700 text-left">
              <span className="font-medium">Device & Remote Settings</span>
              <span className="ml-2">›</span>
            </button>
          </div>
          
          <div className="mb-6 bg-gray-900 bg-opacity-50 rounded-xl p-4">
            <button className="w-full flex items-center justify-between py-3 px-4 rounded-full bg-gray-800 hover:bg-gray-700 text-left">
              <span className="font-medium">Help</span>
              <span className="ml-2">›</span>
            </button>
          </div>
        </div>

        {/* Right Panel - Accessibility Settings */}
        <div className="col-span-1">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold p-5 border-b border-gray-800">Accessibility</h2>
            
            <div className="p-5">
              <h3 className="text-lg font-medium mb-4">Captions</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">High contrast text</p>
                    <p className="text-xs text-gray-400">(Experimental)</p>
                  </div>
                  <Switch 
                    checked={highContrastEnabled} 
                    onCheckedChange={setHighContrastEnabled}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="font-medium">Text to speech</p>
                  <span className="text-gray-400">›</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="font-medium">Accessibility shortcut</p>
                  <span className="text-gray-400">›</span>
                </div>
              </div>
              
              <h3 className="text-lg font-medium my-4 mt-8 text-blue-400">Services</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">TalkBack</p>
                    <p className="text-xs text-gray-400">Off</p>
                  </div>
                  <Switch 
                    checked={talkBackEnabled} 
                    onCheckedChange={setTalkBackEnabled}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Switch Access</p>
                    <p className="text-xs text-gray-400">Off</p>
                  </div>
                  <Switch 
                    checked={switchAccessEnabled} 
                    onCheckedChange={setSwitchAccessEnabled}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccessibilitySettings;
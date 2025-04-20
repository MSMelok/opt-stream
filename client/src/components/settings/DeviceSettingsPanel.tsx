import { useState } from "react";
import { DeviceSetting, DeviceSubSetting } from "@/data/mockData";
import { 
  Wifi, User, Grid, Monitor, Settings as SettingsIcon, 
  Gamepad, Shield, RefreshCw, ChevronRight, ArrowLeft, 
  ToggleLeft, ToggleRight, Plus, Info, Command, Network
} from "lucide-react";
import { Select } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

interface DeviceSettingsPanelProps {
  settings: DeviceSetting[];
}

const DeviceSettingsPanel = ({ settings }: DeviceSettingsPanelProps) => {
  const [selectedSetting, setSelectedSetting] = useState<DeviceSetting | null>(null);
  const [toggleStates, setToggleStates] = useState<Record<number, boolean>>({});
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "wifi":
        return <Wifi className="w-5 h-5" />;
      case "user":
        return <User className="w-5 h-5" />;
      case "apps":
        return <Grid className="w-5 h-5" />;
      case "tv":
        return <Monitor className="w-5 h-5" />;
      case "settings":
        return <SettingsIcon className="w-5 h-5" />;
      case "remote":
        return <Gamepad className="w-5 h-5" />;
      case "shield":
        return <Shield className="w-5 h-5" />;
      case "system":
        return <Command className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };
  
  const handleToggleChange = (id: number, currentValue: boolean) => {
    setToggleStates(prev => ({
      ...prev,
      [id]: !currentValue
    }));
  };
  
  const handleSettingClick = (setting: DeviceSetting) => {
    setSelectedSetting(setting);
  };
  
  const handleBackClick = () => {
    setSelectedSetting(null);
  };
  
  const renderSubSettingValue = (subSetting: DeviceSubSetting) => {
    const value = toggleStates[subSetting.id] !== undefined 
      ? toggleStates[subSetting.id]
      : subSetting.value;
      
    switch (subSetting.type) {
      case 'toggle':
        return (
          <Switch 
            checked={value as boolean} 
            onCheckedChange={() => handleToggleChange(subSetting.id, value as boolean)}
          />
        );
      case 'select':
        return (
          <div className="flex items-center text-sm text-gray-300">
            <span>{subSetting.value as string}</span>
            <ChevronRight className="ml-1 w-4 h-4" />
          </div>
        );
      case 'button':
        return <ChevronRight className="w-4 h-4 text-gray-400" />;
      case 'info':
        return (
          <div className="text-right text-sm text-gray-300">
            {subSetting.status || subSetting.value}
          </div>
        );
      default:
        return null;
    }
  };
  
  // If a setting is selected, show its details
  if (selectedSetting) {
    return (
      <div className="bg-gray-900 rounded-lg p-5 h-full">
        <div className="flex items-center space-x-2 mb-6">
          <Button variant="ghost" size="sm" onClick={handleBackClick} className="p-1">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-semibold">{selectedSetting.title}</h2>
        </div>
        
        <div className="space-y-4">
          {selectedSetting.subSettings?.map((subSetting) => (
            <div 
              key={subSetting.id}
              className="flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-750 rounded-md"
            >
              <div className="flex flex-col">
                <span className="font-medium">{subSetting.title}</span>
                {subSetting.description && (
                  <span className="text-sm text-gray-400">{subSetting.description}</span>
                )}
              </div>
              {renderSubSettingValue(subSetting)}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Main settings list
  return (
    <div className="bg-gray-900 rounded-lg p-5 h-full">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>
      
      <div className="space-y-1">
        {settings.map((setting) => (
          <div 
            key={setting.id}
            className="flex items-center justify-between p-3 hover:bg-gray-800 rounded-md transition cursor-pointer"
            onClick={() => handleSettingClick(setting)}
          >
            <div className="flex items-center">
              <div className="mr-4 text-white bg-blue-600 bg-opacity-30 p-2 rounded-full">
                {getIcon(setting.icon)}
              </div>
              <div>
                <p className="font-medium">{setting.title}</p>
                {setting.subtitle && (
                  <p className="text-gray-400 text-sm">{setting.subtitle}</p>
                )}
              </div>
            </div>
            {setting.hasChevron && <ChevronRight className="w-5 h-5 text-gray-400" />}
            {setting.hasToggle && (
              <Switch 
                checked={toggleStates[setting.id] || setting.toggleValue || false}
                onCheckedChange={() => handleToggleChange(
                  setting.id, 
                  toggleStates[setting.id] !== undefined 
                    ? toggleStates[setting.id] 
                    : (setting.toggleValue || false)
                )}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceSettingsPanel;

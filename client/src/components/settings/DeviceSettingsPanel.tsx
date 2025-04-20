import { DeviceSetting } from "@/data/mockData";
import { Wifi, User, Grid, Monitor, Settings, Gamepad } from "lucide-react";

interface DeviceSettingsPanelProps {
  settings: DeviceSetting[];
}

const DeviceSettingsPanel = ({ settings }: DeviceSettingsPanelProps) => {
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
        return <Settings className="w-5 h-5" />;
      case "remote":
        return <Gamepad className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>
      
      <p className="text-blue-400 text-sm mb-4">General Settings</p>
      
      {settings.map((setting) => (
        <div 
          key={setting.id}
          className="flex items-center mb-5 p-2 hover:bg-gray-800 rounded transition cursor-pointer"
        >
          <div className="mr-4 text-white bg-gray-700 p-2 rounded">
            {getIcon(setting.icon)}
          </div>
          <div>
            <p className="font-medium">{setting.title}</p>
            {setting.subtitle && (
              <p className="text-gray-400 text-sm">{setting.subtitle}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeviceSettingsPanel;

import { useLocation } from "wouter";
import { ChevronRight, Settings, Users, Cast, HelpCircle, Bell, Eye } from "lucide-react";
import { SettingItem } from "@/data/mockData";
import { Switch } from "@/components/ui/switch";

interface SettingsItemProps {
  item: SettingItem;
  active?: boolean;
  onSelect?: (item: SettingItem) => void;
}

const SettingsItem = ({ item, active = false, onSelect }: SettingsItemProps) => {
  const [, navigate] = useLocation();

  const handleClick = () => {
    if (onSelect) {
      onSelect(item);
    }

    if (item.title === "Device & Remote Settings") {
      navigate("/device-settings");
    } else if (item.title === "Accessibility") {
      navigate("/accessibility-settings");
    } else if (item.title === "My Account") {
      navigate("/account");
    }
  };

  const getIcon = () => {
    switch (item.title) {
      case "Device & Remote Settings":
        return <Settings className="w-5 h-5 mr-3" />;
      case "My Account":
        return <Users className="w-5 h-5 mr-3" />;
      case "Accessibility":
        return <Eye className="w-5 h-5 mr-3" />;
      case "Notifications":
        return <Bell className="w-5 h-5 mr-3" />;
      case "Connected TVs":
        return <Cast className="w-5 h-5 mr-3" />;
      case "Help & Support":
        return <HelpCircle className="w-5 h-5 mr-3" />;
      default:
        return null;
    }
  };

  const getBgClass = () => {
    if (active) {
      return "bg-blue-600 text-white";
    }
    return "bg-gray-900 hover:bg-gray-800";
  };

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-md ${getBgClass()} transition mb-3 cursor-pointer`}
      onClick={handleClick}
    >
      <div className="flex items-center">
        {getIcon()}
        <span className="font-medium">{item.title}</span>
      </div>
      
      <div>
        {item.type === "link" && <ChevronRight className="w-5 h-5 text-gray-400" />}
        {item.type === "toggle" && (
          <Switch checked={item.isActive || false} />
        )}
        {item.type === "value" && (
          <span className="text-sm text-gray-300">{item.value}</span>
        )}
        {item.helpText && (
          <span className="text-xs text-gray-500 block mt-1">{item.helpText}</span>
        )}
      </div>
    </div>
  );
};

export default SettingsItem;

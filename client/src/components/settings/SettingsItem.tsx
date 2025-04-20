import { useLocation } from "wouter";
import { ChevronRight } from "lucide-react";
import { SettingItem } from "@/data/mockData";

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
    }
  };

  const getBgClass = () => {
    if (active) {
      return "bg-white text-[#001133]";
    }
    return "bg-[#0a1e42] hover:bg-opacity-90";
  };

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-full ${getBgClass()} transition mb-4 cursor-pointer`}
      onClick={handleClick}
    >
      <span className="font-medium">{item.title}</span>
      {item.type === "link" && <ChevronRight className="w-5 h-5" />}
      {item.type === "toggle" && <span className="font-medium">{item.value}</span>}
      {item.type === "value" && <span className="font-medium">{item.value}</span>}
    </div>
  );
};

export default SettingsItem;

import { useState } from "react";
import { useLocation } from "wouter";
import SettingsItem from "@/components/settings/SettingsItem";
import { settingsItems, generalSettingsItems, SettingItem } from "@/data/mockData";

const Settings = () => {
  const [, navigate] = useLocation();
  const [selectedSetting, setSelectedSetting] = useState<SettingItem>(settingsItems[0]);

  const handleSelectSetting = (setting: SettingItem) => {
    setSelectedSetting(setting);
    
    // Navigate to appropriate page based on selected setting
    if (setting.title === "My Account") {
      navigate("/account");
    } else if (setting.title === "Accessibility") {
      navigate("/accessibility");
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <h1 className="text-3xl font-semibold mt-6 mb-4">Settings</h1>
      <h2 className="text-xl font-medium mb-6">Optimum TV</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Settings Menu - Left Column */}
        <div className="col-span-2">
          {settingsItems.map((item) => (
            <SettingsItem
              key={item.id}
              item={item}
              active={selectedSetting.id === item.id}
              onSelect={handleSelectSetting}
            />
          ))}

          <h3 className="text-lg font-medium mb-4 mt-8">General</h3>

          {generalSettingsItems.map((item) => (
            <SettingsItem
              key={item.id}
              item={item}
              active={selectedSetting.id === item.id}
              onSelect={handleSelectSetting}
            />
          ))}
        </div>

        {/* Contextual Help - Right Column */}
        <div className="col-span-1">
          <div className="p-6">
            <h3 className="text-xl font-medium mb-4">
              {selectedSetting.helpText}
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Settings;

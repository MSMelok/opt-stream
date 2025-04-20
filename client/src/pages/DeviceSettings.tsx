import SettingsItem from "@/components/settings/SettingsItem";
import DeviceSettingsPanel from "@/components/settings/DeviceSettingsPanel";
import { generalSettingsItems, deviceSettings } from "@/data/mockData";

const DeviceSettings = () => {
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
            />
          ))}
        </div>

        {/* Right Panel - Android TV Style Settings */}
        <div className="col-span-1">
          <DeviceSettingsPanel settings={deviceSettings} />
        </div>
      </div>
    </main>
  );
};

export default DeviceSettings;

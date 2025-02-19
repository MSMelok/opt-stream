import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

type SettingButton = {
  label: string;
  description: string;
  value?: string;
  subSettings?: SubSetting[];
};

type SubSetting = {
  label: string;
  description?: string;
  options?: string[];
};

const settingsButtons: SettingButton[] = [
  {
    label: 'Favorite Channels',
    description: 'You can set your favorite channels, then you can filter the guide to only show your favorite channels.',
    subSettings: [
      { label: 'Add Favorite Channels' },
      { label: 'Remove Favorite Channels' },
      { label: 'View All Favorites' }
    ]
  },
  {
    label: 'DVR Preferences',
    description: 'Set or update your DVR recording and storage preferences.',
    subSettings: [
      { label: 'Recording Options' },
      { label: 'Storage Management' },
      { label: 'Series Recordings' }
    ]
  },
  {
    label: 'Secondary Audio Program (SAP)',
    description: 'Set the default language for Optimum TV. Not all programming offers alternate languages.',
    subSettings: [
      { 
        label: 'Audio Language',
        options: ['English', 'Español', 'Français']
      }
    ]
  },
  {
    label: 'Parental Controls',
    description: 'Parental Controls allow you to limit access to programming based on the rating or channel it appears on.',
    subSettings: [
      { label: 'Rating Limits' },
      { label: 'Channel Restrictions' },
      { label: 'Purchase Restrictions' },
      { label: 'Change PIN' }
    ]
  },
  {
    label: 'Purchase PIN',
    description: 'Create or enter a 4-digit code used to confirm movie rentals and charges to your service.',
    subSettings: [
      { label: 'Change PIN' },
      { label: 'Reset PIN' }
    ]
  },
  {
    label: 'Default Channel',
    description: 'You can change the channel that your Optimum TV services will start on.',
    value: 'News 12',
    subSettings: [
      { 
        label: 'Select Channel',
        options: ['News 12', 'ABC', 'NBC', 'CBS', 'FOX']
      }
    ]
  },
  {
    label: 'My Account',
    description: 'View and manage your Optimum account settings.',
    subSettings: [
      { label: 'Account Information' },
      { label: 'Billing History' },
      { label: 'Payment Methods' }
    ]
  }
];

const generalButtons: SettingButton[] = [
  {
    label: 'Accessibility',
    description: 'Access accessibility settings such as Closed Captions and Talkback.',
    subSettings: [
      { label: 'Closed Captions' },
      { label: 'Screen Reader' },
      { label: 'High Contrast' }
    ]
  },
  {
    label: 'Device & Remote Settings',
    description: 'Access to Network and WiFi, Remote Control, and other settings for your Optimum Stream.',
    subSettings: [
      { label: 'Network & Internet' },
      { label: 'Accounts & Sign In' },
      { label: 'Apps' },
      { label: 'Device Preferences' },
      { label: 'TV settings' },
      { label: 'Remote & Accessories' }
    ]
  },
  {
    label: 'Help',
    description: 'Get help with your Optimum Stream device and services.',
    subSettings: [
      { label: 'Troubleshooting' },
      { label: 'User Guide' },
      { label: 'Contact Support' }
    ]
  }
];

function Settings() {
  const [description, setDescription] = useState('');
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState<SettingButton | null>(null);
  const [selectedSubSetting, setSelectedSubSetting] = useState<SubSetting | null>(null);

  const handleSettingClick = (setting: SettingButton) => {
    setSelectedSetting(setting);
    setShowRightPanel(true);
    setSelectedSubSetting(null);
  };

  const handleBackClick = () => {
    if (selectedSubSetting) {
      setSelectedSubSetting(null);
    } else {
      setShowRightPanel(false);
      setSelectedSetting(null);
    }
  };

  const handleSubSettingClick = (subSetting: SubSetting) => {
    setSelectedSubSetting(subSetting);
  };

  return (
    <div className="mx-12 my-6 max-w-3xl relative">
      <div className="settings-wrapper">
        <div className="settings-menu">
          <h1 className="text-2xl font-bold mb-4">Settings</h1>
          <h3 className="text-gray-400 mb-4">Optimum TV</h3>

          {settingsButtons.map((button) => (
            <button
              key={button.label}
              className="w-full px-8 py-4 mb-2 text-left text-lg bg-white/5 text-gray-300 border border-white rounded-full flex justify-between items-center hover:bg-white hover:text-[#002864] hover:font-bold transition-all duration-300"
              onMouseEnter={() => setDescription(button.description)}
              onMouseLeave={() => setDescription('')}
              onClick={() => handleSettingClick(button)}
            >
              {button.label}
              <span>{button.value || <FontAwesomeIcon icon={faChevronRight} />}</span>
            </button>
          ))}

          <h3 className="text-gray-400 mt-8 mb-4">General</h3>
          {generalButtons.map((button) => (
            <button
              key={button.label}
              className="w-full px-8 py-4 mb-2 text-left text-lg bg-white/5 text-gray-300 border border-white rounded-full flex justify-between items-center hover:bg-white hover:text-[#002864] hover:font-bold transition-all duration-300"
              onMouseEnter={() => setDescription(button.description)}
              onMouseLeave={() => setDescription('')}
              onClick={() => handleSettingClick(button)}
            >
              {button.label}
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel */}
      <div 
        className="fixed right-0 top-0 w-[500px] h-full bg-[#152b55]/95 transform transition-transform duration-300 ease-in-out"
        style={{ transform: showRightPanel ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="flex items-center bg-[#011741] py-12 px-5 mb-6">
          {showRightPanel && (
            <button 
              onClick={handleBackClick}
              className="mr-4 text-2xl hover:text-gray-300 transition-colors"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          <h3 className="text-2xl">{selectedSubSetting ? selectedSubSetting.label : selectedSetting?.label || 'Settings'}</h3>
        </div>

        <div className="px-6">
          {selectedSetting && !selectedSubSetting && (
            <>
              <p className="font-semibold text-gray-300 mb-4">
                {selectedSetting.description}
              </p>
              <div className="flex flex-col">
                {selectedSetting.subSettings?.map((subSetting) => (
                  <button
                    key={subSetting.label}
                    onClick={() => handleSubSettingClick(subSetting)}
                    className="text-2xl py-5 text-left font-semibold hover:bg-[#153369] transition-colors duration-200 px-4 rounded"
                  >
                    {subSetting.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {selectedSubSetting && selectedSubSetting.options && (
            <div className="flex flex-col gap-4">
              {selectedSubSetting.options.map((option) => (
                <button
                  key={option}
                  className="text-xl py-3 px-4 text-left font-semibold hover:bg-[#153369] transition-colors duration-200 rounded"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="fixed left-[calc(50%+250px)] top-1/4 max-w-md text-center text-gray-300 text-xl">
        {description}
      </div>
    </div>
  );
}

export default Settings;
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { TabType } from '../App';

type Props = {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
};

function Header({ activeTab, onTabChange }: Props) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const amPm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes} ${amPm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center px-12 py-4 mt-8">
      <div className="nav">
        {[
          { label: 'Home', value: 'home' },
          { label: 'Guide', value: 'guide' },
          { label: 'On Demand', value: 'onDemand' },
          { label: 'Sports', value: 'sports' },
          { label: 'DVR', value: 'dvr' },
          { label: 'Apps', value: 'apps' }
        ].map(({ label, value }) => (
          <span
            key={value}
            className={clsx(
              'mr-6 px-3 py-2 cursor-pointer font-bold text-white rounded-3xl transition-all duration-300',
              {
                'hover:bg-white hover:text-[#0c1c3a]': true,
                'bg-white text-[#0c1c3a]': activeTab === value
              }
            )}
            onClick={() => onTabChange(value as TabType)}
          >
            {label}
          </span>
        ))}
        <span className="mr-6 cursor-pointer">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <span
          className="cursor-pointer"
          onClick={() => onTabChange('settings')}
        >
          <FontAwesomeIcon icon={faCog} />
        </span>
      </div>
      <div className="flex items-center">
        <span className="mr-4 text-xl">
          <span className="font-black">Optimum</span>
          <span className="text-[#f66608] font-black">.</span>
          tv
        </span>
        <span className="text-xl font-black">{currentTime}</span>
      </div>
    </div>
  );
}

export default Header;
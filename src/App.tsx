import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Guide from './components/Guide';
import OnDemand from './components/OnDemand';
import Sports from './components/Sports';
import DVR from './components/DVR';
import Apps from './components/Apps';
import Settings from './components/Settings';
import Overlay from './components/Overlay';

export type TabType = 'home' | 'guide' | 'onDemand' | 'sports' | 'dvr' | 'apps' | 'settings';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'guide':
        return <Guide />;
      case 'onDemand':
        return <OnDemand />;
      case 'sports':
        return <Sports />;
      case 'dvr':
        return <DVR />;
      case 'apps':
        return <Apps />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c1c3a] text-white">
      {showOverlay && <Overlay />}
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </div>
  );
}

export default App;
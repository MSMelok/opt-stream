import CurrentChannel from "@/components/home/CurrentChannel";
import RecentChannels from "@/components/home/RecentChannels";
import FavoriteApps from "@/components/home/FavoriteApps";
import PlayNext from "@/components/home/PlayNext";
import TrendingSection from "@/components/home/TrendingSection";
import LiveSports from "@/components/home/LiveSports";
import QuickTips from "@/components/home/QuickTips";
import {
  currentChannel,
  recentChannels,
  favoriteApps,
  playNextItems,
  trendingTVItems,
  trendingOnDemandItems,
  sportsEvents,
  quickTips,
} from "@/data/mockData";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <CurrentChannel channel={currentChannel} />
      <RecentChannels channels={recentChannels} />
      <FavoriteApps apps={favoriteApps} />
      <PlayNext items={playNextItems} />
      <TrendingSection title="Trending: TV" items={trendingTVItems} />
      <TrendingSection
        title="Trending: On Demand"
        items={trendingOnDemandItems}
      />
      <LiveSports events={sportsEvents} />
      <QuickTips tips={quickTips} />
    </main>
  );
};

export default Home;

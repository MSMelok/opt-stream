import React from 'react';

function Home() {
  const recentChannels = [
    { src: '/assets/amcMedia.jpg', alt: 'AMC' },
    { src: '/assets/historyChannel.jpg', alt: 'History Channel' },
    { src: '/assets/news12Channel.png', alt: 'News 12' },
    { src: '/assets/tlcChannel.png', alt: 'TLC' },
    { src: '/assets/chedderChannel.jpg', alt: 'Chedder' }
  ];

  const favoriteApps = [
    { src: '/assets/netflexApp.png', alt: 'Netflix' },
    { src: '/assets/primeVideoApp.jpg', alt: 'Prime Video' },
    { src: '/assets/maxApp.jpeg', alt: 'Max' },
    { src: '/assets/appleTvApp.jpg', alt: 'Apple TV' },
    { src: '/assets/starzPlayApp.jpg', alt: 'Starz' }
  ];

  return (
    <div className="p-12">
      <div className="featured-program">
        <h2 className="text-4xl font-bold">Expedition Unknown</h2>
        <div className="flex items-center gap-12 pl-5 text-base mt-4">
          <img src="/assets/Discovery_Logo.png" alt="Discovery Channel Logo" className="w-12" />
          <span>4:00 PM - 5:00 PM</span>
        </div>
        <div className="flex mt-3 mb-12">
          <button className="watch-now mr-2">Watch Now</button>
          <button className="more-info">More Info</button>
        </div>
      </div>

      <div className="recent-channels mb-8">
        <h3 className="text-lg text-gray-400 mb-4">Recent Channels</h3>
        <div className="flex gap-6 overflow-hidden">
          {recentChannels.map((channel) => (
            <img
              key={channel.alt}
              src={channel.src}
              alt={channel.alt}
              className="w-72 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>

      <div className="favorite-apps">
        <h3 className="text-lg text-gray-400 mb-4">Favorite Apps</h3>
        <div className="flex gap-6 overflow-hidden">
          {favoriteApps.map((app) => (
            <img
              key={app.alt}
              src={app.src}
              alt={app.alt}
              className="w-72 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
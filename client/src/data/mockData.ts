// Channel Data
export interface Channel {
  id: number;
  name: string;
  logo: string;
  currentShow?: {
    title: string;
    startTime: string;
    endTime: string;
  };
}

export const currentChannel: Channel = {
  id: 1,
  name: "News 12 Long Island",
  logo: "https://gray-wwny-prod.cdn.arcpublishing.com/resizer/KTwdFuRLKHDzJxPHpnEr9E4D7JY=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/CJKPACR4KNBMVDSDZPG5NGLZTU.jpg",
  currentShow: {
    title: "News 12 Morning Edition",
    startTime: "10:20 AM",
    endTime: "11:00 AM",
  },
};

export const recentChannels: Channel[] = [
  {
    id: 2,
    name: "HGTV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/HGTV_US_Logo_2015.svg/1200px-HGTV_US_Logo_2015.svg.png",
  },
  {
    id: 3,
    name: "HLN",
    logo: "https://cdn.cookielaw.org/logos/95d4b6ff-c962-4b4e-a38e-8fd9e151eb17/0d01abde-27a4-4d22-b55d-fdf8d6a54f1a/e180dbf7-2ac9-4a4b-bd06-ebbf8dc392bb/HLN_Logo.png",
  },
  {
    id: 4,
    name: "Food Network",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Food_Network_New_Logo.png",
  },
  {
    id: 5,
    name: "Bravo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bravo_TV.svg/1200px-Bravo_TV.svg.png",
  },
  {
    id: 6,
    name: "HBO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/HBO_logo.svg/2560px-HBO_logo.svg.png",
  },
];

// Streaming App Data
export interface StreamingApp {
  id: number;
  name: string;
  logo: string;
}

export const favoriteApps: StreamingApp[] = [
  {
    id: 1,
    name: "Netflix",
    logo: "https://cdn.mos.cms.futurecdn.net/Yy247gYvzaMZXprhZHXy4E.jpg",
  },
  {
    id: 2,
    name: "Prime Video",
    logo: "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
  },
  {
    id: 3,
    name: "Disney+",
    logo: "https://www.pngmart.com/files/22/Disney-Plus-Logo-PNG-Image.png",
  },
  {
    id: 4,
    name: "YouTube",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1200px-YouTube_play_buttom_icon_%282013-2017%29.svg.png",
  },
  {
    id: 5,
    name: "Hulu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png",
  },
];

// Content Item Data
export interface ContentItem {
  id: number;
  title: string;
  image: string;
  subtitle?: string;
  isNew?: boolean;
}

export const playNextItems: ContentItem[] = [
  {
    id: 1,
    title: "Spain vs. USA",
    image: "https://s3.amazonaws.com/thumbnails.thecrimson.com/photos/2018/03/04/204801_1329257.jpg.1500x1000_q95_crop-smart_upscale.jpg",
    subtitle: "Continue watching",
  },
  {
    id: 2,
    title: "The Ghosties",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Ghostly_Trio_of_Casper_%28Harvey_Comics%29.jpg/250px-Ghostly_Trio_of_Casper_%28Harvey_Comics%29.jpg",
    subtitle: "Continue watching",
  },
  {
    id: 3,
    title: "Friends",
    image: "https://media.wired.com/photos/607bec910ad3a9162a307a0c/master/pass/games_friends_mprfmr.jpg",
    subtitle: "S7:E14",
  },
];

export const trendingTVItems: ContentItem[] = [
  {
    id: 1,
    title: "CNN NEWSROOM LIVE",
    image: "https://www.cnn.com/cnn-logo.png",
  },
  {
    id: 2,
    title: "definitely, maybe",
    image: "https://tvseriesfinale.com/wp-content/uploads/2015/10/Definitely_Maybe.jpg",
  },
  {
    id: 3,
    title: "EYEWITNESS NEWS 7",
    image: "https://www.abc7ny.com/assets/svg/wabc/eyewitness-news-logo.svg",
  },
  {
    id: 4,
    title: "NO DEAL",
    image: "https://m.media-amazon.com/images/M/MV5BNDYzNjAzMTYwOF5BMl5BanBnXkFtZTgwNjcwNzY1NTM@._V1_.jpg",
    isNew: true,
  },
];

export const trendingOnDemandItems: ContentItem[] = [
  {
    id: 1,
    title: "Elemental",
    image: "https://m.media-amazon.com/images/M/MV5BODZmYTY4ZmMtN2M3Ni00YWI2LTkxZTUtYzU4MzYzMzI2YzRjXkEyXkFqcGdeQXVyMTAzNjYwMjIz._V1_.jpg",
    subtitle: "On Demand",
  },
  {
    id: 2,
    title: "Elemental",
    image: "https://m.media-amazon.com/images/M/MV5BODZmYTY4ZmMtN2M3Ni00YWI2LTkxZTUtYzU4MzYzMzI2YzRjXkEyXkFqcGdeQXVyMTAzNjYwMjIz._V1_.jpg",
    subtitle: "On Demand",
  },
  {
    id: 3,
    title: "Flip or Flop",
    image: "https://i.ytimg.com/vi/eVX5rWRh-SM/maxresdefault.jpg",
    subtitle: "On Demand",
  },
  {
    id: 4,
    title: "Flip or Flop",
    image: "https://i.ytimg.com/vi/eVX5rWRh-SM/maxresdefault.jpg",
    subtitle: "On Demand",
  },
];

// Sports Data
export interface SportEvent {
  id: number;
  title: string;
  image: string;
  isLive: boolean;
  teams?: {
    home: string;
    away: string;
  };
  logo?: string;
}

export const sportsEvents: SportEvent[] = [
  {
    id: 1,
    title: "Soccer",
    image: "https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg",
    isLive: true,
    teams: {
      home: "CAN",
      away: "NED",
    },
  },
  {
    id: 2,
    title: "Track & Field",
    image: "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDgzNDc1NzQwMjk3/usain-bolt-wins-gold-in-the-mens-100m-final-at-the-london-2012-olympic-games.jpg",
    isLive: true,
  },
  {
    id: 3,
    title: "Tennis: US Open",
    image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/5SWKFYISWMI6TBZTJDEHENPTSY.jpg&w=1440",
    isLive: false,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/USOPEN.svg",
  },
];

// Quick Tips Data
export interface QuickTip {
  id: number;
  title: string;
  icon: string;
}

export const quickTips: QuickTip[] = [
  {
    id: 1,
    title: "Pairing you remote",
    icon: "wifi",
  },
  {
    id: 2,
    title: "Guide",
    icon: "list",
  },
  {
    id: 3,
    title: "Home menu",
    icon: "home",
  },
  {
    id: 4,
    title: "On Demand",
    icon: "video",
  },
];

// Settings Data
export interface SettingItem {
  id: number;
  title: string;
  type: "link" | "toggle" | "value";
  value?: string;
  isActive?: boolean;
  helpText?: string;
}

export const settingsItems: SettingItem[] = [
  {
    id: 1,
    title: "Favorite Channels",
    type: "link",
    helpText:
      "You can set your favorite channels, then you can filter the guide to only show your favorite channels.",
  },
  {
    id: 2,
    title: "DVR Preferences",
    type: "link",
    helpText:
      "Customize your DVR settings including recording options, storage management and series preferences.",
  },
  {
    id: 3,
    title: "Secondary Audio Program (SAP)",
    type: "toggle",
    value: "ON",
    helpText:
      "Enable or disable Secondary Audio Program which provides additional audio tracks for programs.",
  },
  {
    id: 4,
    title: "Parental Controls",
    type: "toggle",
    value: "OFF",
    helpText:
      "Set up parental controls to restrict content based on ratings, channels or time of day.",
  },
  {
    id: 5,
    title: "Purchase PIN",
    type: "toggle",
    value: "OFF",
    helpText:
      "Create a PIN to prevent unauthorized purchases of movies, shows or other premium content.",
  },
  {
    id: 6,
    title: "Default Channel",
    type: "value",
    value: "Last Channel",
    helpText:
      "Choose which channel should appear when you first turn on your TV.",
  },
  {
    id: 7,
    title: "My Account",
    type: "link",
    helpText:
      "View and manage your account information, billing details and subscription options.",
  },
];

export const generalSettingsItems: SettingItem[] = [
  {
    id: 8,
    title: "Accessibility",
    type: "link",
    helpText:
      "Adjust closed captions, audio descriptions, text size and other accessibility features.",
  },
  {
    id: 9,
    title: "Device & Remote Settings",
    type: "link",
    helpText:
      "Access settings for your device and remote, including network configuration, accounts, apps and more.",
  },
  {
    id: 10,
    title: "Help",
    type: "link",
    helpText:
      "Find help articles, troubleshooting guides and support contact information.",
  },
];

// Device Settings Data
export interface DeviceSetting {
  id: number;
  title: string;
  icon: string;
  subtitle?: string;
}

export const deviceSettings: DeviceSetting[] = [
  {
    id: 1,
    title: "Network & Internet",
    icon: "wifi",
    subtitle: "Ethernet connected",
  },
  {
    id: 2,
    title: "Accounts & sign-in",
    icon: "user",
  },
  {
    id: 3,
    title: "Apps",
    icon: "apps",
  },
  {
    id: 4,
    title: "Device Preferences",
    icon: "tv",
  },
  {
    id: 5,
    title: "TV settings",
    icon: "settings",
  },
  {
    id: 6,
    title: "Remotes & accessories",
    icon: "remote",
  },
];

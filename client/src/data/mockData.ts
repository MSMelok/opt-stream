// Channel Data
export interface Channel {
  id: number;
  name: string;
  logo: string;
  number?: number;
  favorite?: boolean;
  currentShow?: {
    title: string;
    startTime: string;
    endTime: string;
    description?: string;
    tags?: string[];
  };
}

export interface Program {
  id: number;
  title: string;
  startTime: string;
  endTime: string;
  isNew?: boolean;
  description?: string;
  channel: number;
}

export const currentChannel: Channel = {
  id: 1,
  name: "News 12 Long Island",
  logo: "https://gray-wwny-prod.cdn.arcpublishing.com/resizer/KTwdFuRLKHDzJxPHpnEr9E4D7JY=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/CJKPACR4KNBMVDSDZPG5NGLZTU.jpg",
  number: 12,
  favorite: true,
  currentShow: {
    title: "News 12 Morning Edition",
    startTime: "10:20 AM",
    endTime: "11:00 AM",
    description: "Breaking news and top stories from Long Island.",
    tags: ["News", "Local", "HD", "CC"]
  },
};

export const recentChannels: Channel[] = [
  {
    id: 2,
    name: "HGTV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/HGTV_US_Logo_2015.svg/1200px-HGTV_US_Logo_2015.svg.png",
    number: 65,
    favorite: true,
  },
  {
    id: 3,
    name: "HLN",
    logo: "https://cdn.cookielaw.org/logos/95d4b6ff-c962-4b4e-a38e-8fd9e151eb17/0d01abde-27a4-4d22-b55d-fdf8d6a54f1a/e180dbf7-2ac9-4a4b-bd06-ebbf8dc392bb/HLN_Logo.png",
    number: 58,
    favorite: false,
  },
  {
    id: 4,
    name: "Food Network",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Food_Network_New_Logo.png",
    number: 71,
    favorite: true,
  },
  {
    id: 5,
    name: "Bravo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bravo_TV.svg/1200px-Bravo_TV.svg.png",
    number: 44,
    favorite: false,
  },
  {
    id: 6,
    name: "HBO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/HBO_logo.svg/2560px-HBO_logo.svg.png",
    number: 301,
    favorite: true,
  },
];

// Guide Data
export const guideChannels: Channel[] = [
  {
    id: 7,
    name: "News 12 Long Island",
    logo: "https://gray-wwny-prod.cdn.arcpublishing.com/resizer/KTwdFuRLKHDzJxPHpnEr9E4D7JY=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/CJKPACR4KNBMVDSDZPG5NGLZTU.jpg",
    number: 12,
    favorite: true,
  },
  {
    id: 8,
    name: "PBS",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/PBS_logo.svg/1200px-PBS_logo.svg.png",
    number: 13,
    favorite: true,
  },
  {
    id: 9,
    name: "i24 News",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/LOGO_i24NEWS.png/1200px-LOGO_i24NEWS.png",
    number: 14,
    favorite: false,
  },
  {
    id: 10,
    name: "QVC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/QVC_logo_2019.svg/2560px-QVC_logo_2019.svg.png",
    number: 15,
    favorite: false,
  },
  {
    id: 11,
    name: "Telemundo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Telemundo_logo_2018.svg/2560px-Telemundo_logo_2018.svg.png",
    number: 16,
    favorite: true,
  },
];

export const guidePrograms: Program[] = [
  {
    id: 1,
    title: "News 12 Long Island",
    startTime: "10:40 AM",
    endTime: "11:00 AM",
    isNew: true,
    channel: 12,
  },
  {
    id: 2,
    title: "News 12 Long Island",
    startTime: "11:00 AM",
    endTime: "11:30 AM",
    isNew: true,
    channel: 12,
  },
  {
    id: 3,
    title: "News 12 Long Island",
    startTime: "11:30 AM",
    endTime: "12:00 PM",
    isNew: true,
    channel: 12,
  },
  {
    id: 4,
    title: "News 12 Long Island",
    startTime: "12:00 PM",
    endTime: "12:30 PM",
    isNew: false,
    channel: 12,
  },
  {
    id: 5,
    title: "Work It Out Wombats!",
    startTime: "10:40 AM",
    endTime: "11:00 AM",
    channel: 13,
  },
  {
    id: 6,
    title: "Let's Learn",
    startTime: "11:00 AM",
    endTime: "11:30 AM",
    channel: 13,
  },
  {
    id: 7,
    title: "Elinor Wonders Why",
    startTime: "12:00 PM",
    endTime: "12:30 PM",
    channel: 13,
  },
  {
    id: 8,
    title: "i24news Desk",
    startTime: "10:40 AM",
    endTime: "11:00 AM",
    channel: 14,
  },
  {
    id: 9,
    title: "i24news Desk",
    startTime: "11:00 AM",
    endTime: "11:30 AM",
    channel: 14,
  },
  {
    id: 10,
    title: "i24news Desk",
    startTime: "11:30 AM",
    endTime: "12:00 PM",
    channel: 14,
  },
  {
    id: 11,
    title: "Middle East Now",
    startTime: "12:00 PM",
    endTime: "12:30 PM",
    channel: 14,
  },
  {
    id: 12,
    title: "Denim & Co.",
    startTime: "10:40 AM",
    endTime: "11:30 AM",
    channel: 15,
  },
  {
    id: 13,
    title: "Q Check - A Big Deal",
    startTime: "12:00 PM",
    endTime: "12:30 PM",
    isNew: true,
    channel: 15,
  },
  {
    id: 14,
    title: "Hoy día",
    startTime: "10:40 AM",
    endTime: "11:00 AM",
    channel: 16,
  },
  {
    id: 15,
    title: "Caso cerrado",
    startTime: "11:00 AM",
    endTime: "11:30 AM",
    channel: 16,
  },
  {
    id: 16,
    title: "Acceso total",
    startTime: "11:30 AM",
    endTime: "12:00 PM",
    channel: 16,
  },
  {
    id: 17,
    title: "Noticiero 47 Telemundo",
    startTime: "12:00 PM",
    endTime: "12:30 PM",
    channel: 16,
  },
];

// Streaming App Data
export interface StreamingApp {
  id: number;
  name: string;
  logo: string;
  installed?: boolean;
}

export const favoriteApps: StreamingApp[] = [
  {
    id: 1,
    name: "Netflix",
    logo: "https://cdn.mos.cms.futurecdn.net/Yy247gYvzaMZXprhZHXy4E.jpg",
    installed: true,
  },
  {
    id: 2,
    name: "Prime Video",
    logo: "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
    installed: true,
  },
  {
    id: 3,
    name: "Disney+",
    logo: "https://www.pngmart.com/files/22/Disney-Plus-Logo-PNG-Image.png",
    installed: true,
  },
  {
    id: 4,
    name: "YouTube",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1200px-YouTube_play_buttom_icon_%282013-2017%29.svg.png",
    installed: true,
  },
  {
    id: 5,
    name: "Hulu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png",
    installed: true,
  },
];

export const installedApps: StreamingApp[] = [
  {
    id: 6,
    name: "Google Play Store",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_logo.svg/2560px-Google_Play_Store_logo.svg.png",
    installed: true,
  },
  {
    id: 1,
    name: "Netflix",
    logo: "https://cdn.mos.cms.futurecdn.net/Yy247gYvzaMZXprhZHXy4E.jpg",
    installed: true,
  },
  {
    id: 4,
    name: "YouTube",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/YouTube_play_buttom_icon_%282013-2017%29.svg/1200px-YouTube_play_buttom_icon_%282013-2017%29.svg.png",
    installed: true,
  },
  {
    id: 7,
    name: "Max",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_Max_Logo.svg/2560px-HBO_Max_Logo.svg.png",
    installed: true,
  },
  {
    id: 5,
    name: "Hulu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png",
    installed: true,
  },
  {
    id: 3,
    name: "Disney+",
    logo: "https://www.pngmart.com/files/22/Disney-Plus-Logo-PNG-Image.png",
    installed: true,
  },
  {
    id: 2,
    name: "Prime Video",
    logo: "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png",
    installed: true,
  },
  {
    id: 8,
    name: "Xumo Play",
    logo: "https://play-lh.googleusercontent.com/pD7I_7kkw-4GtUNUwGOXVBW_HUbKr7IRNjhq30x-7BhN51KKnC_s4G3WuBOG-voJ-EI",
    installed: true,
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

// Accessibility Settings
export interface AccessibilitySetting {
  id: number;
  title: string;
  type: "toggle" | "link";
  value?: boolean;
  experimental?: boolean;
}

export const accessibilitySettings: AccessibilitySetting[] = [
  {
    id: 1,
    title: "Captions",
    type: "link",
  },
  {
    id: 2,
    title: "High contrast text",
    type: "toggle",
    value: false,
    experimental: true,
  },
  {
    id: 3,
    title: "Text to speech",
    type: "link",
  },
  {
    id: 4,
    title: "Accessibility shortcut",
    type: "link",
  },
];

export const accessibilityServices: AccessibilitySetting[] = [
  {
    id: 5,
    title: "TalkBack",
    type: "toggle",
    value: false,
  },
  {
    id: 6,
    title: "Switch Access",
    type: "toggle",
    value: false,
  },
];

// Account Details
export interface AccountDetails {
  id: string;
  displayName: string;
  videoService: string;
  internetService: string;
}

export const accountInfo: AccountDetails = {
  id: "family_member",
  displayName: "Optimum ID",
  videoService: "Optimum Premier",
  internetService: "Optimum 100",
};

// Guide Options
export interface GuideOption {
  id: number;
  title: string;
  value: string;
  type: "filter" | "jump";
  options?: string[];
}

export const guideOptions: GuideOption[] = [
  {
    id: 1,
    title: "Show",
    value: "All Channels",
    type: "filter",
    options: ["All Channels", "Favorites", "HD Only", "News", "Sports", "Movies"],
  },
  {
    id: 2,
    title: "Date",
    value: "Today",
    type: "jump",
    options: ["Today", "Tomorrow", "Saturday", "Sunday", "Monday"],
  },
  {
    id: 3,
    title: "Time",
    value: "Now",
    type: "jump",
    options: ["Now", "Morning", "Afternoon", "Evening", "Late Night"],
  },
];

// DVR Data
export interface DvrItem {
  id: number;
  title: string;
  image: string;
  isFolder?: boolean;
  isRecording?: boolean;
}

export const dvrItems: DvrItem[] = [
  {
    id: 1,
    title: "News 12",
    image: "https://gray-wwny-prod.cdn.arcpublishing.com/resizer/KTwdFuRLKHDzJxPHpnEr9E4D7JY=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/CJKPACR4KNBMVDSDZPG5NGLZTU.jpg",
    isFolder: true,
  },
  {
    id: 2,
    title: "Friends",
    image: "https://media.wired.com/photos/607bec910ad3a9162a307a0c/master/pass/games_friends_mprfmr.jpg",
    isFolder: true,
  },
  {
    id: 3,
    title: "FOX 5 News",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Fox_News_Channel_logo.svg/1280px-Fox_News_Channel_logo.svg.png",
    isFolder: false,
  },
  {
    id: 4,
    title: "Bob's Burgers",
    image: "https://resizing.flixster.com/oaptHvzbRXzO92-mE8TnqUZOg0c=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI4NjcyLndlYnA=",
    isFolder: false,
    isRecording: true,
  },
  {
    id: 5,
    title: "House Hunters",
    image: "https://upload.wikimedia.org/wikipedia/en/1/16/House_Hunters_logo.png",
    isFolder: false,
  },
  {
    id: 6,
    title: "Soccer Match",
    image: "https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg",
    isFolder: false,
    isRecording: true,
  },
  {
    id: 7,
    title: "Iron Man 2",
    image: "https://m.media-amazon.com/images/M/MV5BZWFjZTIwMzEtNzJiYy00MWQ0LWE4ZTAtOTFlMGJlN2VjNjI2XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
    isFolder: false,
  },
];

// Sports Page Data
export interface SportCategory {
  id: number;
  name: string;
  active?: boolean;
}

export const sportsCategories: SportCategory[] = [
  { id: 1, name: "My Sports", active: true },
  { id: 2, name: "NBA" },
  { id: 3, name: "MLB" },
  { id: 4, name: "NHL" },
  { id: 5, name: "Golf" },
  { id: 6, name: "NFL" },
  { id: 7, name: "Soccer" },
  { id: 8, name: "NASCAR" },
  { id: 9, name: "Browse" },
];

// On Demand Categories
export interface OnDemandCategory {
  id: number;
  name: string;
  active?: boolean;
}

export const onDemandCategories: OnDemandCategory[] = [
  { id: 1, name: "10x My On Demand", active: true },
  { id: 2, name: "Movies" },
  { id: 3, name: "TV Networks" },
  { id: 4, name: "Free On Demand" },
  { id: 5, name: "TV Shows" },
  { id: 6, name: "Kids" },
  { id: 7, name: "En Español" },
  { id: 8, name: "Adult" },
];

export const onDemandContent: ContentItem[] = [
  {
    id: 1,
    title: "Lo que Callamos las Mujeres",
    image: "https://m.media-amazon.com/images/M/MV5BNDhjYjk2NDEtZmQ1MS00MjA1LTg1MDQtZDM3NzIzNDkyYjA0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    id: 2,
    title: "Harlem Globetrotters",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Harlem_Globetrotters_Logo.svg",
  },
  {
    id: 3,
    title: "Health & Happiness",
    image: "https://www.mayoclinic.org/-/media/web/gbs/shared/images/socialmedia/mc-logo-socialmedia.jpg",
  },
  {
    id: 4,
    title: "Homeland",
    image: "https://flxt.tmsimg.com/assets/p8910057_b_v8_aa.jpg",
  },
  {
    id: 5,
    title: "Larry Mania",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Larry_David_by_Patrick_McMullan.jpg/330px-Larry_David_by_Patrick_McMullan.jpg",
  },
  {
    id: 6,
    title: "The Sprite Lola",
    image: "https://m.media-amazon.com/images/M/MV5BODI4OTk1ODY3N15BMl5BanBnXkFtZTgwMDI0MzA1OTE@._V1_.jpg",
  },
  {
    id: 7,
    title: "Journey",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e3/Amazing_Journey_%28The_Story_of_The_Who%29.jpg",
  },
  {
    id: 8,
    title: "Elemental",
    image: "https://m.media-amazon.com/images/M/MV5BODZmYTY4ZmMtN2M3Ni00YWI2LTkxZTUtYzU4MzYzMzI2YzRjXkEyXkFqcGdeQXVyMTAzNjYwMjIz._V1_.jpg",
  },
  {
    id: 9,
    title: "La Virgen de Guadalupe",
    image: "https://images.prismic.io/catholic-faith-store/OTA1MWJkMGEtOTVlYy00MzJkLTliOGQtMWFkNGQ2OGZkOGZk_our-lady-of-guadalupe-guide.jpg",
  },
];

import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "#about",
  },
  {
    id: "1",
    title: "Services",
    url: "#services",
  },
  {
    id: "2",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "4",
    title: "Get Started",
    url: "#",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Benzfinance is a digital platform designed to make investing in environmental projects easy, transparent, and impactful",
  "Think of it as a place where people can support projects that help the environment—like reforestation, renewable energy, or ocean clean-up—and, in return, earn financial benefits as these projects make a positive difference.",
  "Benzfinance will allow users to swap one token for another through the use of automated liquidity pools powered by the Benzfinance Protocol smart contracts.",
  "Benzfinance offers users a ton of feature, such as liquidity pools, yield farming activities, unlimited token swap, smart trade AI, smart predict and P2P services. More information below."
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Smart Trading with AI",
    text: "We have built and Smart Trading AI that will assists newbies in the cryto and web3 space. Users can complete transactions just by interacting with the Smart Trade AI.",
    date: "November 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  // {
  //   id: "1",
  //   title: "Gamification",
  //   text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap2,
  // },
  {
    id: "1",
    title: "Trading AI customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "November 2024",
    status: "progress",
    imageUrl: roadmap3,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "LIQUIDITY POOLS",
    text: "Liquidity pools are created when two different tokens are added in equal amount on the Benzfinance's BenzSwap exchange to allow them to be traded against each other.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "1",
    title: "YIELD FARMING ACTIVITIES",
    text: "Benzfinance Protocol will allow for yield farming activities that will allow users to earn the exchange native token when they stake their liquidity provider tokens.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "2",
    title: "UNLIMITED TOKEN SWAP",
    text: "Benzfinance will be built on Shardeum Chain; therefore users will experience lower transaction fees compared to other blockchains.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "SMART TRADE AI",
    text: "Benzfinance has made trading seamless and fast for newbies in the Crypto and web3 industry through Smart Trade AI. Users can complete transactions just by interacting with the Smart Trade AI.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "4",
    title: "SMART PREDICT",
    text: "In our continuous quest to redefine decentralized finance, we are proud to present Smart Predict AI, a revolutionary addition to the Benzfinance ecosystem. SMART Predict AI harnesses the power of artificial intelligence to provide users with predictive insights into the dynamic cryptocurrency market.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "P2P",
    text: "P2P trading on Benzfinance allows users to directly interact with one another, eliminating the need for intermediary entities and providing a more seamless, trustless and secure trading experience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

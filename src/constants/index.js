import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

// Navigation  
export const navLists = ["Store*", "Mac*", "AiFone*", "Support(?)"];

// Highlight Sections  
export const highlightsSlides = [
  {
    id: 1,
    textLists: [
      "Introducing A17 Pro.",
      "A chip so powerful, it might heat your house.",
      "Performance that makes your old phone feel like a potato.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So overpriced."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "The AiFone 15 Pro Max has the",
      "longest optical zoom in AiFone history.",
      "For when you want to spy… professionally.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "Nobody knows what it does, but it's new."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

// Models  
export const models = [
  {
    id: 1,
    title: "AiFone 15 Pro in Titanium Beach Sand Luxury Edition",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "AiFone 15 Pro in Galactic Blue Titanium Ultra Premium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "AiFone 15 Pro in Arctic White Titanium Supreme Elegance",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "AiFone 15 Pro in Ninja Stealth Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

// Sizes  
export const sizes = [
  { label: '6.1"', value: "small but mighty" },
  { label: '6.7"', value: "big for no reason" },
];

// Footer Links  
export const footerLinks = [
  "Privacy Policy (that nobody reads)",
  "Terms of Use (just click accept)",
  "Sales Policy (pay and cry)",
  "Legal (we swear it’s legal)",
  "Site Map (for the lost souls)",
];

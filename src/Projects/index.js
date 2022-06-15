import { smarthmStructure, banner } from "./Smarthm";
import cryptoBanner from "./Cryptoverse/banner.webp";
import keepBanner from "./Keeper/keep-banner.webp";
import musicAppStucture from "./music-app";
const projects = [
  {
    featured: true,
    title: "Smarthm",
    slug: "smarthm",
    image: banner,
    description:
      "This app provide the functionality to control your smart home devices from your mobile, set alert, add automation to devices. Toggle device on specific time and much more. And yes with security and privacy because of its all new OfflineFirst technology.",
    tags: ["React Native", "Firebase", "Appcenter API", "playStore CLI"],
    githubLink: "",
    playStore: "https://play.google.com/store/apps/details?id=com.indivisible.smarthm",
    data: smarthmStructure,
  },
  {
    featured: true,
    title: "Keeper App",
    slug: "keeper",
    image: keepBanner,
    description:
      "A Clone app of Google's note taking app <a href='https://keep.google.com/' target='_blank' class='link-item' > Google Keep</a>. This app is built using React and Firebase. It has all the features of Google keep. Adding, editing and deleting Notes, Colors, Labels, etc",
    tags: ["ReactJs", "Firebase@V9", "Context-API", "Google-auth"],
    githubLink: "https://github.com/alaspuresujay/google-keep/",
    externalLink: "https://alaspuresujay.github.io/google-keep/",
    data: null,
  },
  {
    featured: true,
    title: "Cryptoverse",
    slug: "cryptoverse",
    image: cryptoBanner,
    description:
      "As name says this app provides all the info regarding crypto, exchanges, news, details, live price, chart history and a lot more...",
    tags: ["React", "Ant-Design", "RapidAPI", "Redux/toolkit"],
    githubLink: "https://github.com/alaspuresujay/cryptoverse/",
    externalLink: "https://alaspuresujay.github.io/cryptoverse/",
    data: null,
  },
  {
    title: "React Gallery App",
    slug: "gallery-app",
    description:
      "A Simple Gallary App. Photo upload to Firebase Storage, Realtime photo preview with Interactive animation using framer Motion",
    tags: ["ReactJs", "Firebase", "Framer-Motion"],
    githubLink: "https://github.com/alaspuresujay/react-galary",
    externalLink: "https://alaspuresujay.github.io/react-galary/",
    data: null,
  },
  {
    title: "Chrome Extension App - Scaler-Timer",
    slug: "scaler-timer",
    description:
      "A Simple time tracking extension for Scaler.com. It tracks the time taken by the user to solve the DSA problem. ",
    tags: ["Javascript", "Chrome-Extension"],
    githubLink: "https://github.com/alaspuresujay/scaler-timer",
    externalLink: null,
    data: null,
    case: false,
  },
  {
    title: "React Native Todo App",
    slug: "todo-app",
    description:
      "A Simple and Beautiful Todo App. Create todo and Separate the to-do items as per categories. Live Sync to Server.",
    tags: ["React Native", "Firebase"],
    githubLink: "https://github.com/alaspuresujay/todo-app/",
    externalLink: "https://expo.dev/@alaspuresujay/todo-app",
    data: null,
    case: false,
  },

  {
    title: "Music Redesigned",
    slug: "music-redesigned",
    description: `This is a redesign of YouTube Music. In this design, I mostly tried to create a dark and artistic space for users to interact with.`,
    tags: ["ReactJS", "RapidAPI", "Redux/toolkit"],
    githubLink: "https://github.com/alaspuresujay/music-redesigned",
    // externalLink: "https://music-redesigned.netlify.app/",
    data: musicAppStucture,
    case: true,
  },
  {
    title: "Person Movement Detection",
    slug: "person-movement-detection",
    description: `Detect the person movement in the room, Capture their images and send mail to the provided ID.`,
    tags: ["Python", "OpenCV", "Computer Vision"],
    githubLink: "https://github.com/alaspuresujay/Person-Detection",
    // externalLink: "#",
    data: null,
    case: false,
  },
  {
    title: "Image Color picker",
    slug: "image-color-picker",
    description: `Detect pixel colour over the image by Hovering the mouse over it`,
    tags: ["Python", "OpenCV", "Computer Vision"],
    githubLink: "https://github.com/alaspuresujay/color-detection",
    youtubeLink: "https://youtu.be/1-b7aUZ1dzo",
    data: null,
    case: false,
  },
];

export default projects;

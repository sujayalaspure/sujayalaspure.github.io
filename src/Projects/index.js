import { smarthmStructure, banner } from "./Smarthm";
import cryptoBanner from "./Cryptoverse/banner.png";
import keepBanner from "./Keeper/keep-banner.png";

const projects = [
  {
    title: "Smarthm",
    slug: "smarthm",
    image: banner,
    description:
      "This app provide the functionality to control your smart home devices from your mobile, set alert, add automation to devices. Toggle device on specific time and much more. And yes with security and privacy because of its all new OfflineFirst technology.",
    tags: ["React Native", "Firebase", "Appcenter API", "playStore CLI"],
    githubLink: "",
    playStore:
      "https://play.google.com/store/apps/details?id=com.indivisible.smarthm",
    data: smarthmStructure,
  },
  {
    title: "Keeper App",
    slug: "keeper",
    image: keepBanner,
    description:
      "A Clone app of Google's note taking app Google Keep. This app is built using React and Firebase. It has all the features of Google keep. Adding, editing and deleting Notes, Colors, Labels, etc",
    tags: ["ReactJs", "Firebase@V9", "Context-API", "Google-auth"],
    githubLink: "https://github.com/alaspuresujay/google-keep/",
    externalLink: "https://alaspuresujay.github.io/google-keep/",
    data: "",
  },
  {
    title: "Cryptoverse",
    slug: "cryptoverse",
    image: cryptoBanner,
    description:
      "As name says this app provides all the info regarding crypto, exchanges, news, details, live price, chart history and a lot more...",
    tags: ["React", "Ant-Design", "RapidAPI", "Redux/toolkit"],
    githubLink: "https://github.com/alaspuresujay/cryptoverse/",
    externalLink: "https://alaspuresujay.github.io/cryptoverse/",
    data: "",
  },
];

export const OtherProjects = [
  {
    title: "React Gallery App",
    slug: "gallery-app",
    description:
      "A Simple Gallary App. Photo upload to Firebase Storage, Realtime photo preview with Interactive animation using framer Motion",
    tags: ["ReactJs", "Firebase", "Framer-Motion"],
    githubLink: "https://github.com/alaspuresujay/react-galary",
    externalLink: "https://alaspuresujay.github.io/react-galary/",
  },
  {
    title: "React Native Todo App",
    slug: "todo-app",
    description:
      "A Simple and Beautiful Todo App. Create todo and Separate the to-do items as per categories. Live Sync to Server.",
    tags: ["React Native", "Firebase"],
    githubLink: "https://github.com/alaspuresujay/todo-app/",
    externalLink: "https://expo.dev/@alaspuresujay/todo-app",
  },

  {
    title: "Slack Clone",
    slug: "slack-clone",
    description:
      "This is Slack Clone built using ReactJs and Firebase, with functionality of Google Auth, Realtime Group messaging, etc.",
    tags: ["ReactJS", "Firebase"],
    githubLink: "https://github.com/alaspuresujay/slack-clone",
    externalLink: "https://alaspuresujay.github.io/slack-clone",
  },
  // {
  // 	title: 'Resort Booking App',
  // 	slug: 'resort-app',
  // 	image: banner,
  // 	description:
  // 		'This app provide the functionality to control your smart home devices from your mobile, set alert, add automation to devices. Toggle device on specific time and much more. And yes with security and privacy because of its all new OfflineFirst technology.',
  // 	tags: ['ReactJs', 'Contentful CMS'],
  // 	githubLink: 'https://github.com/alaspuresujay/resortapp',
  // 	externalLink: 'https://sujay-resort-app.netlify.app',
  // },
];

export default projects;

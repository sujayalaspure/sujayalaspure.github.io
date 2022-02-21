import homePageBanner from "./assets/home4.webp";
import img1 from "./assets/music-section.webp";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.webp";
const musicAppStucture = [
  { type: "bannerImage", value: { title: null, imgsrc: homePageBanner } },
  {
    type: "tophead",
    value: {
      caseName: "Music Redesigned",
      caseBio: "This is a redesign of YouTube Music",
    },
  },
  {
    type: "brief",
    value: {
      briefTitle: "The Design",
      content: `In this design, I mostly tried to create a dark and artistic space for users
In the dashboard section, I put a section called friend rooms where you can listen to a song with your friends and interact with them.
And in the radio section, you can listen to radios from different region across the india. You can also search for a song and listen to it.`,
      links: [
        {
          linkName: "Live Demo",
          src: "https://music-redesigned.netlify.app/",
        },
      ],
    },
  },
  {
    type: "bannerImage",
    value: {
      title: "The original design is designed by @Mahdi.design (dribble)",
      imgsrc:
        "https://cdn.dribbble.com/users/5080573/screenshots/17147578/media/71a6eb73cec9e79bc790aae08b377e7c.png",
    },
  },
  {
    type: "splitshow",
    value: {
      title: "",
      left: [
        {
          imgsrc: img1,
          caption: "Listen to your favourite songs",
        },
        {
          imgsrc: img3,
          caption: "",
        },
      ],
      right: [
        {
          imgsrc: img2,
          caption:
            "Special Thanks to @mahdi.design_ (Instagram) for this wonderful design",
        },
      ],
    },
  },
  {
    type: "brief",
    value: {
      briefTitle: "Some Future Work thoughts",
      content: `In the dashboard section, I will be adding a section called friend rooms where you can listen to a song with your friends and interact with them.`,
    },
  },
];

export default musicAppStucture;

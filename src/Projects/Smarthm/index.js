import icon from "./Assets/icon.webp"
import logo from "./Assets/logo.png"
import logo_name from "./Assets/logo_name.webp"
import designSys from "./Assets/designSystem.webp"
import banner from "./Assets/banner3.webp"
import profileScreen from "./Assets/profile.webp"
import loginui from "./Assets/loginui.webp"
import home from "./Assets/home.webp"
import Drawer from "./Assets/drawer.webp"

export const SmartHMAssets = {banner, SmartHMLogo: logo}
export const smarthmStructure = [
  {type: "bannerImage", value: {title: "", imgsrc: banner}},
  {
    type: "tophead",
    value: {
      caseName: "SmartHM",
      caseBio: "Control All your home Devices from your fingertip",
    },
  },
  {
    type: "brief",
    value: {
      briefTitle: "The Challange",
      content: `Smarthm is an application to control all your smarthome appliances. Be it TV, light,
      Fan, or anything. The first and foremost important thing was to build an app which is user
      friendly, powerful and scalable at any extent. I choose to go with React Native because of cross
      platform and scalability. I audition dozens of design to keep app interaction simplest yet powerful.`,
      links: [
        {
          linkName: "Play Store",
          src: "https://play.google.com/store/apps/details?id=com.indivisible.smarthm",
        },
      ],
    },
  },
  {
    type: "bannerImage",
    value: {title: "The design won't leave you cold", imgsrc: designSys},
  },
  {
    type: "splitshow",
    value: {
      title: "",
      left: [
        {
          imgsrc: logo,
          caption: "Our first task was to give SmartHM a logotype and corporate identity.",
        },
        {imgsrc: logo_name, caption: ""},
        {
          imgsrc: home,
          caption: "The homepage style went through several phases and multiple iterations.",
        },
        {imgsrc: profileScreen, caption: ""},
        // { imgsrc: img1, caption: '' },
      ],
      right: [
        {imgsrc: icon, caption: ""},
        {
          imgsrc: loginui,
          caption: "To ease the user onboarding process, We have setup the login with email as well as Google auth.",
        },
        {imgsrc: Drawer, caption: ""},
      ],
    },
  },
  {
    type: "brief",
    value: {
      briefTitle: "Extra attention to detail development",
      content: `We were motivated to focus on every little detail including icon animation, to really enhance the user interaction.`,
    },
  },
]

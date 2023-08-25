import mock_1 from "./assets/mock_1.webp"
import mock_2 from "./assets/mock_2.webp"
import navigation_frame from "./assets/navigatgion-frame.webp"
import cover from "./assets/cover.webp"
import wireframe from "./assets/wireframe.png"
import home from "./assets/home.png"
import home2 from "./assets/home2.png"
import home3 from "./assets/home3.png"
import filter from "./assets/filter.png"
import scane from "./assets/scan.png"
import launch from "./assets/launch.png"
import delivery from "./assets/delivery.png"
import help from "./assets/help.png"
// import track from "./assets/track.png"
import track1 from "./assets/track1.png"
import Prolist from "./assets/products-list.png"
import orderSuccess from "./assets/55.png"
// import checkout from "./assets/33.png"
// import cart from "./assets/22.png"
import prodDetils1 from "./assets/12.png"
import prodDetils from "./assets/detail.png"
import orders from "./assets/66.png"
// import payment from "./assets/44.png"
import search from "./assets/search.png"
import drawer from "./assets/drawer.png"
import AdBanner from "./assets/ad-banner.png"
import AuthScreens from "./assets/auth.png"

export const GodrejInnardAssets = {
  mock_1,
  mock_2,
  navigation_frame,
  cover,
  wireframe,
  home,
  home2,
  home3,
  filter,
  AdBanner,
}

export const GodrejInnardStructure = [
  {
    type: "bannerImage",
    value: { title: "", imgsrc: cover },
  },
  {
    type: "tophead",
    value: {
      caseName: "Innards",
      caseBio: "Nursery Dedicated online market",
    },
  },
  {
    type: "brief",
    value: {
      briefTitle: "The Innards",
      content: `Innards provides an enjoyable browsing experience, enabling users to find beautiful plants suited to their lifestyle and environment. Appealing to a wide range of users. Innards is designed tobe playful and engaging, whilst ensuring legibility, intuitive navigation and a simple, streamlined checkout experience.`,
      links: [
        {
          linkName: "Designed By Amitesh",
          src: "https://archisapien.netlify.app/project1",
        },
      ],
    },
  },
  {
    type: "bannerImage",
    value: { title: "Wireframes", imgsrc: wireframe },
  },
  {
    type: "fullImage",
    value: { title: "", imgsrc: navigation_frame },
  },
  {
    type: "usecaseScenarios",
    value: {
      title: "Use Case Scenarios & Ideation",
      options: [
        {
          title: "Thinking out Loud 1",
          content:
            "Remembering the purchase date and recommending fetilizers and accessories as the plant grows! or may be a feature that recommends byproducts when user enters present plant health or condition.",
          gridArea: "1 / 1 / 2 / 4",
        },
        {
          children: [
            {
              title: "Thinking out Loud 2",
              content:
                "Person sees a plant on a garden/friends house but does not know the name, they can scan the photo.",
              gridArea: "2 / 1 / 3 / 3",
            },
            {
              title: "Thinking out Loud 3",
              content:
                "Nursery Plant business, the organic products demand increases on particular seasons, need to keep that in mind.",
              gridArea: "2 / 2 / 3 / 4",
            },
          ],
        },
        {
          title: "User Flow",
          content: `The user flow is designed to be simple and intuitive, with a clear path to purchase. The user can browse plants by category, or search for a specific plant. The user can then view the plant in more detail, and add it to their cart. The user can then checkout, or continue shopping.`,
          gridArea: "3 / 1 / 4 / 4",
        },
        {
          children: [
            {
              title: "",
              content: "Which products that the competitors sell are the best selling products?",
              gridArea: "4 / 1 / 5 / 2",
            },
            {
              title: "",
              content: "Which products that the competitors sell are the best selling products?",
              gridArea: "4 / 2 / 5 / 3",
            },
            {
              title: "",
              content:
                "Users prefer interfaces where they can select their next steps than typing. Therefore more selection buttons and less input feilds.",
              gridArea: "4 / 3 / 5 / 4",
            },
          ],
        },
        {
          title: "Thinking out Loud 4",
          content:
            "Like pinterest after boarding give the user the priviledge to chose from the types of plants or accessories item he/she/they like, so the app can recommend customized items. ",
          gridArea: "3 / 1 / 4 / 4",
        },
      ],
    },
  },
  {
    type: "fullImage",
    value: { title: "Onboarding", imgsrc: AuthScreens },
  },
  {
    type: "splitshow",
    value: {
      title: "Screens",
      left: [
        {
          imgsrc: home,
          caption: "Home & Explore",
        },
        { imgsrc: home2, caption: " Trustnet - Stars & Ratings" },
        { imgsrc: home3, caption: "Educating the User" },
        { imgsrc: search, caption: "Search & Discover" },
        { imgsrc: orders, caption: "My Orders & Previous Order " },

        {
          imgsrc: track1,
          caption:
            "An order tracking system is one that tracks goods from the moment the order is placed to when they are physically delivered to the destination location.",
        },
        { imgsrc: scane, caption: "View plant in your space with AR" },
        {
          imgsrc: launch,
          caption: "Appearance of the home screen on the day of the product launch, giving it the most priority.",
        },
      ],
      right: [
        { imgsrc: drawer, caption: "Profile Side Drawer" },
        {
          imgsrc: Prolist,
          caption:
            "The user will be able to see his or her orders, I tried to make the cart screen minimal and deliver. To decrease the level of stress users. experience when shopping for the latest products.",
        },
        { imgsrc: prodDetils, caption: "Product Details" },
        { imgsrc: prodDetils1, caption: "Detailed Summary" },
        { imgsrc: filter, caption: "" },
        { imgsrc: orderSuccess, caption: "" },
        {
          imgsrc: delivery,
          caption: "Priorities for the day to inform the user about the order status of the item ordered.",
        },
        { imgsrc: help, caption: "Help" },
      ],
    },
  },
  {
    type: "bannerImage",
    value: { title: "", imgsrc: AdBanner },
  },
]

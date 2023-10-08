import {InnardImages} from "./assets"

export const GodrejInnardAssets = {
  ...InnardImages,
}

// export const GodrejInnard: ProjectStructure = {
//   metadata: {
//     isFeatured: true,
//     thumbnail: AdBanner,
//     title: "Innards",
//     slug: "innard",
//     description: `Innards provides an enjoyable browsing experience, enabling users to find beautiful plants suited to their lifestyle and environment.`,
//     tags: ["React Native"],
//     isCaseStudy: false,
//   },
//   content: GodrejInnardStructure,
// }

export const GodrejInnardStructure = [
  {
    type: "bannerImage",
    value: {title: "", imgsrc: InnardImages.InnardCover},
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
    value: {title: "Wireframes", imgsrc: InnardImages.Wireframe},
  },
  {
    type: "fullImage",
    value: {title: "", imgsrc: InnardImages.NavigationFrame},
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
    value: {title: "Onboarding", imgsrc: InnardImages.OnBoarding},
  },
  {
    type: "screenshots",
    value: {
      title: "",
      content: [
        [
          {caption: "Signup", imgsrc: InnardImages.Signup},
          {caption: "", imgsrc: InnardImages.Login},
          {caption: "", imgsrc: InnardImages.OTPScreen},
        ],
        [
          {caption: "", imgsrc: InnardImages.HomeScreen},
          {caption: "Important info at your glance", imgsrc: InnardImages.HomescreenBanner},
          {caption: "", imgsrc: InnardImages.DrawerMenu, isNotch: true},
        ],
        [
          {caption: "", imgsrc: InnardImages.HomeToListScreen},
          // {caption: "", imgsrc: InnardImages.ProductList1},
          {caption: "", imgsrc: InnardImages.ListSwitch},
        ],
        [
          {caption: "", imgsrc: InnardImages.HomeToDetails},
          {caption: "", imgsrc: InnardImages.ProductDetailsScreen, isNotch: true},
          {caption: "", imgsrc: InnardImages.ProductDetailsScreen2},
        ],
        [
          {caption: "", imgsrc: InnardImages.CartScreen},
          {caption: "", imgsrc: InnardImages.CartMoreDetails},
          {caption: "", imgsrc: InnardImages.PaymentScreen},
          {caption: "", imgsrc: InnardImages.OrderSuccessScreen, isNotch: true},
        ],
        [
          {caption: "My Orders & Previous Order ", imgsrc: InnardImages.PreviousOrders},
          {caption: "", imgsrc: InnardImages.OrderSummaryScreen},
          {caption: "Connect With us for any help!", imgsrc: InnardImages.OrderHelp},
        ],
        [
          {caption: "", imgsrc: InnardImages.BookmarkScreen},
          {caption: "", imgsrc: InnardImages.FilterProductScreen},
        ],
      ],
    },
  },
  {
    type: "bannerImage",
    value: {title: "", imgsrc: InnardImages.AdBanner},
  },
]

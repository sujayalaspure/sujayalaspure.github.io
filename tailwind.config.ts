import type {Config} from "tailwindcss"
import {COLOR} from "./src/utils/theme"
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "Inter", "San Francisco", "SF Pro Text"],
      roboto: ["Roboto Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      monserrat: ["Montserrat", "Inter", "San Francisco", "SF Pro Text"],
    },
    colors: {
      ...COLOR,
    },
    fontSize: {
      sujay: "clamp(40px,8vw,80px)",
      subHeading: "clamp(22px,6vw,50px)",
    },
  },
  plugins: [],
}
export default config

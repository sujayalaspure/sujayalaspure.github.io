import {SiLeetcode} from "react-icons/si"
import {FaMediumM, FaLinkedinIn, FaGithub, FaDownload} from "react-icons/fa"
import Logo from "../../public/favicon/android-chrome-384x384.png"
import {COLOR} from "@/utils/theme"

export const resumeLink = "/assets/Sujay_Alaspure_Software_Developer_3_years.pdf"

export {Logo}
export const ProfileLinks = {
  github: "https://github.com/sujayalaspure",
  linkedin: "https://www.linkedin.com/in/sujayalaspure/",
  instagram: "https://www.instagram.com/sujayalaspure/",
  leetcode: "https://leetcode.com/sujayalaspure/",
  medium: "https://sujayalaspure.medium.com/",
  resume: resumeLink,
}

let iconStyles = {color: COLOR.lightSlate, fontSize: "1.5em"}

export const socialLink = [
  {
    name: "Github",
    Icon: <FaGithub style={iconStyles} />,
    link: ProfileLinks.github,
    color: "#caccd1",
  },
  {
    name: "LinkedIn",
    Icon: <FaLinkedinIn style={iconStyles} />,
    link: ProfileLinks.linkedin,
    color: "#0077b5",
  },

  {
    name: "Medium",
    Icon: <FaMediumM style={iconStyles} />,
    link: ProfileLinks.medium,
    color: "#caccd1",
  },
  // {
  //   name: "Instagram",
  //   Icon: <FaInstagram style={iconStyles} />,
  //   link: ProfileLinks.instagram,
  //   color: "#e1306c",
  // },
  {
    name: "Leetcode",
    Icon: <SiLeetcode style={iconStyles} />,
    link: ProfileLinks.leetcode,
    color: "#fbb034",
  },
  {
    name: "Download Resume",
    Icon: <FaDownload style={iconStyles} />,
    link: resumeLink,
    color: "#5ec6f2",
  },
]

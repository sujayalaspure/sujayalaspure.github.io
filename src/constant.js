import { SiLeetcode } from "react-icons/si"
import { FaMediumM, FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa"

export const resumeLink = "/assets/Sujay_Alaspure_Software_Developer_3_years.pdf"

export const ProfileLinks = {
  github: "https://github.com/sujayalaspure",
  linkedin: "https://www.linkedin.com/in/sujayalaspure/",
  instagram: "https://www.instagram.com/sujayalaspure/",
  leetcode: "https://leetcode.com/sujayalaspure/",
  medium: "https://sujayalaspure.medium.com/",
  resume: resumeLink,
}

export { default as profile } from "./Assets/images/profile.jpg"
export const socialLink = [
  {
    name: "Github",
    Icon: <FaGithub />,
    link: ProfileLinks.github,
    color: "#caccd1",
  },
  {
    name: "LinkedIn",
    Icon: <FaLinkedinIn />,
    link: ProfileLinks.linkedin,
    color: "#0077b5",
  },

  {
    name: "Medium",
    Icon: <FaMediumM />,
    link: ProfileLinks.medium,
    color: "#caccd1",
  },
  // {
  //   name: "Instagram",
  //   Icon: <FaInstagram />,
  //   link: ProfileLinks.instagram,
  //   color: "#e1306c",
  // },
  {
    name: "Leetcode",
    Icon: <SiLeetcode />,
    link: ProfileLinks.leetcode,
    color: "#fbb034",
  },
  {
    name: "Download Resume",
    Icon: <FaDownload />,
    link: resumeLink,
    color: "#5ec6f2",
  },
]

import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiDownloadCloud } from "react-icons/fi"

import { SiLeetcode } from "react-icons/si"

export const resumeLink = "/assets/Sujay_Alaspure_Software_Developer_3_years.pdf"

export const ProfileLinks = {
  github: "https://github.com/alaspuresujay",
  linkedin: "https://www.linkedin.com/in/alaspuresujay/",
  instagram: "https://www.instagram.com/alaspuresujay/",
  leetcode: "https://leetcode.com/alaspuresujay/",
  medium: "https://alaspuresujay.medium.com/",
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
  {
    name: "Instagram",
    Icon: <FaInstagram />,
    link: ProfileLinks.instagram,
    color: "#e1306c",
  },
  {
    name: "Leetcode",
    Icon: <SiLeetcode />,
    link: ProfileLinks.leetcode,
    color: "#fbb034",
  },
  {
    name: "Resume",
    Icon: <FaDownload />,
    link: resumeLink,
    color: "#5ec6f2",
  },
]

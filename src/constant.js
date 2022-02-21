import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiDownloadCloud,
} from "react-icons/fi";

import { SiLeetcode } from "react-icons/si";

export const resumeLink = "/assets/resume.pdf";

export { default as profile } from "./Assets/images/profile.jpg";
export const socialLink = [
  {
    name: "Github",
    Icon: <FiGithub />,
    link: "https://github.com/alaspuresujay",
  },
  {
    name: "LinkedIn",
    Icon: <FiLinkedin />,
    link: "https://www.linkedin.com/in/alaspuresujay/",
  },
  {
    name: "Instagram",
    Icon: <FiInstagram />,
    link: "https://www.instagram.com/alaspuresujay/",
  },
  { name: "E-Mail", Icon: <FiMail />, link: "mailto:alaspuresujay@gmail.com" },
  {
    name: "Leetcode",
    Icon: <SiLeetcode />,
    link: "https://leetcode.com/alaspuresujay/",
  },
  { name: "Resume", Icon: <FiDownloadCloud />, link: resumeLink },
];

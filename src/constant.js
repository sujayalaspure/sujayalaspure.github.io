import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiDownloadCloud,
} from "react-icons/fi";

import { SiLeetcode } from "react-icons/si";
import resume from "./Assets/Sujay-Alaspure-resume-v3.pdf";

export {resume}
export { default as profile } from "./Assets/images/profile.jpg";
export const socialLink = [
  { name: "Github", Icon: FiGithub, link: "https://github.com/alaspuresujay" },
  {
    name: "LinkedIn",
    Icon: FiLinkedin,
    link: "https://www.linkedin.com/in/alaspuresujay/",
  },
  {
    name: "Instagram",
    Icon: FiInstagram,
    link: "https://www.instagram.com/alaspuresujay/",
  },
  { name: "Mail", Icon: FiMail, link: "mailto:alaspuresujay@gmail.com" },
  {
    name: "Leetcode",
    Icon: SiLeetcode,
    link: "https://leetcode.com/alaspuresujay/",
  },
  { name: "Resume", Icon: FiDownloadCloud, link: resume },
];

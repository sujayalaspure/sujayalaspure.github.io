import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiDownloadCloud,
} from "react-icons/fi";

import { SiLeetcode } from "react-icons/si";

export const resumeLink = "/assets/resume.pdf";

export const ProfileLinks = {
  github: "https://github.com/alaspuresujay",
  linkedin: "https://www.linkedin.com/in/alaspuresujay/",
  instagram: "https://www.instagram.com/alaspuresujay/",
  leetcode: "https://leetcode.com/alaspuresujay/",
  resume: resumeLink,
};

export { default as profile } from "./Assets/images/profile.jpg";
export const socialLink = [
  {
    name: "Github",
    Icon: <FiGithub />,
    link: ProfileLinks.github,
    color: "#caccd1",
  },
  {
    name: "LinkedIn",
    Icon: <FiLinkedin />,
    link: ProfileLinks.linkedin,
    color: "#0077b5",
  },
  {
    name: "Instagram",
    Icon: <FiInstagram />,
    link: ProfileLinks.instagram,
    color: "#e1306c",
  },
  {
    name: "E-Mail",
    Icon: <FiMail />,
    link: "mailto:alaspuresujay@gmail.com",
    color: "#ff0000",
  },
  {
    name: "Leetcode",
    Icon: <SiLeetcode />,
    link: ProfileLinks.leetcode,
    color: "#fbb034",
  },
  {
    name: "Resume",
    Icon: <FiDownloadCloud />,
    link: resumeLink,
    color: "#5ec6f2",
  },
];

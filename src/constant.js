import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiDownloadCloud } from 'react-icons/fi';
import resume from './Assets/resume-Sujay-Alaspure-V2-3.pdf';

export { default as profile } from './Assets/images/profile.jpg';
export const socialLink = [
	{ name: 'Github', Icon: FiGithub, link: 'https://github.com/alaspuresujay' },
	{ name: 'LinkedIn', Icon: FiLinkedin, link: 'https://www.linkedin.com/in/alaspuresujay/' },
	{ name: 'Instagram', Icon: FiInstagram, link: 'https://www.instagram.com/alaspuresujay/' },
	{ name: 'Mail', Icon: FiMail, link: 'mailto:alaspuresujay@gmail.com' },
	{ name: 'Resume', Icon: FiDownloadCloud, link: resume },
];

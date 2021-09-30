import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiDownloadCloud } from 'react-icons/fi';
import resume from './Assets/resume-Sujay-Alaspure-V2-2.pdf';

export { default as profile } from './Assets/images/profile.jpg';
export const socialLink = [
	{ name: 'Github', Icon: FiGithub, link: 'https://github.com/alaspuresujay' },
	{ name: 'LinkedIn', Icon: FiLinkedin, link: 'https://www.linkedin.com/in/alaspuresujay/' },
	{ name: 'Instagram', Icon: FiInstagram, link: 'https://www.instagram.com/alaspuresujay/' },
	{ name: 'Mail', Icon: FiMail, link: 'mailto:alaspuresujay@gmail.com' },
	{ name: 'Resume', Icon: FiDownloadCloud, link: resume },
];

export const project = {
	name: 'OctoProfile',
	description:
		'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
	tags: ['Next.js', 'Chart.js', 'GitHub API'],
	githubLink: 'https://github.com/alaspuresujay',
	ExternalLink: 'https://github.com/alaspuresujay',
	PageLink: '',
};

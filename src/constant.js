import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

export { default as TestImage } from './Assets/Screenshot from 2021-07-30 21-38-38.png';

export const socialLink = [
	{ name: 'Github', Icon: FiGithub, link: 'https://github.com/alaspuresujay' },
	{ name: 'LinkedIn', Icon: FiLinkedin, link: 'https://www.linkedin.com/in/alaspuresujay/' },
	{ name: 'Instagram', Icon: FiInstagram, link: 'https://www.instagram.com/alaspuresujay/' },
	{ name: 'Mail', Icon: FiMail, link: 'mailto:alaspuresujay@gmail.com' },
];

export const project = {
	name: 'OctoProfile',
	description:
		'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
	tags: ['Next.js', 'Chart.js', 'GitHub API'],
	githubLink: '',
	ExternalLink: '',
	PageLink: '',
};

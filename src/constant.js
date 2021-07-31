import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
export const colors = {
	primary: '#A179AF',
	secondary: '#564B64',
	background: '#EDEAEA',
	backgroundSecondary: '#3E3547',
	text: '#3E3547',
	textSecondary: '#ABA6A6',
	white: '#FBFBFB',
};

export const socialLink = [
	{ name: 'Github', Icon: FiGithub, link: 'https://github.com/alaspuresujay' },
	{ name: 'LinkedIn', Icon: FiLinkedin, link: 'https://www.linkedin.com/in/alaspuresujay/' },
	{ name: 'Instagram', Icon: FiInstagram, link: 'https://www.instagram.com/alaspuresujay/' },
	{ name: 'Mail', Icon: FiMail, link: 'mailto:alaspuresujay@gmail.com' },
];

export const project = {
	name: 'OctoProfile',
	description:
		'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
	tags: ['Next.js', 'Chart.js', 'GitHub API'],
	githubLink: '',
	ExternalLink: '',
	PageLink: '',
};

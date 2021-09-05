import { smarthmStructure, banner } from './Smarthm';

const projects = [
	{
		title: 'Smarthm',
		slug: 'smarthm',
		image: banner,
		description:
			'This app provide the functionality to control your smart home devices from your mobile, set alert, add automation to devices. Toggle device on specific time and much more. And yes with security and privacy because of its all new OfflineFirst technology.',
		tags: ['React Native', 'Firebase', 'Appcenter API', 'playStore CLI'],
		githubLink: '',
		playStore: 'https://play.google.com/store/apps/details?id=com.indivisible.smarthm',
		data: smarthmStructure,
	},
	// {
	// 	title: 'Slack Clone',
	// 	slug: 'slack-clone',
	// 	image: banner,
	// 	description:
	// 		'This app provide the functionality to control your smart home devices from your mobile, set alert, add automation to devices. ',
	// 	tags: ['React JS', 'Firebase'],
	// 	githubLink: '',
	// 	data: '',
	// },
];

export const OtherProjects = [
	{
		title: 'React Gallery App',
		slug: 'gallery-app',
		image: banner,
		description:
			'This app provide the functionality to control your smart home devices from your mobile, set alert, add automation to devices. Toggle device on specific time and much more. And yes with security and privacy because of its all new OfflineFirst technology.',
		tags: ['ReactJs', 'Firebase', 'Framer Motion'],
		githubLink: 'https://github.com/alaspuresujay/react-galary',
		externalLink: 'https://alaspuresujay.github.io/react-galary/',
	},
	{
		title: 'Resort Booking App',
		slug: 'resort-app',
		image: banner,
		description:
			'This app provide the functionality to control your smart home devices from your mobile, set alert, add automation to devices. Toggle device on specific time and much more. And yes with security and privacy because of its all new OfflineFirst technology.',
		tags: ['ReactJs', 'Contentful CMS'],
		githubLink: 'https://github.com/alaspuresujay/resortapp',
		externalLink: 'https://sujay-resort-app.netlify.app',
	},
];

export default projects;

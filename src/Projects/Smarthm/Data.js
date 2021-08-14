import img1 from './Assets/img1.png';
import icon from './Assets/icon.png';
import logo from './Assets/logo.png';
import logo_name from './Assets/logo_name.png';
import splash3d from './Assets/spalsh3d.png';
import designSys from './Assets/designSystem.png';
import banner from './Assets/banner3.png';
import profile from './Assets/profile.png';
import loginui from './Assets/loginui.png';
import home from './Assets/home.png';

export { banner };
export const smarthmStructure = [
	{ type: 'bannerImage', value: { title: '', imgsrc: banner } },
	{
		type: 'tophead',
		value: { caseName: 'SmartHM', caseBio: 'Control All your home Devices from your fingertip' },
	},
	{
		type: 'brief',
		value: {
			briefTitle: 'The Challange',
			content: `Redesigning a mobile app with a multi-million user base is always a big
                responsibility. Users sometimes react negatively to changes in interactions that
                have become familiar, which can bring down ratings. Our team worked with Sleepiest
                to audition dozens of design concepts until we found the perfect solution for
                improving the design while keeping users comfortable with familiar interactions.`,
			links: [{ linkName: 'Play Store', src: 'https://smarthm.page.link/getapp' }],
		},
	},
	{
		type: 'bannerImage',
		value: { title: 'The design will not leave you cold', imgsrc: designSys },
	},
	{
		type: 'splitshow',
		value: {
			title: '',
			left: [
				{
					imgsrc: logo,
					caption: 'Our first task was to give SmartHM a logotype and corporate identity.',
				},
				{ imgsrc: logo_name, caption: '' },
				{ imgsrc: profile, caption: '' },
				{ imgsrc: home, caption: '' },
			],
			right: [
				{ imgsrc: icon, caption: '' },
				{
					imgsrc: loginui,
					caption:
						'We have setup the login with email as well as Google auth. To ease the user onboarding process',
				},
				{ imgsrc: img1, caption: '' },
			],
		},
	},
];

export const Data = [
	{ img: img1 },
	{ img: icon },
	{ img: logo },
	{ img: logo_name },
	{ img: splash3d },
];

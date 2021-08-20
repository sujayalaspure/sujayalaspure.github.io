import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CaseStudy.css';
import Banner from './Banner';
import TopHead from './TopHead';
import Brief from './Brief';
import SplitShow from './SplitShow';
import { useProject } from 'Context/ProjectContext';
import { socialLink } from 'constant';
export default function CaseStudy() {
	const [project, setProject] = useState(null);
	const { slug } = useParams();
	const { getProject } = useProject();

	useEffect(() => {
		const pro = getProject(slug);

		setProject(pro);
		console.log('[CaseStudy.js:18] -  ', pro);
	}, []);

	const renderComponent = ({ type, value }, index) => {
		switch (type) {
			case 'bannerImage':
				return <Banner key={index} {...value} index={index} />;
			case 'tophead':
				return <TopHead key={index} {...value} />;
			case 'splitshow':
				return <SplitShow key={index} {...value} />;
			case 'brief':
				return <Brief key={index} {...value} />;

			default:
				break;
		}
	};

	const nothingFound = () => (
		<div className='not-found'>
			<p>Ohh...</p>
			<p>I don't have this project at this time.</p>
		</div>
	);

	return (
		<>
			<div className='casestudy container-fluid'>
				{project
					? project?.data?.map((item, index) => renderComponent(item, index))
					: nothingFound()}
				<div className='case-footer'>
					<a href='#/' className='link-item nextcase'>
						Next Case...
					</a>
					<div className='contact'>
						<div className='social'>
							<ul>
								{socialLink.map(({ Icon, link, name }) => (
									<li key={link}>
										<a href={link} target='_blank' rel='noreferrer'>
											<Icon />
										</a>
									</li>
								))}
							</ul>
						</div>
						<div className='credits'>
							<a href='https://github.com/alaspuresujay' target='_blank' rel='noopener noreferrer'>
								Designed & Built by Sujay Alaspure
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

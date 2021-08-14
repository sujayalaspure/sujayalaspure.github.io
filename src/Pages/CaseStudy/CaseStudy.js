import React from 'react';
import { useParams } from 'react-router-dom';
import 'Components/Dust';
import { smarthmStructure } from 'Projects/Smarthm/Data';
import './CaseStudy.css';
import Banner from './Banner';
import TopHead from './TopHead';
import Brief from './Brief';
import SplitShow from './SplitShow';
export default function CaseStudy() {
	const { slug } = useParams();

	const renderComponent = ({ type, value }, index) => {
		switch (type) {
			case 'bannerImage':
				return <Banner {...value} index={index} />;
			case 'tophead':
				return <TopHead {...value} />;
			case 'splitshow':
				return <SplitShow {...value} />;
			case 'brief':
				return <Brief {...value} />;

			default:
				break;
		}
	};

	return (
		<>
			<div className='casestudy container-fluid'>
				{smarthmStructure.map((item, index) => renderComponent(item, index))}
				<div className='footer'>
					<a href='#/' className='link-item'>
						Next Case...
					</a>
				</div>
			</div>
		</>
	);
}

import React from 'react';
import { socialLink } from '../../../constant';
import 'styles/components/Hero.css';

export default function LeftSideBar() {
	return (
		<div className='sidebar left'>
			<ul className='social'>
				{socialLink.map(({ link, Icon }) => (
					<li className='link' key={link}>
						<a href={link} target='_blank' rel='noreferrer'>
							<Icon />
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

import React from 'react';
import './Section.css';

export default function SectionHeading({ number, title }) {
	return (
		<div className='section-heading'>
			<h2 className='number'>{number}.</h2>
			<h2 className='title'>{title}</h2>
		</div>
	);
}

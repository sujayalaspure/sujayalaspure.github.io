import React from 'react';

export default function SectionHeading({ number, title }) {
	return (
		<div className='section-heading'>
			<h2 className='number'>{number}.</h2>
			<h2 className='title'>{title}</h2>
		</div>
	);
}

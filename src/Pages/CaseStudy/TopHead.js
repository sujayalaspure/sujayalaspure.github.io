import React from 'react';

export default function TopHead({ caseName, caseBio }) {
	return (
		<div className='tophead-container'>
			<h1 className='project-title'>{caseName}</h1>
			<h2 className='project-subtitle'>{caseBio}</h2>
		</div>
	);
}

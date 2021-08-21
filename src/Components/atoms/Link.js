import React from 'react';
import 'styles/components/Atoms.css';
export function Link({ text, href, newTab }) {
	return (
		<>
			&nbsp;
			<a className='link-item' href={href} target={newTab ? '_blank' : '_self'} rel='noreferrer'>
				{text}
			</a>
			&nbsp;
		</>
	);
}

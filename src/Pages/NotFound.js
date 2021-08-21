import React from 'react';
import 'styles/pages/NotFound.css';
export default function NotFound() {
	return (
		<>
			<div className='error'>
				<div className='go-back'>
					<a href='#/'>Go Home</a>
				</div>

				<div id='player' className={'idle'}></div>
			</div>
		</>
	);
}

import React from 'react';
import 'styles/components/Atoms.css';
export default function GetInTouch() {
	return (
		<div className='get-in-touch'>
			<h5
				style={{
					fontWeight: 400,
					fontSize: '16px',
				}}>
				Lets have a talk
			</h5>
			<a className='button' href='mailto:alaspuresujay@gmail.com'>
				Say Hello
			</a>
		</div>
	);
}

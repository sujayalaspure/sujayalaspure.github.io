import React from 'react';
import 'styles/components/Atoms.css';
export default function GetInTouch() {
	return (
		<div className='get-in-touch'>
			<h5
			// style={{
			// 	fontWeight: 400,
			// 	fontSize: '16px',
			// 	maxWidth: '800px',
			// 	textAlign: 'center',
			// 	lineHeight: 2,
			// }}
			>
				My inbox is always open. Whether you have a question or just want to say hi, I’ll try my
				best to get back to you!
			</h5>
			<a className='button' href='mailto:alaspuresujay@gmail.com'>
				Say Hello
			</a>
		</div>
	);
}

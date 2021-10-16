import React from 'react';
import 'styles/components/Atoms.css';
export default function MouseScrollAnimation() {
	return (
		<div className='mouse-scroll'>
			<div className='mouse'>
				<div className='wheel'></div>
			</div>

			<div>
				<span className='scroll-arrows top'></span>
				<span className='scroll-arrows bottom'></span>
			</div>
		</div>
	);
}

import React, { useEffect, useState } from 'react';
import './NotFound.css';
export default function NotFound() {
	const [marioClass, setMarioClass] = useState('idle');

	useEffect(() => {
		var player = document.getElementById('player');

		function walkLeft() {
			player.className = 'walk-left';
			setTimeout(searchLeft, 1000);
		}
		function searchLeft() {
			player.className = 'search-left';
			// player.style.left = "40%";
			setTimeout(walkRight, 3000);
		}
		function walkRight() {
			player.className = 'walk-right';
			setTimeout(searchRight, 1000);
		}
		function searchRight() {
			player.className = 'search-right';
			// player.style.left = "60%";
			setTimeout(walkLeft, 3000);
		}

		// walkLeft();
		return () => {};
	}, [marioClass]);
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

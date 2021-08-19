import React from 'react';
import './atoms.css';

/**
 *
 *
 * @export
 * @param {{ text:string, onClick:Function }}  params
 * @returns {*}
 */
export default function Button({ text, onClick }) {
	return (
		<button onClick={onClick} className='button'>
			{text}
		</button>
	);
}

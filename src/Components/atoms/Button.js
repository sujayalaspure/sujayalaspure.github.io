import React from 'react';
import 'styles/components/Atoms.css';

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

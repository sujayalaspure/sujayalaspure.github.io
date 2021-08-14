import React from 'react';
import { Parallax } from 'react-parallax';
import { FiChevronDown } from 'react-icons/fi';

export default function Banner({ index, title, imgsrc }) {
	return (
		<div style={{ padding: index === 0 ? '0' : '10% 0' }}>
			<Parallax bgImage={imgsrc} strength={300}>
				<div style={{ height: '100vh', width: '100%', position: 'relative' }}>
					{index === 0 && (
						<div className='scroll-down'>
							<p>Scroll Down </p>
							<FiChevronDown />
						</div>
					)}
				</div>
			</Parallax>
		</div>
	);
}

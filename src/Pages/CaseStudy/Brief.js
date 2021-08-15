import React from 'react';

export default function Brief({ briefTitle, content, links }) {
	return (
		<section className='brief'>
			<div className='heading'>
				<h2>{briefTitle}</h2>
			</div>
			<div className='content'>
				<div className='text'>
					<p>{content}</p>
				</div>
				<div className='links'>
					{links.map(({ linkName, src }) => (
						<a
							key={src}
							className='underline--magical'
							href={src}
							target='_blank'
							rel='noopener noreferrer'>
							{linkName}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

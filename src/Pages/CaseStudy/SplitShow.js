import React from 'react';
import GridItem from 'Components/atoms/GridItem';

export default function SplitShow({ title, right, left }) {
	return (
		<div className='splitshow'>
			<div className='col'>
				<div className='left'>
					{left.map(({ imgsrc, caption }, index) => (
						<GridItem key={index} img={imgsrc} caption={caption} />
					))}
				</div>
				<div className='right'>
					{right.map(({ imgsrc, caption }, index) => (
						<GridItem key={index} img={imgsrc} caption={caption} />
					))}
				</div>
			</div>
		</div>
	);
}

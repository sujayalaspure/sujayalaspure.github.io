import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';

export default function RightSideBar() {
	return (
		<div className='sidebar right'>
			<Tooltip title='Click to copy' aria-label={'Click to copy'} placement='left' arrow>
				<div className='email'>
					<a href='#' onClick={() => navigator.clipboard.writeText('alaspuresujay@gmail.com')}>
						alaspuresujay@gmail.com
					</a>
				</div>
			</Tooltip>
		</div>
	);
}

import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import styled from 'styled-components';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};
export default function Navigation({ isOpen }) {
	return (
		<List variants={variants}>
			{itemIds.map(title => (
				<MenuItem {...{ title }} key={title} />
			))}
		</List>
	);
}

const itemIds = ['About', 'Work', 'Experience', 'Contact'];

const List = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 100px;
	width: 230px;
`;

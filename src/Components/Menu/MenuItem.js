import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		display: 'flex',
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		display: 'none',
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const baseURL = 'https://alaspuresujay.github.io/';

export default function MenuItem({ title }) {
	return (
		<Item variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
			<a href={`${baseURL}#${title}`}>
				<IconPlaceholder />
				<TextPlaceholder>{title}</TextPlaceholder>
			</a>
		</Item>
	);
}

const Item = styled(motion.li)`
	list-style: none;
	margin-bottom: 30px;
	cursor: pointer;
	color: var(--light-slate);
	transition: var(--transition);
	a {
		display: flex;
		align-items: center;
	}
	&:hover {
		color: var(--green);
	}
`;

const IconPlaceholder = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	/* flex: 20px 0; */
	margin-right: 40px;
	border: 2px solid var(--green);
`;

const TextPlaceholder = styled.div`
	border-radius: 5px;
	width: 200px;
	/* height: 40px; */
	flex: 1;
	color: inherit;
	align-items: center;
	font-size: var(--fz-lg);
`;

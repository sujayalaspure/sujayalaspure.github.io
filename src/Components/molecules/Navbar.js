import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './Menu/useDimensions';
import Navigation from './Menu/Navigation';
import MenuToggle from './Menu/MenuToggle';
const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(30px at 40px 40px)',
		transition: {
			delay: 0.3,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

function Navbar() {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	// const styled = ``
	return (
		<Nav initial={false} animate={isOpen ? 'open' : 'closed'} custom={height} ref={containerRef}>
			<NavBackground className='navBackgroud' variants={sidebar} />
			<Navigation isOpen={isOpen} />
			<MenuToggle toggle={() => toggleOpen()} />
		</Nav>
	);
}

export default Navbar;

const Nav = styled(motion.nav)`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	/* width: 300px; */
	z-index: 100;
`;

const NavBackground = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;
	background: var(--light-navy);
`;

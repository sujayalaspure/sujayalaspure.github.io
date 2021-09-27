import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import 'styles/components/Hero.css';
import SomeRandomAnim from 'Components/atoms/SomeRandomAnim';

export default function Hero() {
	const RandomArray = [...Array(5).keys()];
	const { ref, inView } = useInView({ threshold: 0.2 });
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: 'spring',
					duration: 1,
					bounce: 0.3,
				},
			});
		}
	}, [inView]);
	return (
		<div ref={ref} className='hero'>
			{RandomArray.map(i => (
				<SomeRandomAnim i={i} key={i} />
			))}

			<LeftSideBar />
			<RightSideBar />
			<motion.div initial={{ x: '-100vw' }} animate={animation} className='HeaderContainer'>
				<h3 className='MinorHeading'>Hello World, my name is</h3>
				<h1 className='NameHeading'>Sujay Alaspure</h1>
				<h2 className='bio'>I build things that lives on Internet.</h2>
			</motion.div>
		</div>
	);
}

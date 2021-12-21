import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { colors, theme } from '../../Styles';

export default function GridItem({ img, caption = null, right = false }) {
	const { ref, inView } = useInView({ threshold: 0.2 });
	const animation = useAnimation();

	useEffect(() => {
		console.log('[Hero.js:15] -  ', inView);
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					type: 'spring',
					duration: 1,
					bounce: 0.1,
				},
			});
		}
	}, [inView]);
	return (
		<Container ref={ref}>
			<motion.div initial={{ x: right ? '200vw' : '-100vw' }} animate={animation}>
				<Image src={img} alt='' />
				{caption && (
					<Caption>
						<p>{caption}</p>
					</Caption>
				)}
			</motion.div>
		</Container>
	);
}

const Container = styled.div`
	padding: ${theme.spacing[10]} 20px;
	overflow: hidden;

	@media (max-width: 768px) {
		padding: 30px 0;
	} ;
`;

const Image = styled.img`
	border-radius: 10px;
	/* object-fit: cover; */
	/* max-height: 150vh; */
	width: 100%;
	/* height: auto; */
`;

const Caption = styled.div`
	margin-top: ${theme.spacing[20]};
	width: 100%;
	text-align: center;
	padding: 0 15%;
	p {
		font-size: ${theme.fz['xl']};
		color: ${colors.lightSlate};
	}

	@media (max-width: 768px) {
		padding: 0 5%;
	}
`;
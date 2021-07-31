import React from 'react';
import styled from 'styled-components';
import './Home.css';
import Hero from '../Components/Hero/Hero';
import { colors, theme } from '../Styles';
import Section, { SectionHeading } from '../Components/Section';
import FeaturedProject from '../Components/Section/FeaturedProject';
import Footer from '../Components/Footer/Footer';

function Home() {
	return (
		<Container>
			<Hero />
			<Section>
				<SectionHeading number='01' title='Some Things I’ve Built' />
				<FeaturedProject />
			</Section>
			<Footer />
		</Container>
	);
}

export default Home;

const Container = styled.div`
	background: ${colors.navy};
	/* width: ${theme.width.screen}; */
	/* height: ${theme.height.screen}; */
	/* display: flex; */
	/* align-items: center; */
	/* flex-direction: column; */
	/* justify-content: center; */
	@media (max-width: 1080px) {
		padding: 0px 100px;
	}
	@media (max-width: 768px) {
		padding: 0px 50px;
	}
	@media (max-width: 480px) {
		padding: 0px 25px;
	}
	padding: 0px 150px;
`;

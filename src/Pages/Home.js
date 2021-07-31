import React from 'react';
import styled from 'styled-components';
import './Home.css';
import Hero from '../Components/Hero/Hero';
import { colors } from '../Styles';
import Section, { SectionHeading } from '../Components/Section';
import FeaturedProject from '../Components/Section/FeaturedProject';
import Footer from '../Components/Footer/Footer';

function Home() {
	return (
		<Container>
			<Hero />
			{/* <Section>
				<SectionHeading number='01' title='Some Things I’ve Built' />
				<FeaturedProject />
			</Section> */}
			<Footer />
		</Container>
	);
}

export default Home;

const Container = styled.div`
	background: ${colors.navy};
`;

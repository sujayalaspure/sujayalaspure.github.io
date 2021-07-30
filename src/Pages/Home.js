import React from 'react';
import './Home.css';
import Hero from '../Components/Hero/Hero';
import SectionHeading from '../Components/Modules/SectionHeading';
import { colors } from '../Styles';
import styled from 'styled-components';
import Section from '../Components/Section/Section';

function Home() {
	return (
		<Container>
			<Hero />
			{/* <Section>
				<SectionHeading number='01' title='Section Heading' />
			</Section> */}
		</Container>
	);
}

export default Home;

const Container = styled.div`
	background: ${colors.navy};
`;

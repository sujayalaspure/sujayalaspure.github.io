import React from 'react';
import './Home.css';
import Hero from '../Components/Hero/Hero';
import { colors } from '../Styles';
import styled from 'styled-components';

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

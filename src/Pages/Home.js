import React from 'react';
import './Home.css';
import Hero from '../Components/Hero/Hero';
import Section, { SectionHeading } from '../Components/Section';
import FeaturedProject from '../Components/FeaturedProject/FeaturedProject';
import Footer from '../Components/Footer/Footer';

function Home() {
	return (
		<div className='home'>
			<Hero />
			{/* <Section>
				<SectionHeading number='01' title='Some Things I’ve Built' />
				<FeaturedProject />
			</Section> */}
			<Footer />
		</div>
	);
}

export default Home;

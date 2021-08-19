import React from 'react';
import './Home.css';
import Hero from 'Components/Organisms/Hero/Hero';
import Section, { SectionHeading } from 'Components/molecules/Section';
import FeaturedProject from 'Components/Organisms/FeaturedProject/FeaturedProject';
import Footer from 'Components/atoms/Footer/Footer';
import projects from 'container/Projects/Projects';
import GithubCorner from 'Components/atoms/GithubCorner';
import AboutMe from 'Components/Organisms/aboutme/AboutMe';

function Home() {
	return (
		<div className='home'>
			<GithubCorner />
			<Hero />
			<AboutMe />
			<Section>
				<SectionHeading number='02' title='Some Things I’ve Built' />
				<FeaturedProject {...projects[0]} />
			</Section>

			<Footer />
		</div>
	);
}

export default Home;

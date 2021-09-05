import React from 'react';
import 'styles/pages/Home.css';
import Hero from 'Components/Organisms/Hero/Hero';
import Section, { SectionHeading } from 'Components/atoms/Section';
import FeaturedProject from 'Components/Organisms/FeaturedProject';
import Footer from 'Components/atoms/Footer';
import projects from 'container/Projects/Projects';
import GithubCorner from 'Components/atoms/GithubCorner';
import AboutMe from 'Components/Organisms/AboutMe';
import GetInTouch from 'Components/atoms/GetInTouch';
// import ProjectCard from 'Components/molecules/ProjectCard';

function Home() {
	return (
		<div className='home'>
			<GithubCorner />
			<Hero />
			<AboutMe />
			<Section>
				<SectionHeading number='02' title='Some Things I’ve Built' />
				{projects.map((project, index) => (
					<FeaturedProject key={index} {...project} index={index} />
				))}
			</Section>

			{/* <Section>
				<SectionHeading number='03' title='Other Projects' />
				<ul className='project-grid'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</ul>
			</Section> */}
			<Section>
				<SectionHeading number='04' title='Get In Touch' />
				<GetInTouch />
			</Section>

			<Footer />
		</div>
	);
}

export default Home;

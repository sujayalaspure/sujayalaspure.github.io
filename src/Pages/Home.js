import React from "react";
import "styles/pages/Home.css";
import Hero from "Components/Hero/Hero";
import Section, { SectionHeading } from "Components/atoms/Section";
import Footer from "Components/atoms/Footer";
import projects from "Projects";
import GithubCorner from "Components/atoms/GithubCorner";
import AboutMe from "Components/Organisms/AboutMe";
import GetInTouch from "Components/atoms/GetInTouch";
import ProjectCard from "Components/molecules/ProjectCard";
import FeaturedProjectCard from "Components/featured-project-card";
import Experience from "Components/experience";
function Home() {
  return (
    <div className="home">
      <GithubCorner />

      <Hero />
      <AboutMe number="01" />

      <Section>
        <SectionHeading number="02" title="Where I’ve Worked" />
        <Experience />
      </Section>

      <Section>
        <SectionHeading number="03" title="Some Things I’ve Built" />
        {projects
          .filter((pro) => pro.featured)
          .map((project, index) => (
            <div>
              <FeaturedProjectCard right={index % 2} key={index} {...project} />
            </div>
          ))}
      </Section>

      <Section>
        <SectionHeading number="04" title="Other Projects" />
        <ul className="project-grid">
          {projects
            .filter((pro) => !pro.featured)
            .map((project, index) => (
              <ProjectCard key={index} {...{ project }} />
            ))}
        </ul>
      </Section>

      {/* <Section>
				<SectionHeading number='04' title='My Experience' />
			</Section> */}
      <Section>
        <SectionHeading number="05" title="Get In Touch" />
        <GetInTouch />
      </Section>

      <Footer />
    </div>
  );
}

export default Home;

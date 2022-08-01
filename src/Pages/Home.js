import React, { useEffect, useState } from "react";
import "styles/pages/Home.css";
import Hero from "Components/Hero/Hero";
import Section, { SectionHeading } from "Components/atoms/Section";
import projects from "Projects";
import { GithubCorner, GetInTouch, Footer } from "Components/atoms";
import AboutMe from "Components/Organisms/AboutMe";
import ProjectCard from "Components/molecules/ProjectCard";
import FeaturedProjectCard from "Components/featured-project-card";
import Experience from "Components/experience";
import LogoIcon from "Assets/LogoIcon";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <LogoIcon />;
  return (
    <div className="home">
      <GithubCorner />
      <Hero />
      <AboutMe number="01" />

      <Section id="Experience">
        <SectionHeading number="02" title="Where I’ve Worked" />
        <Experience />
      </Section>

      <Section>
        <SectionHeading number="03" title="Some Things I’ve Built" />
        {projects
          .filter((pro) => pro.featured)
          .map((project, index) => (
            <FeaturedProjectCard right={index % 2} key={index} {...project} />
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

      <Section>
        <SectionHeading number="05" title="Get In Touch" />
        <GetInTouch />
      </Section>

      <Footer />
    </div>
  );
}

export default Home;

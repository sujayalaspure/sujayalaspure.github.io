import React, { useEffect, useState } from "react"
import "styles/pages/Home.css"
import Hero from "Components/Hero/Hero"
import Section, { SectionHeading } from "Components/atoms/Section"
import projects from "Projects"
import { GithubCorner, GetInTouch, Footer } from "Components/atoms"
import AboutMe from "Components/Organisms/AboutMe"
import FeaturedProjectCard from "Components/featured-project-card"
import Experience from "Components/experience"
import LogoIcon from "Assets/LogoIcon"
import MediumPosts from "Components/medium-posts"
import ProjectGrid from "Components/project-grid"

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  const DATA = [
    {
      title: "About Me",
      component: <AboutMe />,
    },
    {
      title: "Where I’ve Worked",
      component: <Experience />,
    },
    {
      title: "Featured Projects",
      component: <FeaturedProjectCard projects={projects} />,
    },
    {
      title: "My Writes",
      component: <MediumPosts />,
      hide: false,
    },
    {
      title: "All Projects",
      component: <ProjectGrid projects={projects} />,
    },
    {
      title: "Get In Touch",
      component: <GetInTouch />,
    },
  ]

  if (loading)
    return (
      <div className="full-screen">
        <LogoIcon />
      </div>
    )
  return (
    <div className="home">
      <GithubCorner />
      <Hero />

      {DATA.filter((item) => !item.hide).map(({ title, component }, index) => (
        <Section key={index.toString()}>
          <SectionHeading number={(index + 1).toFixed().toString()} title={title} />
          {component}
        </Section>
      ))}

      <Footer />
    </div>
  )
}

export default Home

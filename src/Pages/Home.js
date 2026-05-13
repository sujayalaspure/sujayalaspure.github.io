import {useEffect, useState} from "react"
import "styles/pages/Home.css"
import Hero from "Components/Hero/Hero"
import Section, {SectionHeading} from "Components/atoms/Section"
import projects from "Projects"
import {GithubCorner, GetInTouch} from "Components/atoms"
import AboutMe from "Components/Organisms/AboutMe"
import FeaturedProjects from "Components/featured-project-card"
import LogoIcon from "Assets/LogoIcon"
import MediumPosts from "Components/medium-posts"
import ProjectGrid from "Components/project-grid"
import ExperienceSectionV2 from "../Components/experience/ExperienceSectionV2"
import {logPageView} from "../utils/firebase"

function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    logPageView("home_page_visited")
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
      component: <ExperienceSectionV2 />,
    },
    {
      title: "Featured Projects",
      component: <FeaturedProjects projects={projects} />,
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

      {DATA.filter((item) => !item.hide).map(({title, component}, index) => (
        <Section key={index.toString()}>
          <SectionHeading number={(index + 1).toFixed().toString()} title={title} />
          {component}
        </Section>
      ))}

      {/* <Footer /> */}
    </div>
  )
}

export default Home

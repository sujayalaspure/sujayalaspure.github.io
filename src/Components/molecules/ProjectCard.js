import React, {useEffect} from "react"
import {motion, useAnimation} from "framer-motion"
import ReactHtmlParser from "react-html-parser"
import {FiGithub, FiExternalLink, FiYoutube} from "react-icons/fi"
import {useInView} from "react-intersection-observer"

import "styles/components/ProjectCard.css"
import TagGroup from "../atoms/TagGroup"
export default function ProjectCard({project}) {
  const {ref, inView} = useInView({threshold: 0.2})
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      })
    }
  }, [inView])
  return (
    <li ref={ref}>
      <motion.div className="inner-card" initial={{opacity: 0}} animate={animation}>
        <div className="header">
          <div className="links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
            )}
            {project.youtubeLink && (
              <a href={project.youtubeLink} className="youtube" target="_blank" rel="noreferrer">
                <FiYoutube />
              </a>
            )}
            {(project.externalLink || project.data) && (
              <a
                href={!project.data ? project.externalLink : `/#/case/${project.slug}`}
                className="external"
                target={project.externalLink && "_blank"}
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>
            )}
          </div>
          <h3 className="project-title">
            <a href={project.externalLink ? project.externalLink : project.data ? `/#/case/${project.slug}` : null}>
              {project.title}
            </a>
          </h3>
          <div className="project-description">
            <p>{ReactHtmlParser(project.description)}</p>
          </div>
        </div>
        <TagGroup tags={project.tags} />
      </motion.div>
    </li>
  )
}

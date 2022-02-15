import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import "styles/components/ProjectCard.css";
export default function ProjectCard({ project }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div
        className="inner-card"
        initial={{ opacity: 0 }}
        animate={animation}
      >
        <div className="header">
          <div className="links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <FiGithub />
              </a>
            )}
            <a
              href={
                project.externalLink
                  ? project.externalLink
                  : `/case/${project.slug}`
              }
              className="external"
              target={project.externalLink && "_blank"}
              rel="noreferrer"
            >
              <FiExternalLink />
            </a>
          </div>
          <h3 className="project-title">
            <a
              href={
                project.externalLink
                  ? project.externalLink
                  : `/case/${project.slug}`
              }
            >
              {project.title}
            </a>
          </h3>
          <div className="project-description">
            <p>{project.description}</p>
          </div>
        </div>
        <ul className="project-tech-list">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

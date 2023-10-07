import ProjectCard from "Components/molecules/ProjectCard"
import React from "react"

function ProjectGrid({projects}) {
  return (
    <ul className="project-grid">
      {projects
        .filter((pro) => !pro.isFeatured)
        .map((project, index) => (
          <ProjectCard key={index} {...{project}} />
        ))}
    </ul>
  )
}

export default ProjectGrid

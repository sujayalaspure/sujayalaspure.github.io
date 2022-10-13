import React from "react"
import FeaturedCard from "./FeaturedCard"

const FeaturedProjectCard = ({ projects }) => {
  return (
    <>
      {projects
        .filter((pro) => pro.featured)
        .map((project, index) => (
          <FeaturedCard right={index % 2} key={index} {...project} />
        ))}
    </>
  )
}

export default FeaturedProjectCard

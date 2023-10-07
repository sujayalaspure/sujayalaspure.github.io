import React from "react"
import FeaturedCard from "./FeaturedCard"
import FeaturedProjectCardV2 from "./FeaturedProjectCardV2"

const FeaturedProjectCard = ({projects}) => {
  return (
    <>
      {projects
        .filter((pro) => pro.isFeatured)
        .map((project, index) => (
          <FeaturedProjectCardV2 isRight={index % 2} key={index} {...project} />
        ))}
    </>
  )
}

export default FeaturedProjectCard

import LogoIcon from "Assets/LogoIcon"
import TagGroup from "Components/atoms/TagGroup"

import React, { useEffect, useState } from "react"
import { FiExternalLink } from "react-icons/fi"
import { getMediumPosts } from "service"
import { MediumPostsContainer, PostContentWrapper, PostImage, PostWrapper } from "./style"

function MediumPosts() {
  const [mediumPosts, setMediumPosts] = useState([])
  useEffect(() => {
    getMediumPosts()
      .then((data) => {
        setMediumPosts(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <MediumPostsContainer>
      {!mediumPosts && <LogoIcon zoom={0.5} />}

      {mediumPosts && mediumPosts?.map((post, index) => <Post key={index} post={post} />)}
    </MediumPostsContainer>
  )
}

const Post = ({ post }) => {
  var options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }

  const title = post?.title?.length > 80 ? post?.title?.substring(0, 80) + " ..." : post?.title

  const description =
    post?.description.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "").substring(0, 120) + "..."

  const pubTime = new Date(post?.pubDate).toLocaleString("en-IN", options)

  return (
    <PostWrapper>
      <PostImage src={post?.thumbnail} alt={title} />
      <PostContentWrapper>
        <h3 className="title">{title}</h3>
        <p className="pub-time">{pubTime}</p>
        <p className="description">{description}</p>
        <TagGroup tags={post?.categories.slice(0, 5)} />
      </PostContentWrapper>

      <a className="read-more" href={post?.link} target="_blank" rel="noreferrer">
        <FiExternalLink />
      </a>
    </PostWrapper>
  )
}

export default MediumPosts

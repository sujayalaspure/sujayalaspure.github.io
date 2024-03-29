import LogoIcon from "Assets/LogoIcon"
import TagGroup from "Components/atoms/TagGroup"

import React, {useEffect, useState} from "react"
import {FiExternalLink} from "react-icons/fi"
import {getMediumPostThumbnail, getMediumPosts} from "service"
import {MediumPostsContainer, PostContentWrapper, PostImage, PostWrapper, ReadMoreText, ReadMoreWrapper} from "./style"
import {ProfileLinks} from "../../constant"
import {logEventAnalytics} from "../../utils/firebase"

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
    <>
      <MediumPostsContainer>
        {!mediumPosts && <LogoIcon zoom={0.5} />}

        {mediumPosts && mediumPosts.slice(0, 5)?.map((post, index) => <Post key={index} post={post} />)}
      </MediumPostsContainer>
      {mediumPosts?.length > 5 && (
        <ReadMoreWrapper>
          <ReadMoreText className="link-item" href={ProfileLinks.medium}>
            Read more on Medium
          </ReadMoreText>
        </ReadMoreWrapper>
      )}
    </>
  )
}

const Post = ({post}) => {
  const title = post?.title

  const description = post?.description.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "")

  const onPostClick = () => {
    logEventAnalytics("medium_post_clicked", {
      title,
      url: post?.link,
    })
  }

  return (
    <PostWrapper>
      <PostImage src={getMediumPostThumbnail(post?.description)} alt={title} loading="lazy" />
      <PostContentWrapper>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <TagGroup tags={post?.categories.slice(0, 5)} />
      </PostContentWrapper>

      <a onClick={onPostClick} className="read-more" href={post?.link} target="_blank" rel="noreferrer">
        <FiExternalLink />
      </a>
    </PostWrapper>
  )
}

export default MediumPosts

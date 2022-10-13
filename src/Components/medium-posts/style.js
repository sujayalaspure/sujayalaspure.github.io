import styled from "styled-components"
import { colors } from "Styles"

export const MediumPostsContainer = styled.div``
export const PostWrapper = styled.a`
  /* max-height: 158px; */
  display: flex;
  align-items: center;
  border: 1px solid ${colors.slate};
  padding: 10px 20px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  img {
    width: 35%;
    /* height: 80%; */
    max-height: 138px;
    margin-right: 1.5rem;
    object-fit: cover;
  }
`

export const PostImageWrapper = styled.div`
  width: 150px;
  /* height: 100%; */
  .thumbnail {
  }
`

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 0.7; */
  .title {
  }
  .pub-time {
    color: ${colors.slate};
    display: block;
    margin-top: 5px;
    margin-bottom: 8px;
  }
  .description {
    margin-bottom: -1rem;
  }
  .categories {
    margin: 1.5rem 0 0 -10px;
  }
`

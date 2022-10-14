import styled from "styled-components"
import { colors } from "Styles"

export const MediumPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: flex-start;
`
export const PostWrapper = styled.div`
  /* max-height: 158px; */
  display: flex;
  align-items: center;
  border: 1px solid ${colors.slate};
  padding: 10px 20px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  position: relative;
  img {
    width: 35%;
    /* height: 80%; */
    max-height: 138px;
    margin-right: 1.5rem;
    object-fit: cover;
  }
  /* transition: var(--transition); */

  .read-more {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    background-color: ${colors.accent}33;
    height: 100%;
    width: 50px;

    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }
  &:hover {
    .read-more {
      display: flex;
    }
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

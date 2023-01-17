import styled from "styled-components"
import { colors } from "Styles"

export const MediumPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${colors.slate};
  padding: 10px 20px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;

  .read-more {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    background-color: ${colors.accent}33;
    height: 100%;
    width: 50px;
    cursor: pointer;

    align-items: center;
    justify-content: center;
    transition: var(--transition);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .read-more {
      display: flex;
      width: 100%;
      height: 50px;
      top: calc(100% - 50px);
    }
  }

  &:hover {
    .read-more {
      display: flex;
    }
  }
`

export const PostImage = styled.img`
  width: 35%;
  max-height: 138px;
  margin-right: 1.5rem;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-height: calc(100% - 60px);
    margin-right: 0;
    margin-bottom: 1rem;
  }
`

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .title {
  }
  .pub-time {
    color: ${colors.slate};
    display: block;
    margin-top: 5px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  .description {
    margin-bottom: 0.5rem;
  }
  .categories {
    margin: 1.5rem 0 0 -10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
    .pub-time {
      margin-bottom: -5px;
    }
    .description {
      display: none;
      margin-bottom: 0;
    }
    .categories {
      margin: 0;
    }
  }
`

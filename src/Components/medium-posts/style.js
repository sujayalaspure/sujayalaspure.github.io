import styled from "styled-components"
import COLORS from "../../utils/Colors"

export const MediumPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.7rem;
`
export const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
  border: 1px solid ${COLORS.darkslate};
  padding: 10px 20px;
  border-radius: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  background-color: ${COLORS.navy};

  .read-more {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    background-color: ${COLORS.accent}33;
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
  min-width: 220px;
  height: 150px;
  width: 30%;
  object-fit: cover;
  box-sizing: border-box;
  overflow-clip-margin: content-box;
  overflow: clip;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    max-height: calc(100% - 60px);
    margin-right: 0;
  }
`

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  width: 70%;
  .title {
    line-height: 1.4;
  }
  .pub-time {
    color: ${COLORS.slate};
    display: block;
    margin-top: 5px;
    margin-bottom: 8px;
    font-size: 14px;
  }
  .description {
    line-height: 1.5;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .categories {
    margin: 1.5rem 0 0 -10px;
  }

  @media (max-width: 768px) {
    margin-bottom: 50px;
    width: 100%;
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

export const ReadMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.accent};
  margin-top: 2rem;
`

export const ReadMoreText = styled.a`
  &:hover::after {
    transform: translate(4px);
  }

  &::after {
    content: "~>";
    margin-left: 0.375rem;
    display: inline-block;
    font-family: JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New,
      monospace;
    font-weight: 500;
    letter-spacing: 0em;
    transition: transform 0.3s ease;
  }
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
`

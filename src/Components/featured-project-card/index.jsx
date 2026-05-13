import FeaturedProjectCardV2 from "./FeaturedProjectCardV2"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

const FeaturedProjectCard = ({projects}) => {
  return (
    <>
      {projects
        .filter((pro) => pro.isFeatured)
        .map((project, index) => (
          <FeaturedProjectCardV2 isRight={index % 2} key={index} {...project} />
        ))}
      <ArchiveWrapper>
        <ArchiveText className="link-item" href="/#/archives">
          View full Project Archives
        </ArchiveText>
      </ArchiveWrapper>
    </>
  )
}

export default FeaturedProjectCard

const ArchiveWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.accent};
`

const ArchiveText = styled.a`
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
  font-size: 1.2rem;
  font-weight: 400;
`

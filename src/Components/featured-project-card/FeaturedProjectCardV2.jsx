import styled from "styled-components"
import ReactHtmlParser from "react-html-parser"

import COLORS from "../../utils/Colors"
import {Logo} from "../../constant"
import BrowserSkin from "../atoms/BrowserSkin"
import {logEventAnalytics} from "../../utils/firebase"

function FeaturedProjectCardV2({isRight, thumbnail, logo, title, description, externalLink, slug}) {
  const onProjectClick = () => {
    logEventAnalytics("featured_project_clicked", {
      label: title,
    })
  }
  return (
    <Container isRight={isRight}>
      <ImageContainer isRight={isRight}>
        <Shine />
        <ImageWrapper>
          {externalLink ? (
            <BrowserSkin link={externalLink}>
              <Image src={thumbnail} loading="lazy" />
            </BrowserSkin>
          ) : (
            <Image src={thumbnail} loading="lazy" />
          )}
        </ImageWrapper>
      </ImageContainer>
      <ContentContainer isRight={isRight}>
        <TitleWrapper>
          <img src={logo || Logo} width={36} height={36} loading="lazy" />
          <Title>{title}</Title>
        </TitleWrapper>
        <Body>{ReactHtmlParser(description)}</Body>
        <FootNote>
          <ActionButton
            onClick={onProjectClick}
            href={externalLink ? externalLink : `/#/case/${slug}`}
            rel="noreferrer"
            target={externalLink ? "_blank" : "_self"}
          >
            {externalLink ? "Demo" : "Learn More"}
          </ActionButton>
        </FootNote>
      </ContentContainer>
    </Container>
  )
}

export default FeaturedProjectCardV2

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 4rem auto;
  flex-direction: column;
  align-items: stretch;
  @media (min-width: 1024px) {
    align-items: flex-start;
    flex-direction: ${(_) => (_.isRight ? "row-reverse" : "row")};
  }
  @media (min-width: 768px) {
    margin: 8rem 0;
    justify-content: center;
  }
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  border: 1px solid ${COLORS.darkslate};
  padding: 1rem;
  box-shadow: 0 2.74416px 2.74416px rgba(0, 0, 0, 0.0274351), 0 5.48831px 5.48831px rgba(0, 0, 0, 0.0400741),
    0 13.7208px 10.9766px rgba(0, 0, 0, 0.0499982), 0 20.5812px 20.5812px rgba(0, 0, 0, 0.0596004),
    0 41.1623px 41.1623px rgba(0, 0, 0, 0.0709366), 0 96.0454px 89.1851px rgba(0, 0, 0, 0.09);
  @media (min-width: 768px) {
    padding: 2rem;
  }
  @media (min-width: 1024px) {
    aspect-ratio: 4/3;
    padding: 3rem;
    width: 66%;
    // height: 650px;
  }
`

const ImageWrapper = styled.div`
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    flex-direction: row;
    align-items: center;
    img {
      margin-right: 1rem;
    }
    /* justify-content: center; */
  }
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`

const Shine = styled.div`
  z-index: 10;
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 50% 80% at 50% -20%, ${COLORS.shineShadow} 0%, ${COLORS.shineShadow2} 100%);
  @media (min-width: 768px) {
    background: radial-gradient(ellipse 50% 80% at 50% -20%, ${COLORS.shineShadow} 0%, ${COLORS.shineShadow2} 100%);
  }
`

const ContentContainer = styled.div`
  border: 1px solid ${COLORS.darkslate};
  padding: 1.5rem;
  border-top-width: 0;
  box-shadow: 0 2.74416px 2.74416px rgba(0, 0, 0, 0.0274351), 0 5.48831px 5.48831px rgba(0, 0, 0, 0.0400741),
    0 13.7208px 10.9766px rgba(0, 0, 0, 0.0499982), 0 20.5812px 20.5812px rgba(0, 0, 0, 0.0596004),
    0 41.1623px 41.1623px rgba(0, 0, 0, 0.0709366), 0 96.0454px 89.1851px rgba(0, 0, 0, 0.09);
  @media (min-width: 1024px) {
    border-top-width: 1px;
    width: 34%;
    ${(_) => (_.isRight ? "border-right-width: 0;" : "border-left-width: 0;")}
  }
  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const Title = styled.h3`
  margin: 1.5rem 0;
  font-size: 24px;
  line-height: 29px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 38px;
  }
`

const Body = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${COLORS.slate};
`

const FootNote = styled.div``

const ActionButton = styled.a`
  position: relative;

  transition-property: color, border-color, transform, opacity, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  margin: 1rem -1.5rem 0 -1.5rem;
  padding: 0.875rem 1.5rem;
  background-color: "none";
  color: ${COLORS.accent};
  cursor: pointer;
  border-radius: 3rem;

  &:hover {
    color: ${COLORS.lightSlate};
    background-color: ${COLORS.navy};
  }
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
`

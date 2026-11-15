import React from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"
import {openModal} from "../../Components/molecules/ImageModal"

function DesktopGallery({title, subtitle, items = []}) {
  return (
    <SectionContainer>
      {title && (
        <TitleContainer>
          <SectionTitle>{title}</SectionTitle>
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </TitleContainer>
      )}

      <GalleryGrid>
        {items.map((item, index) => (
          <GalleryCard
            key={index}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              openModal({
                imageSrc: item.imgsrc,
                caption: item.caption || item.title,
                originRect: rect,
              })
            }}
          >
            <WindowFrame>
              <WindowHeader>
                <TrafficLights>
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </TrafficLights>
                <WindowTitle>{item.title}</WindowTitle>
              </WindowHeader>
              <ImageWrapper>
                <ScreenshotImage src={item.imgsrc} alt={item.title} loading="lazy" />
              </ImageWrapper>
            </WindowFrame>

            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              {item.caption && <CardCaption>{item.caption}</CardCaption>}
            </CardContent>
          </GalleryCard>
        ))}
      </GalleryGrid>
    </SectionContainer>
  )
}

export default DesktopGallery

const SectionContainer = styled.div`
  padding: 5rem 10%;
  width: 100%;

  @media (max-width: 768px) {
    padding: 3.5rem 5%;
  }
`

const TitleContainer = styled.div`
  margin-bottom: 2.5rem;
  max-width: 900px;
`

const SectionTitle = styled.h2`
  font-family: var(--font-sans, "Poppins", sans-serif);
  font-size: clamp(1.4rem, 2.5vw, 2.2rem);
  font-weight: 500;
  color: var(--lightest-slate, #ccd6f6);
  position: relative;
  margin: 0;

  &::before {
    background-color: #64ffda;
    content: "";
    position: absolute;
    height: 80%;
    width: 0.3rem;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
    left: -20px;
    top: 10%;
  }
`

const SectionSubtitle = styled.p`
  font-family: var(--font-sans, "Poppins", sans-serif);
  font-size: 1rem;
  color: var(--slate, #8892b0);
  margin-top: 0.5rem;
  font-weight: 300;
`

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  width: 100%;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const GalleryCard = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-4px);
  }
`

const WindowFrame = styled.div`
  background: #1e1e1e;
  border: 1px solid rgba(100, 255, 218, 0.18);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.8);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  ${GalleryCard}:hover & {
    border-color: rgba(100, 255, 218, 0.45);
    box-shadow: 0 15px 35px -10px rgba(2, 12, 27, 0.95), 0 0 20px rgba(100, 255, 218, 0.08);
  }
`

const WindowHeader = styled.div`
  background: #252526;
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`

const TrafficLights = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    display: inline-block;

    &.red {
      background-color: #ff5f56;
    }
    &.yellow {
      background-color: #ffbd2e;
    }
    &.green {
      background-color: #27c93f;
    }
  }
`

const WindowTitle = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.75rem;
  color: #8c8c8c;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 60px;
`

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: ${COLORS.navy || "#0a192f"};
`

const ScreenshotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

const CardContent = styled.div`
  padding: 1rem 0.2rem 0;
`

const CardTitle = styled.h3`
  font-family: var(--font-sans, "Poppins", sans-serif);
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--lightest-slate, #ccd6f6);
  margin: 0 0 0.35rem 0;
`

const CardCaption = styled.p`
  font-family: var(--font-sans, "Poppins", sans-serif);
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--slate, #8892b0);
  margin: 0;
  font-weight: 300;
`

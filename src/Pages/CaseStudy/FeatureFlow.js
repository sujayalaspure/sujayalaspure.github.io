import React from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

// Crisp SVG Icons for each stage
const StepIcons = {
  drive: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </svg>
  ),
  map: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
      <line x1="8" y1="2" x2="8" y2="18"></line>
      <line x1="16" y1="6" x2="16" y2="22"></line>
    </svg>
  ),
  playback: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"></polygon>
    </svg>
  ),
  share: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
    </svg>
  ),
}

const defaultSteps = [
  {
    stepNumber: "1",
    title: "Connect External Drives",
    icon: "drive",
    items: [
      {
        title: "Plug & Play Storage",
        desc: "Connect any USB hard drive, SSD, or trip folder containing your photos and videos.",
      },
      {
        title: "Handles 4+ Terabytes",
        desc: "Easily processes multi-terabyte libraries with thousands of high-res photos and 4K clips.",
      },
      {
        title: "Zero Cloud Uploads",
        desc: "No subscriptions, no slow uploads, and no storage limits. Everything stays on your Mac.",
      },
      {
        title: "Full Drone Support",
        desc: "Automatically extracts location coordinates from DJI drone videos and action cameras.",
      },
    ],
  },
  {
    stepNumber: "2",
    title: "Auto Travel Mapping",
    icon: "map",
    items: [
      {
        title: "Every Stop on the Map",
        desc: "The app reads capture dates and locations, automatically pinning every destination.",
      },
      {
        title: "Smart Place Clustering",
        desc: "Intelligently groups photos taken around the same town, beach, or mountain peak.",
      },
      {
        title: "Chronological Routes",
        desc: "Draws visual travel paths between stops in the exact order you traveled.",
      },
      {
        title: "Local Capture Times",
        desc: "Accurately organizes shots by local time, so evening rides stay on the right day.",
      },
    ],
  },
  {
    stepNumber: "3",
    title: "Relive the Experience",
    icon: "playback",
    items: [
      {
        title: "Animated Flight Playback",
        desc: "Press Play to fly stop-to-stop across the map with smooth camera animations.",
      },
      {
        title: "Inline 4K Video Player",
        desc: "Watch your aerial drone footage and action clips directly inside the app gallery.",
      },
      {
        title: "Voice Travel Journal",
        desc: "Dictate travel memories hands-free using your voice; notes attach directly to stops.",
      },
      {
        title: "One-Click Finder Jump",
        desc: "Instantly reveal the original high-resolution file in Finder anytime you need it.",
      },
    ],
  },
  {
    stepNumber: "4",
    title: "Share & Remember",
    icon: "share",
    items: [
      {
        title: "Year in Review Posters",
        desc: "Generate 2400px high-resolution travel posters summarizing your entire year.",
      },
      {
        title: "Custom Visual Themes",
        desc: "Choose from Midnight, Earth, Dark, and Minimal aesthetics tailored for framing.",
      },
      {
        title: "Offline Drive Freedom",
        desc: "Browse your travel maps and route history even when external drives are unplugged.",
      },
      {
        title: "Chat With Your Travels",
        desc: "Ask an AI assistant questions like 'Where was I riding last October?' for instant answers.",
      },
    ],
  },
]

function FeatureFlow({
  category = "HOW IT WORKS: FROM COLD DRIVES TO LIVING JOURNEYS",
  title = "Turn Years of Forgotten Travel Media into an Interactive Personal Atlas",
  steps = defaultSteps,
}) {
  return (
    <SectionContainer>
      <HeaderWrapper>
        {category && <CategoryBadge>{category}</CategoryBadge>}
        {title && <MainTitle>{title}</MainTitle>}
      </HeaderWrapper>

      <FlowContainer>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <StepCard>
              <StepHeader>
                <HeaderIcon>{StepIcons[step.icon] || StepIcons.drive}</HeaderIcon>
                <HeaderTitle>
                  <span>{step.stepNumber}.</span> {step.title}
                </HeaderTitle>
              </StepHeader>

              <ItemsList>
                {step.items.map((item, itemIdx) => (
                  <ItemBox key={itemIdx}>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDesc>{item.desc}</ItemDesc>
                  </ItemBox>
                ))}
              </ItemsList>
            </StepCard>

            {idx < steps.length - 1 && (
              <ConnectorArrow aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </ConnectorArrow>
            )}
          </React.Fragment>
        ))}
      </FlowContainer>
    </SectionContainer>
  )
}

export default FeatureFlow

const SectionContainer = styled.section`
  width: 100%;
  padding: 5rem 6%;
  background-color: ${COLORS.navy || "#0a192f"};
  background-image: 
    radial-gradient(ellipse at 50% 0%, rgba(100, 255, 218, 0.06) 0%, transparent 70%),
    linear-gradient(to right, rgba(100, 255, 218, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(100, 255, 218, 0.03) 1px, transparent 1px);
  background-size: 100% 100%, 48px 48px, 48px 48px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3.5rem 5%;
  }
`

const HeaderWrapper = styled.div`
  margin-bottom: 3rem;
  max-width: 900px;
`

const CategoryBadge = styled.div`
  font-family: var(--font-mono, "Roboto Mono", monospace);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: #64ffda;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`

const MainTitle = styled.h2`
  font-family: var(--font-sans, "Poppins", sans-serif);
  font-size: clamp(1.4rem, 2.5vw, 2.2rem);
  font-weight: 600;
  color: var(--white, #e6f1ff);
  line-height: 1.35;
  margin: 0;
`

const FlowContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 0.8rem;
  width: 100%;

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`

const ConnectorArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64ffda;
  flex-shrink: 0;
  opacity: 0.8;
  padding: 0 0.2rem;
  align-self: center;

  @media (max-width: 1100px) {
    display: none;
  }
`

const StepCard = styled.div`
  flex: 1;
  min-width: 0;
  background: rgba(17, 34, 64, 0.85);
  border: 1px solid rgba(100, 255, 218, 0.16);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.8);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(100, 255, 218, 0.4);
    box-shadow: 0 15px 35px -10px rgba(2, 12, 27, 0.9), 0 0 20px rgba(100, 255, 218, 0.08);
  }
`

const StepHeader = styled.div`
  background: rgba(23, 42, 69, 0.95);
  padding: 1rem 1.1rem;
  border-bottom: 1px solid rgba(100, 255, 218, 0.16);
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const HeaderIcon = styled.div`
  color: #64ffda;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const HeaderTitle = styled.h3`
  font-family: var(--font-sans, "Poppins", sans-serif);
  font-size: 1rem;
  font-weight: 600;
  color: #64ffda;
  margin: 0;
  line-height: 1.3;

  span {
    color: var(--white, #e6f1ff);
    margin-right: 2px;
  }
`

const ItemsList = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`

const ItemBox = styled.div`
  background: rgba(13, 27, 49, 0.9);
  border: 1px solid rgba(35, 53, 84, 0.8);
  border-radius: 8px;
  padding: 0.85rem 0.95rem;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(23, 42, 69, 0.75);
    border-color: rgba(100, 255, 218, 0.25);
  }
`

const ItemTitle = styled.h4`
  font-family: var(--font-sans, "Poppins", sans-serif);
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--white, #e6f1ff);
  margin: 0 0 0.35rem 0;
`

const ItemDesc = styled.p`
  font-family: var(--font-sans, "Poppins", sans-serif);
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--slate, #8892b0);
  margin: 0;
  font-weight: 400;
`

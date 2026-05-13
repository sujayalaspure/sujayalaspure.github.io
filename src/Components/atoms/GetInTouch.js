import React from "react"
import styled, {keyframes} from "styled-components"
import {profile, ProfileLinks} from "../../constant"

export default function GetInTouch() {
  return (
    <Wrapper>
      <Left>
        <Heading>
          <Avatar src={profile} alt="Sujay Alaspure" />
          Let's create
        </Heading>
        <SubHeading>something real.</SubHeading>
      </Left>
      <Right>
        <CircleLink href={ProfileLinks.linkedin} target="_blank" rel="noreferrer">
          <GlowRing />
          <CircleText>Say Hello</CircleText>
        </CircleLink>
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 0;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Avatar = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  vertical-align: middle;
  display: inline-block;
`

const Heading = styled.h2`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  color: var(--lightest-slate);
  margin: 0;
  display: flex;
  align-items: center;
  line-height: 1.1;
`

const SubHeading = styled.h2`
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 700;
  color: var(--slate);
  margin: 0;
  line-height: 1.1;
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Right = styled.div`
  flex-shrink: 0;
`

const GlowRing = styled.div`
  position: absolute;
  inset: -18px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #60efff 0%,
    #a78bfa 30%,
    #818cf8 50%,
    #c084fc 70%,
    #60efff 100%
  );
  filter: blur(12px);
  opacity: 0;
  transition: opacity 0.4s ease;
  animation: ${rotate} 4s linear infinite;
`

const CircleLink = styled.a`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: var(--navy);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease;
  &:hover ${GlowRing} {
    opacity: 1;
  }
  &:hover {
    transform: scale(1.05);
  }
`

const CircleText = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  font-family: var(--font-mono);
  z-index: 1;
`

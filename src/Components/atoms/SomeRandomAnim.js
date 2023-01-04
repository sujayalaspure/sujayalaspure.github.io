import React from "react"
import styled, { keyframes } from "styled-components"
import Star from "../../Assets/images/Star"
export default function SomeRandomAnim() {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <>
      {[...Array(10).keys()].map((i) => (
        <AnimWrapper
          key={i}
          style={{
            top: rand(i, 720),
            right: rand(i, 2000),
            animationDelay: `${rand(i, 1000)}ms`,
          }}
        >
          <Star />
        </AnimWrapper>
      ))}
    </>
  )
}

const ScaleAnim = keyframes`
  from,to {transform: scale(0)}
  50% {transform: scale(0.8)}
`

const RotateAnim = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(180deg)}
  `

const AnimWrapper = styled.div`
  color: aliceblue;
  z-index: -10;
  opacity: 0.2;
  position: fixed;
  animation: ${ScaleAnim} 1000ms ease infinite;
  svg {
    animation: ${RotateAnim} 1300ms linear infinite;
    display: block;
    opacity: 0.7;
    height: 20px;
    path {
      fill: #00ffff;
    }
  }
`

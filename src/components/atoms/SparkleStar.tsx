import React from "react"
import { useEffect } from "react"
import { COLOR } from "src/Utils/theme"
import { keyframes, styled } from "styled-components"

function SparkleStar() {
  let index = 0,
    interval = 1000

  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min
  const animatePerStar = (star: any) => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`)
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`)

    star.style.animation = "none"
    // eslint-disable-next-line no-unused-expressions
    star.offsetHeight // trigger reflow
    star.style.animation = ""
  }

  const animate = () => {
    let timeout
    for (const star of document.getElementsByClassName("magic-star")) {
      timeout = setTimeout(() => {
        animatePerStar(star)
        setInterval(() => animatePerStar(star), 1000)
      }, index++ * (interval / 3))
    }
    return timeout
  }

  useEffect(() => {
    const timeout = animate()
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Container>
      {[...Array(3)].map((e, i) => (
        <span key={i} className="magic-star">
          <svg viewBox="0 0 512 512">
            <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
          </svg>
        </span>
      ))}
    </Container>
  )
}

export default SparkleStar

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`

const scale = keyframes`
 from,
  to {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
`

const Container = styled.div`
  .magic-star {
    /* transition: all 0.25s ease-in-out; */
    --size: clamp(20px, 1.5vw, 30px);
    --star-left: 10px;
    --star-top: 10px;

    animation: ${scale} 1000ms ease forwards;
    display: block;
    height: var(--size);
    left: var(--star-left);
    position: absolute;
    top: var(--star-top);
    width: var(--size);
    svg {
      animation: ${rotate} 1300ms linear infinite;
      display: block;
      opacity: 0.7;
      path {
        fill: ${COLOR.purple};
      }
    }
  }
`

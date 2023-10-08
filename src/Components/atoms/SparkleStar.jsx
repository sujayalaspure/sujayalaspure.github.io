import React from "react"
import {useEffect} from "react"
import Star from "../../Assets/images/Star"

function SparkleStar() {
  let index = 0,
    interval = 1000

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
  const animatePerStar = (star) => {
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
    <>
      {[...Array(3)].map((e, i) => (
        <span key={i} className="magic-star">
          <Star />
        </span>
      ))}
    </>
  )
}

export default SparkleStar

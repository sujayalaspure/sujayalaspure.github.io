import React, {useEffect} from "react"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"
import "styles/components/Hero.css"
import {Link, MouseScrollAnimation} from "Components/atoms"
import {ProfileLinks, resumeLink} from "constant"
import useMobile from "../../utils/useMobile"
import SparkleStar from "../atoms/SparkleStar"
export default function Hero() {
  const {ref, inView} = useInView({threshold: 0.2})
  const animation = useAnimation()
  const isMobile = useMobile()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      })
    }
  }, [inView])
  return (
    <div ref={ref} className="hero">
      <LeftSideBar />
      <RightSideBar />

      <motion.div initial={{x: "-100vw"}} animate={animation} className="HeaderContainer">
        <h3 className="MinorHeading">Hello World, my name is</h3>
        <h1 className="NameHeading">Sujay Alaspure</h1>
        <h2 className="bio">
          I build things that lives on{" "}
          <span className="magic">
            <SparkleStar />
            <span className="magic-text">Internet</span>
          </span>
        </h2>
        <div>
          {!isMobile && (
            <Link button href={ProfileLinks.github} style={{marginRight: "16px"}}>
              Checkout my GitHub!
            </Link>
          )}
          <Link newTab button href={resumeLink}>
            Get Resume
          </Link>
        </div>
      </motion.div>
      <MouseScrollAnimation />
    </div>
  )
}

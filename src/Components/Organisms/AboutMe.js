import {profile} from "constant"
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import "styles/components/AboutMe.css"

export default function AboutMe() {
  const {ref, inView} = useInView({threshold: 0.2})

  const container = {
    hidden: {opacity: 0},
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    hidden: {opacity: 0, y: 20},
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const image = {
    hidden: {opacity: 0, x: -100},
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <div className="about-me">
      <div className="inner" ref={ref}>
        <motion.div className="about-bio" variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
          <motion.p variants={item}>
            I love writing code! 👨‍💻 I strongly believe technology can change anything and that's why I am so passionate
            about it! I am trying to make an impact in the Web and mobile space. I love working across the stack!
          </motion.p>
          <motion.p variants={item}>
            Fast-forward to today, and I've had the privilege of working at an institute, a start-up and a huge
            corporation (TCS).
          </motion.p>
          <motion.p variants={item}>
            Apart from coding, I also love to ride bikes, go on hiking the mountains, trekking.
          </motion.p>
          <motion.p variants={item}>Here are a few technologies I've been working with recently:</motion.p>
          <motion.ul variants={item} className="skills-list">
            <li>React Native</li>
            <li>React Js</li>
            <li>Javascript/Typescript (ES6)</li>
            {/* <li>Express</li> */}
            <li>Kotlin</li>
            <li>SwiftUI</li>
          </motion.ul>
        </motion.div>
        <motion.div variants={image} initial="hidden" animate={inView ? "show" : "hidden"} className="image">
          <div className="wrapper">
            <img src={profile} alt="Sujay Alaspure" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

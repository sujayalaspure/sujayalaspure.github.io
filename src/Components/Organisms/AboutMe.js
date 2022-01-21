import { SectionHeading } from "Components/atoms/Section";
import { profile } from "constant";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "styles/components/AboutMe.css";

export default function AboutMe({ number }) {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      });
    }
  }, [inView]);
  return (
    <section className="about-me">
      <SectionHeading number={number} title="About Me" />

      <div className="inner" ref={ref}>
        <motion.div
          className="about-bio"
          initial={{ x: "-100vw" }}
          animate={animation}
        >
          <p>
            I love writing code! 👨‍💻 I strongly believe technology can change
            anything and that's why I am so passionate about it! I am trying to
            make an impact in the Web and mobile space. I love working across
            the stack!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an
            institute, a start-up and a huge corporation (TCS).
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="skills-list">
            <li>React Js</li>
            <li>React Native</li>
            <li>Javascript (ES6)</li>
            <li>Express</li>
            <li>Firebase</li>
            <li>Python</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ x: "100vw" }}
          animate={animation}
          className="image"
        >
          <div className="wrapper">
            <img src={profile} alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

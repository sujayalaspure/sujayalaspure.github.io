import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import "styles/components/Hero.css";
import SomeRandomAnim from "Components/atoms/SomeRandomAnim";
import MouseScrollAnimation from "Components/atoms/MouseScrollAnimation";
import { Link } from "Components/atoms/Link";
import resume from "Assets/resume-Sujay-Alaspure-V2-3.pdf";
import COLORS from "utils/Colors";

export default function Hero() {
  const RandomArray = [...Array(10).keys()];
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();

  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handle = (e) =>
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });

    document.addEventListener("mousemove", handle);
    return () => {
      document.removeEventListener("mousemove", handle);
    };
  }, []);

  console.log("LOG> [Hero/Hero.js:50] x, y --->", mousePosition);

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
  }, [inView]);
  return (
    <div ref={ref} className="hero">
      {RandomArray.map((i) => (
        <SomeRandomAnim i={i} key={i} />
      ))}

      <div
        style={{
          height: 80,
          width: 80,
          backgroundColor: COLORS.darkslate,
          borderRadius: "50%",
          position: "absolute",
          top: mousePosition.y - 40,
          left: mousePosition.x - 40,
          opacity: 0.7,
          filter: "blur(30px)",
        }}
      />

      <LeftSideBar />
      <RightSideBar />
      <motion.div
        initial={{ x: "-100vw" }}
        animate={animation}
        className="HeaderContainer"
      >
        <h3 className="MinorHeading">Hello World, my name is</h3>
        <h1 className="NameHeading">Sujay Alaspure</h1>
        <h2 className="bio">I build things that lives on Internet.</h2>
        <div>
          <Link button href="mailto:alaspuresujay@gmail.com">
            Hire Me
          </Link>

          <Link style={{ margin: "0 16px" }} href={resume}>
            Get Resume
          </Link>
        </div>
      </motion.div>
      <MouseScrollAnimation />
    </div>
  );
}

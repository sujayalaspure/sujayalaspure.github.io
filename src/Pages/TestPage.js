import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Navigation from "../Components/molecules/Menu/Navigation";
import MenuToggle from "../Components/molecules/Menu/MenuToggle";
import ReactHtmlParser from "react-html-parser";

import { useDimensions } from "../Components/molecules/Menu/useDimensions";
import "styles/pages/TestPage.css";
import { Link } from "Components/atoms/Link";
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function TestPage() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const html = "<a class='link-item' >HTML strings</a>";
  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation isOpen={isOpen} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>{ReactHtmlParser(html)}</div>

        <Link href="#">Hello</Link>
      </div>
    </>
  );
}

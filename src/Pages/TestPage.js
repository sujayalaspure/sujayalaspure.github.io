import React, { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import Navigation from "../Components/molecules/Menu/Navigation";
import MenuToggle from "../Components/molecules/Menu/MenuToggle";

import { useDimensions } from "../Components/molecules/Menu/useDimensions";
import "styles/pages/TestPage.css";
import styled from "styled-components";

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

  return (
    <>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef}>
        <motion.div className="background" variants={sidebar} />
        <Navigation isOpen={isOpen} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {/* <h1>TestPage</h1> */}
        <ButtonWrapper>
          <Btn> Hello sone jhbhv evb s</Btn>
        </ButtonWrapper>
      </div>
    </>
  );
}

const ButtonWrapper = styled.div`
  /* background-color: white; */
  padding: 20px;
  width: 100%;
`;

const Btn = styled.button`
  background-color: transparent;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  outline: none;
  border: none;
  padding: 0.75rem 1rem;
  color: var(--slate);

  &::before {
    content: "";
    border: 1px solid var(--accent);
    display: block;
    position: absolute;
    inset: 0;
    height: 100%;
    width: 50px;
    border-radius: 32px;
    z-index: -1;
    background-color: var(--accent-tint);

    transition: width 200ms;
  }

  &:hover::before {
    /* background-color: red; */
    width: 100%;
  }
`;

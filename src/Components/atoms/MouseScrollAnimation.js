import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import "styles/components/Atoms.css";
import COLORS from "utils/Colors";
export default function MouseScrollAnimation() {
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      console.log("scrolling", window.scrollY);
      setScrolled(window.scrollY);
    };
    return () => {};
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Mouse>
        <Wheel />
      </Mouse>

      <div>
        <ScrollArrowsTop />
        <ScrollArrowsBottom />
      </div>
    </Container>
  );
}

const MouseWheel = keyframes`  
  0% {top: 1px;}
  25% {top: 2px;}
  50% {top: 3px;}
  75% {top: 2px;}
  100% {top: 1px;}`;

const MouseScroll = keyframes`  
0% {opacity: 0;  }
  25% {opacity: 0.5;}
  50% {opacity: 1;}
  75% {opacity: 0.5;}
  100% {opacity: 0;}`;

const Container = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10%;
  width: 24px;
  height: 100px;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.scrolled > 100 ? 0 : 1)};
`;

const Mouse = styled.div`
  height: 42px;
  width: 24px;
  border-radius: 14px;
  -webkit-transform: none;
  transform: none;
  border: 2px solid ${COLORS.lightestSlate};
  top: 170px;
`;

const Wheel = styled.div`
  display: block;
  margin: 5px auto;
  background: transparent;
  position: relative;
  height: 10px;
  width: 6px;
  border: 2px solid ${COLORS.lightestSlate};
  border-radius: 8px;
  -webkit-animation: ${MouseWheel} 0.6s linear infinite;
  animation: ${MouseWheel} 0.6s linear infinite;
`;

const ScrollArrows = styled.div`
  display: block;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  border-right: 2px solid ${COLORS.lightestSlate};
  border-bottom: 2px solid ${COLORS.lightestSlate};
  margin: 0 0 5px 6px;
  width: 13px;
  height: 13px;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  animation: ${MouseScroll} 1s infinite;
`;

const ScrollArrowsTop = styled(ScrollArrows)`
  -webkit-animation-delay: 0.1s;
  -moz-animation-delay: 0.1s;
  animation-delay: 0.1s;
  margin-top: 1px;
`;

const ScrollArrowsBottom = styled(ScrollArrows)`
  -webkit-animation-delay: 0.2s;
  -moz-animation-delay: 0.2s;
  margin-top: -6px;
  animation-delay: 0.2s;
`;

import { useProject } from "Context/ProjectContext";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MarioImage from "../../Assets/images/super-mario.png";

function SuperMario() {
  const { scrolled } = useProject();
  // const [scrolled, setScrolled] = useState(0);
  // useEffect(() => {
  //   window.onscroll = () => {
  //     setScrolled(window.scrollY);
  //     console.log(window.scrollY);
  //   };
  //   return () => {};
  // }, []);
  return (
    <Wrapper scrolled={scrolled}>
      <Image src={MarioImage} />
    </Wrapper>
  );
}

export default SuperMario;

const go = keyframes`
100%{
  transform: translateX(100vw);
}
  `;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  /* right: 0; */
  /* left: 0; */
  width: 100vw;
  transition: all 0.5s ease-in-out;
  opacity: ${(props) => (props.scrolled > 100 ? 0 : 1)};
  animation-name: ${go};
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
const stomp = keyframes`
  0% {
    transform: translateY(0) rotate(15deg);
  }
  70% {
    transform: translateY(0) rotate(15deg);
  }
  100% {
    transform: translateY(0) rotate(15deg);
  }
  60% {
    transform: translateY(-2rem) rotate(6deg);
  }
  `;
const Image = styled.img`
  height: 7vh;
  opacity: 0.5;
  transform: rotate(15deg);
  animation-name: ${stomp};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;

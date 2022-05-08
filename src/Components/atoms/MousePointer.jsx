import { useProject } from "Context/ProjectContext";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "utils/Colors";

const MousePointer = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  const { throttle } = useProject();

  const updateThrottled = throttle((e) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  }, 100);
  useEffect(() => {
    document.addEventListener("mousemove", updateThrottled);
    return () => {
      document.removeEventListener("mousemove", updateThrottled);
    };
  }, []);

  return <Glow style={{ left: mousePosition.x - 40, top: mousePosition.y - 40 }} />;
};

export default MousePointer;

const Glow = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${COLORS.darkslate};
  border-radius: 50%;
  position: absolute;
  opacity: 0.7;
  filter: blur(30px);
  z-index: -1;
  transition: all 0.1s ease;
`;

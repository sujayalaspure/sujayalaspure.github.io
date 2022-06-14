import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import MouseScrollAnimation from "Components/atoms/MouseScrollAnimation";
import styled from "styled-components";

export default function Banner({ index, title, imgsrc }) {
  return (
    <div style={{ padding: index === 0 ? "0" : "10% 0" }}>
      {title && (
        <Title>
          <h1>{title}</h1>
        </Title>
      )}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
        <Parallax bgImage={imgsrc} strength={300}>
          <div style={{ height: "100vh", width: "100%", position: "relative" }}>
            {index === 0 && <MouseScrollAnimation />}
          </div>
        </Parallax>
      </motion.div>
    </div>
  );
}

const Title = styled.div`
  padding: 4rem 10%;
  padding-top: 0;
  font-size: clamp(1rem, 2vw, 1.7rem);
  /* letter-spacing: 0.05em; */
  /* word-break: normal; */
  -webkit-hyphens: manual;
  -moz-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
  max-width: 70%;
  h1 {
    /* line-height: 10px; */
    font-weight: 500;
  }
`;

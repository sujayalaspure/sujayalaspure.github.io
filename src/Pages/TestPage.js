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

// const content = {
//   1641081600: 2,
//   1641254400: 2,
//   1641340800: 6,
//   1641427200: 1,
//   1642809600: 2,
//   1642896000: 4,
//   1642982400: 2,
//   1643068800: 2,
//   1643155200: 4,
//   1643241600: 1,
//   1643328000: 18,
//   1643414400: 5,
//   1643500800: 10,
//   1643587200: 3,
//   1643673600: 2,
//   1643760000: 3,
//   1643932800: 5,
//   1644278400: 1,
//   1644364800: 3,
//   1644451200: 3,
//   1644537600: 6,
//   1644624000: 4,
//   1644710400: 5,
//   1644796800: 12,
//   1644883200: 6,
//   1644969600: 9,
//   1645056000: 5,
//   1645142400: 9,
//   1645228800: 1,
//   1645315200: 7,
//   1645401600: 17,
//   1645488000: 9,
//   1645574400: 2,
//   1645660800: 7,
//   1645747200: 2,
//   1645833600: 17,
//   1645920000: 5,
//   1646006400: 11,
//   1646092800: 1,
//   1631318400: 8,
//   1633132800: 9,
//   1633219200: 4,
//   1633478400: 13,
//   1633564800: 2,
//   1633824000: 4,
//   1640736000: 2,
//   1640822400: 3,
// };
export default function TestPage() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const months = Array(12)
    .fill(null)
    .map((_, i) => i);
  const weeks = Array(5)
    .fill(null)
    .map((_, i) => i);
  const days = Array(7)
    .fill(null)
    .map((_, i) => i);

  console.log(months);
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
      <HeatMapWrapper>
        <HeatMap>
          <svg viewBox="0 0 799.3 104.64" width="854">
            <h1>Hello</h1>
            {months.map((month, index) => (
              <g x={month * 62.029999999999994} y="0" class={`month ${month}`}>
                {weeks.map((week, index) => (
                  <g
                    x={month * 62.029999999999994 + week * 11.52}
                    y="0"
                    class="week 1"
                  >
                    {days.map((day, index) => (
                      <rect
                        x={month * 62.029999999999994 + week * 11.52}
                        y={day * 11.52}
                        width="8.86"
                        height="8.86"
                        fill={`rgb(${Math.random() * 255}, ${
                          Math.random() * month * 62.029999999999994 +
                          week * 11.52
                        }, ${Math.random() * 255})`}
                        rx="2"
                        ry="2"
                      ></rect>
                    ))}
                  </g>
                ))}
              </g>
            ))}

            <g x="0" y="0" class="month 1">
              <g x="0" y="0" class="week 1">
                <rect
                  x="0"
                  y="0"
                  width="8.86"
                  height="8.86"
                  fill="transparent"
                  rx="2"
                  ry="2"
                ></rect>
                <rect
                  x="0"
                  y="11.52"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="0"
                  y="23.04"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="0"
                  y="34.56"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="0"
                  y="46.08"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="0"
                  y="57.599999999999994"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="0"
                  y="69.12"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
              </g>
              <g x="11.52" y="0" class="week 2">
                <rect
                  x="11.52"
                  y="0"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="11.52"
                  y="11.52"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="11.52"
                  y="23.04"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="11.52"
                  y="34.56"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="11.52"
                  y="46.08"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="11.52"
                  y="57.599999999999994"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="11.52"
                  y="69.12"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
              </g>
              <g x="23.04" y="0" class="week 3">
                <rect
                  x="23.04"
                  y="0"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="23.04"
                  y="11.52"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="23.04"
                  y="23.04"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="23.04"
                  y="34.56"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="23.04"
                  y="46.08"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="23.04"
                  y="57.599999999999994"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="23.04"
                  y="69.12"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
              </g>
              <g x="34.56" y="0" class="week 4">
                <rect
                  x="34.56"
                  y="0"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="34.56"
                  y="11.52"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="34.56"
                  y="23.04"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="34.56"
                  y="34.56"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="34.56"
                  y="46.08"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="34.56"
                  y="57.599999999999994"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="34.56"
                  y="69.12"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
              </g>
              <g x="46.08" y="0" class="week 5">
                <rect
                  x="46.08"
                  y="0"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="46.08"
                  y="11.52"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="46.08"
                  y="23.04"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
                <rect
                  x="46.08"
                  y="34.56"
                  width="8.86"
                  height="8.86"
                  fill="rgba(255, 255, 255, 0.1)"
                  rx="2"
                  ry="2"
                  class="cursor-pointer"
                ></rect>
              </g>
            </g>
          </svg>
        </HeatMap>
      </HeatMapWrapper>
    </>
  );
}

const HeatMapWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* background: #f0f0f0; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const HeatMap = styled.div`
  width: 100%;
  /* height: 100%; */
  background-color: #222;
  padding: 20px;
`;

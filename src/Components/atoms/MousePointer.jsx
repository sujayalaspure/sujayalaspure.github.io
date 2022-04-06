import React, { useEffect } from "react";
import { useState } from "react";
import COLORS from "utils/Colors";

const MousePointer = () => {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }
  const updateThrottled = throttle((e) => {
    setMousePosition({
      x: e.pageX,
      y: e.pageY,
    });
  }, 30);
  useEffect(() => {
    document.addEventListener("mousemove", updateThrottled);
    return () => {
      document.removeEventListener("mousemove", updateThrottled);
    };
  }, []);

  return (
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
        zIndex: -1,
      }}
    />
  );
};

export default MousePointer;

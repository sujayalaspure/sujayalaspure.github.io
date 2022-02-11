import React, { useEffect } from "react";
import { useState } from "react";
import COLORS from "utils/Colors";

const MousePointer = () => {
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
      }}
    />
  );
};

export default MousePointer;

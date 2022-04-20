import React from "react";
import { motion } from "framer-motion";
export default function SomeRandomAnim({ i }) {
  return (
    <>
      {[...Array(10).keys()].map((i) => (
        <motion.div
          key={i}
          style={{
            zIndex: -10,
            opacity: 0.2,
            position: "fixed",
            top: i + Math.floor(Math.random() * 720) + 50,
            right: i + Math.floor(Math.random() * 1901) + 50,
          }}
          animate={{ rotate: 360, scrollSnapAlign: "end" }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}>
          ⭐️
        </motion.div>
      ))}
    </>
  );
}

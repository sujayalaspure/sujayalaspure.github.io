import React from "react"
import { Title } from "./style"
import { motion } from "framer-motion"

function Fullimage({ index, imgsrc, title }) {
  return (
    <div style={{ padding: index === 0 ? "0" : "10% 0" }}>
      {title && (
        <Title>
          <h1>{title}</h1>
        </Title>
      )}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }}>
        <img src={imgsrc} alt="" style={{ width: "100vw", height: "100%", objectFit: "cover" }} />
      </motion.div>
    </div>
  )
}

export default Fullimage

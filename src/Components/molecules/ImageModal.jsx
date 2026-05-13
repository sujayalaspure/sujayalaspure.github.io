import React, {forwardRef, useImperativeHandle, useState} from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"
import MobileFrame from "../atoms/MobileFrame"
import {motion, AnimatePresence} from "framer-motion"

export const imageModalRef = React.createRef()

export const openModal = ({imageSrc, caption, variant, ...rest}) => {
  imageModalRef.current.open({imageSrc, caption, variant, ...rest})
}

const ImageModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState({imageSrc: "", caption: "", variant: "image"})

  const open = ({imageSrc, caption, variant = "image", ...rest}) => {
    setIsOpen(true)
    setConfig({imageSrc, caption, variant, ...rest})
  }

  const close = () => setIsOpen(false)

  const handleClick = (e) => {
    e.stopPropagation()
    close()
  }

  useImperativeHandle(ref, () => ({handleClick, open, close}), [isOpen])

  const originRect = config.originRect
  const vw = window.innerWidth
  const vh = window.innerHeight
  const targetH = vh * 0.8

  // Offset from center of thumbnail to center of screen
  const originCx = originRect ? originRect.left + originRect.width / 2 : vw / 2
  const originCy = originRect ? originRect.top + originRect.height / 2 : vh / 2
  const dx = originCx - vw / 2
  const dy = originCy - vh / 2
  const scaleFrom = originRect ? originRect.height / targetH : 0.1

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Backdrop
            as={motion.div}
            onClick={close}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.25}}
          />
          <ModalContent onClick={close}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{x: dx, y: dy, scale: scaleFrom, opacity: 0.5}}
              animate={{x: 0, y: 0, scale: 1, opacity: 1}}
              exit={{x: dx, y: dy, scale: scaleFrom, opacity: 0}}
              transition={{type: "spring", damping: 28, stiffness: 220}}
              style={{cursor: "pointer"}}
            >
              <MobileFrame isNotch={config?.isNotch}>
                <img src={config.imageSrc} loading="lazy" />
              </MobileFrame>
            </motion.div>
          </ModalContent>
        </>
      )}
    </AnimatePresence>
  )
})

export default ImageModal

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.backdrop};
  z-index: 1000;
`

const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: 80vh;
    object-fit: contain;
  }
`

import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"
import MobileFrame from "../atoms/MobileFrame"

export const imageModalRef = React.createRef()

export const openModal = ({imageSrc, caption, variant}) => {
  imageModalRef.current.open({imageSrc, caption, variant})
}

const ImageModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [config, setConfig] = useState({
    imageSrc: "",
    caption: "",
    variant: "image",
  })

  const handleClick = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const open = ({imageSrc, caption, variant = "image", ...rest}) => {
    console.log("open")
    setIsOpen(true)
    setConfig({imageSrc, caption, variant, ...rest})
  }

  const close = () => {
    setIsOpen(false)
  }

  useImperativeHandle(
    ref,
    () => ({
      handleClick,
      open,
      close,
    }),
    [isOpen]
  )
  if (!isOpen) return null

  return (
    <>
      <Modal ref={ref} open={isOpen} onClick={close}>
        <ImageWrapper>
          <MobileFrame isNotch={config?.isNotch}>
            <img src={config.imageSrc} loading="lazy" />
          </MobileFrame>
        </ImageWrapper>
      </Modal>
    </>
  )
})

export default ImageModal

const Modal = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${COLORS.backdrop};
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageWrapper = styled.div`
  img {
    max-width: 100%;
    height: 80vh;
    object-fit: contain;
  }
`

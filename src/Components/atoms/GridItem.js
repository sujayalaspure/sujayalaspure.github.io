import React, {useEffect} from "react"
import {motion, useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

export default function GridItem({img, caption = null, right = false}) {
  const {ref, inView} = useInView({threshold: 0.2})
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.1,
        },
      })
    }
  }, [inView])
  return (
    <Container ref={ref}>
      <motion.div initial={{x: right ? "200vw" : "-100vw"}} animate={animation}>
        <Content>
          <Image src={img} alt="" loading="lazy" />
          {caption && (
            <Caption>
              <p>{caption}</p>
            </Caption>
          )}
        </Content>
      </motion.div>
    </Container>
  )
}

const Container = styled.div`
  padding: 2.5rem 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 30px 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
  max-height: 80vh;
  width: 100%;
  height: auto;
`

const Caption = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  text-align: center;
  padding: 0 15%;
  p {
    font-size: 1.25rem;
    color: ${COLORS.lightSlate};
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`

import styled from "styled-components"
import COLORS from "../../utils/Colors"
import MobileFrame from "../../Components/atoms/MobileFrame"
import {openModal} from "../../Components/molecules/ImageModal"

function Screenshots({title, content}) {
  return (
    <Container>
      {content.map((row, index) => (
        <Row key={index}>
          {row.map(({imgsrc, caption, isNotch}, idx) => (
            <ImageWrapper onClick={() => openModal({imageSrc: imgsrc, caption, isNotch})} key={`${index}-${idx}`}>
              <MobileFrame isNotch={isNotch}>
                <img src={imgsrc} loading="lazy" />
              </MobileFrame>
              <Caption>
                <p>{caption}</p>
              </Caption>
            </ImageWrapper>
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default Screenshots

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 4rem 20%;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  /* max-height: 50vh; */

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const ImageWrapper = styled.div`
  /* flex: 1; */
  /* border: 1px solid #ff0a; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 100%;
    /* height: auto; */
  }
`

const Caption = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  text-align: center;
  /* padding: 0 15%; */
  p {
    font-size: clamp(0.8rem, 1.8vw, 1.25rem);
    color: ${COLORS.lightSlate};
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`

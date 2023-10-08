import styled from "styled-components"
import COLORS from "../../utils/Colors"
import MobileFrame from "../../Components/atoms/MobileFrame"

function Screenshots({title, content}) {
  return (
    <Container>
      {content.map((row, index) => (
        <Row key={index}>
          {row.map(({imgsrc, caption, isNotch}, idx) => (
            <ImageWrapper key={`${index}-${idx}`}>
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
`

const Caption = styled.div`
  /* margin-top: 0.5rem; */
  width: 100%;
  text-align: center;
  /* padding: 0 15%; */
  p {
    font-size: 1.25rem;
    color: ${COLORS.lightSlate};
  }

  @media (max-width: 768px) {
    padding: 0 5%;
  }
`

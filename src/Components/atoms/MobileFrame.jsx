import styled from "styled-components"
import COLORS from "../../utils/Colors"

function MobileFrame({children, isNotch}) {
  return (
    <Container>
      {isNotch && <Notch />}
      <PowerButton />
      <Buttons index={0} />
      <Buttons index={1} />
      <Buttons index={2} />
      {children}
    </Container>
  )
}

export default MobileFrame

const Container = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${COLORS.darkslate};
  border-radius: 26px;
  padding: 0.5rem;
  position: relative;
  img {
    border: 1px solid ${COLORS.darkslate};
    border-radius: 18px;
    /* width: 100%; */
    height: 100%;
    object-fit: cover;
  }
`
const Notch = styled.div`
  background-color: ${COLORS.black};
  width: 30%;
  height: 4%;
  position: absolute;
  top: 22px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 30px;
`

const Buttons = styled.div`
  border: 1px solid ${COLORS.darkslate};
  height: ${(_) => (_.index === 0 ? "4%" : "8%")};
  left: -7px;
  top: ${(_) => _.index * 10 + 10 + "%"};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  position: absolute;
  width: 7px;
`
const PowerButton = styled(Buttons)`
  right: -7px;
  left: auto;
  top: 10%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`

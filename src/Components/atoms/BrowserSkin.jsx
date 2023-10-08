import styled from "styled-components"
import {MdArrowBack, MdArrowForward, MdRefresh} from "react-icons/md"
import COLORS from "../../utils/Colors"

function BrowserSkin({children, link}) {
  return (
    <Container>
      <ToolBar>
        <MdArrowBack />
        <MdArrowForward />
        <MdRefresh />
        <InputBar>
          {link}
          <MdRefresh className="refresh" />
        </InputBar>
      </ToolBar>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  )
}

export default BrowserSkin

const Container = styled.div`
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ToolBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0;

  .react-icons {
    margin: 0 0.5rem;
  }
  .refresh {
    display: none;
  }

  @media (max-width: 1024px) {
    .react-icons {
      display: none;
    }
    .refresh {
      display: block;
    }
  }
`

const InputBar = styled.div`
  border: 1px solid ${COLORS.darkslate};
  border-radius: 5rem;
  padding: 0 20px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 1 0;
  color: ${COLORS.slate};
  font-size: clamp(0.75rem, 1vw, 1rem);
`

const ChildrenContainer = styled.div`
  border: 1px solid ${COLORS.darkslate};
  /* height: 100%; */
  /* flex: 1 1 0; */
  margin-top: 10px;
  border-radius: 18px;
  padding: 0.5rem;
  overflow: hidden;
  @media (max-width: 1024px) {
    margin-top: 0;
  }
`

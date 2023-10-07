import React from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

function UseCasesScenarios({title, options}) {
  return (
    <Container>
      {title && (
        <Title>
          <h1>{title}</h1>
        </Title>
      )}

      <UseCaseWrapper>
        {options.map((option, index) => (
          <>
            {option?.children ? (
              <UseCaseRow>
                {option.children.map((child, index) => (
                  <UseCase key={index}>
                    {child.title && <UseCaseTitle>{child.title}</UseCaseTitle>}
                    <UseCaseDescription>
                      <p>{child.content}</p>
                    </UseCaseDescription>
                  </UseCase>
                ))}
              </UseCaseRow>
            ) : (
              <UseCase key={index}>
                {option.title && <UseCaseTitle>{option.title}</UseCaseTitle>}
                <UseCaseDescription>
                  <p>{option.content}</p>
                </UseCaseDescription>
              </UseCase>
            )}
          </>
        ))}
      </UseCaseWrapper>
    </Container>
  )
}

export default UseCasesScenarios

const Container = styled.div``

const Title = styled.div`
  padding: 4rem 10%;
  padding-top: 0;
  font-size: clamp(1rem, 2vw, 1.7rem);
  /* letter-spacing: 0.05em; */
  /* word-break: normal; */
  -webkit-hyphens: manual;
  -moz-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
  max-width: 70%;
  h1 {
    /* line-height: 10px; */
    font-weight: 500;
    position: relative;
    &::before {
      background-color: #b5e2cb;
      content: "";
      position: absolute;
      height: 90%;
      width: 0.3rem;
      border-top-right-radius: 100%;
      border-bottom-right-radius: 100%;
      left: -20px;

      top: 5%;
    }
  }
`

const UseCaseWrapper = styled.div`
  padding: 2rem calc(10% - 0.7rem);
`

const UseCaseRow = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const UseCase = styled.div`
  background-color: ${COLORS.lightnavy};
  padding: 2rem 5%;
  border-radius: 10px;
  margin: 0.7rem;

  grid-area: ${(props) => props.gridArea};
`
const UseCaseTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: ${COLORS.lightestSlate};
`
const UseCaseDescription = styled.div``

// .parent {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-template-rows: repeat(5, 1fr);
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   }

//   .div1 { grid-area: 1 / 1 / 2 / 4; }
//   .div2 { grid-area: 2 / 1 / 3 / 3; }
//   .div3 { grid-area: 2 / 2 / 3 / 4; }
//   .div4 { grid-area: 3 / 1 / 4 / 4; }
//   .div5 { grid-area: 4 / 1 / 5 / 2; }
//   .div6 { grid-area: 4 / 2 / 5 / 3; }
//   .div7 { grid-area: 4 / 3 / 5 / 4; }
//   .div8 { grid-area: 5 / 1 / 6 / 4; }

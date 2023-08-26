import { ProfileLinks, resumeLink } from "src/Utils/constants"
import { COLOR } from "src/Utils/theme"
import Button from "src/components/atoms/Button"
import MouseScrollAnimation from "src/components/atoms/MouseScrollAnimation"
import SparkleStar from "src/components/atoms/SparkleStar"
import { keyframes, styled } from "styled-components"

type Props = {}

function Hero({}: Props) {
  const isMobile = window.innerWidth < 768
  return (
    <Container>
      <Shine />
      <div>
        <MinorHeading>Hello World, my name is</MinorHeading>
        <NameHeading>Sujay Alaspure</NameHeading>
        <Bio>
          I build things that lives on{" "}
          <span className="magic">
            <SparkleStar />
            <span className="magic-text">Internet</span>
          </span>
        </Bio>
        <Actions>
          {!isMobile && <Button href={ProfileLinks.github}>Checkout my GitHub!</Button>}
          <Button newTab href={resumeLink}>
            Get Resume
          </Button>
        </Actions>
      </div>
      <MouseScrollAnimation />
    </Container>
  )
}

export default Hero
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px auto;
  justify-content: center;
`

const Shine = styled.div`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0 0 10%;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse 50% 50% at 50% -20%, rgba(13, 43, 185, 0.3) 0%, rgba(238, 130, 238, 0) 100%);
`

const MinorHeading = styled.h3`
  margin: 0px 0px 30px 4px;
  color: ${COLOR.accent};
  font-family: "Fira Code";
  font-size: clamp(14px, 5vw, 16px);
  font-weight: 400;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  /* justify-content: center; */
`
const NameHeading = styled.h1`
  color: ${COLOR.lightestText};
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
`
const backgroundPan = keyframes`
from {
    background-position: 0% center;
  }

  to {
    background-position: -200% center;
  }`

const Bio = styled.h2`
  color: ${COLOR.darkText};
  font-size: clamp(22px, 6vw, 50px);
  font-weight: 600;
  margin-top: 20px;
  line-height: 1.2;
  --purple: rgb(123, 31, 162);
  --violet: rgb(103, 58, 183);
  --pink: rgb(244, 143, 177);
  .magic {
    display: inline-block;
    position: relative;
    .magic-text {
      animation: ${backgroundPan} 3s linear infinite;
      background: linear-gradient(to right, var(--purple), var(--violet), var(--pink), var(--purple));
      background-size: 200%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    }
  }
`

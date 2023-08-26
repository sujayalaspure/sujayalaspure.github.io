import { COLOR } from "src/Utils/theme"
import Hero from "src/components/Hero"
import RightSidebar from "src/components/LeftSidebar"
import styled from "styled-components"

type Props = {}

function Home({}: Props) {
  return (
    <Container>
      <RightSidebar />
      <Hero />
    </Container>
  )
}

export default Home

const Container = styled.div`
  background-color: ${COLOR.bg};
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  color: ${COLOR.text};
`

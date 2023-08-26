import { COLOR, SIZE } from "src/Utils/theme"
import styled from "styled-components"
import { socialLink } from "src/Utils/constants"

type Props = {}

function LeftSidebar({}: Props) {
  return (
    <Container>
      <Logo>
        <img src="/favicon/android-chrome-384x384.png" alt="logo" width="50px" height="50px" />
      </Logo>

      <Sociallinks>
        {socialLink.map(({ name, link, Icon }) => (
          <ListItem>
            <>
              <a aria-label={`Link to ${name}`} href={link} target="_blank" rel="noreferrer">
                <p>{Icon}</p>
              </a>
            </>
          </ListItem>
        ))}
      </Sociallinks>
    </Container>
  )
}

export default LeftSidebar

const Container = styled.div`
  background-color: ${COLOR.darkbg};
  position: sticky;
  top: 0;
  height: 100vh;
  width: 70px;
  flex-direction: column;
  align-items: stretch;
  border-right-width: 1px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-right-color: ${COLOR.border};
  border-right-style: solid;
  display: flex;
  align-items: center;
`

const Logo = styled.div`
  margin-top: 1rem;
  margin-bottom: auto;
`
const Sociallinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 1rem;
  .react-icons {
    color: ${COLOR.darkText} !important;
  }
`

const ListItem = styled.li`
  cursor: pointer;
  list-style: none;
  transition: ${SIZE.transition};
  padding: 10px;
  &:hover {
    .react-icons {
      color: ${COLOR.accent} !important;
    }
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

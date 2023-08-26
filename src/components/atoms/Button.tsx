import { COLOR, SIZE } from "src/Utils/theme"
import { styled } from "styled-components"

type Props = {
  isLink?: boolean
  newTab?: boolean
  href?: string
  children?: React.ReactNode
}

function Button({ isLink = false, newTab = false, href = "", children }: Props) {
  const onClick = (e: any) => {
    console.log("clicked")
    e.stopPropagation()
    if (isLink || href) {
      window.open(href, newTab ? "_blank" : "_self")
    }
  }

  return <Container onClick={onClick}>{children}</Container>
}

export default Button

const Container = styled.div`
  background-color: transparent;
  border: 1px solid ${COLOR.accent};
  border-radius: 8px;
  padding: 1.25rem 1.75rem;
  font-size: ${SIZE["fz-sm"]};
  font-family: "Roboto Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${SIZE.transition};
  margin: 40px 0;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${SIZE.transition};
  color: ${COLOR.accent};

  &:hover {
    background-color: ${COLOR.accentTint};
    outline: none;
  }
`

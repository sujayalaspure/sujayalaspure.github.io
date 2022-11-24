import React from "react"
import styled from "styled-components"
import COLORS from "../../utils/Colors"

export default function Button({ children, href, onClick, style, ...props }) {
  return (
    <ButtonWrapper style={style} href={href} onClick={onClick} {...props}>
      {children}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.a`
  --bc: ${COLORS.lightestSlate};
  --tc: ${COLORS.accent};
  color: var(--tc);
  padding: 1rem 1.25rem;
  font-size: 1rem;
  font-family: inherit;
  font-weight: 500;
  letter-spacing: 0.15em;
  line-height: 1;
  border: 2px solid var(--bc);
  border-right: none;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  text-transform: uppercase;
  padding: 1.5rem;
  position: relative;
  -webkit-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
  white-space: nowrap;

  &::before {
    right: 0;
    top: 0;
    content: "";
    height: 100%;
    position: absolute;
    width: 2px;
    transition: inherit;
    background-image: linear-gradient(
      180deg,
      var(--bc),
      var(--bc) 15%,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 85%,
      var(--bc) 0
    );
  }
  &::after {
    border-left-color: var(--bc);
    border-bottom-width: 0.5rem;
    border-left-width: 0.5rem;
    border-top-width: 0.5rem;
    right: -0.45rem;
    border-top: 0.7rem solid rgba(0, 0, 0, 0);
    border-bottom: 0.7rem solid rgba(0, 0, 0, 0);
    border-left: 0.7rem solid var(--bc);
    content: "";
    position: absolute;
    right: -0.6rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    transition: inherit;

    z-index: 0;
  }
  &:hover {
    /* background-color: var(--accent-tint); */
    transform: translateX(0.25rem);
    --bc: ${COLORS.accent};
    color: ${COLORS.lightestSlate};
    &::after {
      transform: translateX(0.25rem) translateY(-50%);
    }
  }
`

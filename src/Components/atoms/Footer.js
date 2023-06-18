import React from "react"
import { ProfileLinks, socialLink } from "constant"
import styled from "styled-components"
export default function Footer({ showSocial = false }) {
  return (
    <FooterContainer>
      <FooterSocial showSocial={showSocial}>
        <ul>
          {socialLink.map(({ Icon, link, name }) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noreferrer">
                {Icon}
              </a>
            </li>
          ))}
        </ul>
      </FooterSocial>
      <FooterCredits>
        <a href={ProfileLinks.github} target="_blank" rel="noopener noreferrer">
          Designed & Built by Sujay Alaspure
        </a>
        <Legal>
          The source code for this website is
          <a href={`${ProfileLinks.github}/sujayalaspure.github.io`}> available on GitHub </a>
          under the
          <a href="http://opensource.org/licenses/mit-license.html"> MIT license.</a>
        </Legal>
      </FooterCredits>
    </FooterContainer>
  )
}

export const FooterContainer = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`
export const FooterSocial = styled.div`
  display: ${(props) => (props.showSocial ? "block" : "none")};
  width: 100%;
  max-width: 220px;
  color: var(--light-slate);
  margin: 0px auto 10px;
  ul {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  @media (max-width: 768px) {
    display: block;
  }
`

export const FooterCredits = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  a {
    padding: 10px;
  }
`

export const Legal = styled.p`
  margin-bottom: 1rem;
  font-size: 0.6rem;
  opacity: 0.7;
`

import styled, {keyframes} from "styled-components"
import {ProfileLinks, socialLink} from "../../constant"
import COLORS from "../../utils/Colors"

const HEIGHT = "70px"
const bufferHeight = "28px"

function Footer() {
  return (
    <Container>
      <Content>
        <BG />
        <ContentText>
          <FooterSocialLinkList>
            {socialLink.map(({name, link, Icon, color}) => (
              <SocialLinkItem aria-label={`Link to ${name}`} href={link} target="_blank" rel="noreferrer">
                {Icon}
              </SocialLinkItem>
            ))}
          </FooterSocialLinkList>
          Designed & Built by <a href="">Sujay Alaspure</a>
          {/* <p>
            Inspired from <a href="https://idx.dev">idx.dev</a>
          </p> */}
        </ContentText>
        <FootNote>
          The source code for this website is
          <a href={`${ProfileLinks.github}/sujayalaspure.github.io`}>&nbsp; available on GitHub</a>
          <span>&nbsp; under the &nbsp; </span>
          <a href="http://opensource.org/licenses/mit-license.html">MIT license.</a>
        </FootNote>
      </Content>
    </Container>
  )
}

export default Footer

const Container = styled.div`
  /* position: fixed; */
  bottom: 0;
  z-index: 50;
  color: ${COLORS.slate};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 768px) {
    position: fixed;
  }
`

const FootNote = styled.div`
  width: 100%;
  background-color: ${COLORS.navy};
  border-top: 1px solid ${COLORS.border};
  font-size: 0.6rem;
  text-align: center;
  color: ${COLORS.slate};
  opacity: 0.6;
  padding: 4px 0;
`

const BG = styled.div`
  background-color: ${COLORS.navy};
  height: 100%;
  width: 100%;
  position: absolute;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  z-index: -1;
`

const pulseshimmer = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
`

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  width: 90%;
  position: relative;
  cursor: pointer;
  background-color: ${COLORS.darknavy};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  transition: transform 0.3s ease;
  @media (min-width: 768px) {
    width: 100%;
    transform: translateY(${bufferHeight});
    /* transform: translateY(2); */
  }

  &::before {
    content: "";
    background: linear-gradient(133.61deg, #a87ffb 17.33%, #25a6e9 100.47%);
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    width: 80%;
    /* height: 100%; */
    inset: -1px;
    margin: auto;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    top: 1rem;
    bottom: -15;
    z-index: -10;
    transform: translate3d(0, 0, 0) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
    filter: blur(64px);
    transition: opacity 0.5s ease;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    &::after {
      background-position: 100% 50%;
    }
    transform: translateY(0);
  }

  &::after {
    content: "";
    background: linear-gradient(
      to right,
      #2e3c51 0%,
      #2e3c51 34%,
      #2e3c51 49%,
      #fff 57%,
      #fff 64%,
      #a87ffb 66%,
      #25a6e9 100%
    );
    background-size: 300% 100%;
    background-position: 0% 50%;
    background-repeat: no-repeat;
    transition: background-position 0.8s ease;
    inset: -1px;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    pointer-events: none;
    position: absolute;
    bottom: 1px;
    z-index: -10;
    transform: translate3d(0, 0, 0) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
    animation: 0.7s ${pulseshimmer} 1s cubic-bezier(0.8, 0, 0.2, 1) infinite alternate;
    animation-fill-mode: backwards;
  }
  a {
    text-decoration: none;
    color: ${COLORS.accent};
  }
  p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${COLORS.lightSlate};
  }
`

const ContentText = styled.div`
  padding: 0.8rem 0;
  text-align: center;
  font-size: 0.9rem;
  /* font-weight: 500; */
  line-height: 1.5;
  color: ${COLORS.slate};
  font-family: "Roboto mono";
`

const FooterSocialLinkList = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`

const SocialLinkItem = styled.a`
  color: ${COLORS.slate} !important;
`

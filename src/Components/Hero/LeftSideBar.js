import React from "react"
import Tooltip from "@material-ui/core/Tooltip"

import {Logo, socialLink} from "../../constant"
import "styles/components/Hero.css"
import styled from "styled-components"
import COLORS from "../../utils/Colors"
import {logEventAnalytics} from "../../utils/firebase"

export default function LeftSideBar() {
  const handleSocialLinkClick = (name) => (e) => {
    console.log(name)
    logEventAnalytics("social_link_click", {name})
  }
  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="Sujay Alaspure" />
      </LogoContainer>
      <SocialLinkList>
        {socialLink.map(({name, link, Icon, color}) => (
          <Tooltip title={name} aria-label={name} placement="right" arrow key={link} color={color}>
            <SocialLinkItem>
              <SocialLink
                onClick={handleSocialLinkClick(name)}
                aria-label={`Link to ${name}`}
                href={link}
                target="_blank"
                rel="noreferrer"
                color={color}
              >
                {Icon}
              </SocialLink>
            </SocialLinkItem>
          </Tooltip>
        ))}
      </SocialLinkList>
    </Container>
  )
}

const Container = styled.div`
  width: 70px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;
  color: ${COLORS.slate};
  left: 0;
  /* right: auto; */
  border-right: 1px solid ${COLORS.darkslate};
  background-color: ${COLORS.navy};
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  img {
    height: 50px;
    width: 50px;
  }
`

const SocialLinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
`

const SocialLinkItem = styled.li`
  padding: 16px 0;
  /* background-color: aliceblue; */
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    .react-icons {
      color: ${(_) => _.color || "var(--accent)"};
      transform: translateY(-3px);
    }
  }
`

const SocialLink = styled.a``

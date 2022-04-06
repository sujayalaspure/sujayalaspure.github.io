import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

import { socialLink } from "../../constant";
import "styles/components/Hero.css";
import styled from "styled-components";

export default function LeftSideBar() {
  return (
    <div className="sidebar left">
      <ul className="social">
        {socialLink.map(({ name, link, Icon, color }) => (
          <Tooltip
            title={name}
            aria-label={name}
            placement="right"
            arrow
            key={link}
            color={color}
            followCursor
          >
            <li className="link">
              <A
                aria-label={`Link to ${name}`}
                href={link}
                target="_blank"
                rel="noreferrer"
                color={color}
              >
                {Icon}
              </A>
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
}

const A = styled.a`
  &:hover {
    .react-icons {
      color: ${(_) => _.color || "var(--accent)"};
    }
  }
`;

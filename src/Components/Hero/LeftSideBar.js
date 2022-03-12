import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

import { socialLink } from "../../constant";
import "styles/components/Hero.css";

export default function LeftSideBar() {
  return (
    <div className="sidebar left">
      <ul className="social">
        {socialLink.map(({ name, link, Icon }) => (
          <Tooltip
            title={name}
            aria-label={name}
            placement="right"
            arrow
            key={link}
          >
            <li className="link">
              <a
                aria-label={`Link to ${name}`}
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {Icon}
              </a>
            </li>
          </Tooltip>
        ))}
      </ul>
    </div>
  );
}

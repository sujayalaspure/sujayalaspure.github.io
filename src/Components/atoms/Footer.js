import React from "react";
import { socialLink } from "constant";
import "styles/components/Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <ul>
          {socialLink.map(({ Icon, link, name }) => (
            <li key={link}>
              <a href={link} target="_blank" rel="noreferrer">
                {Icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="credits">
        <a
          href="https://github.com/alaspuresujay"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed & Built by Sujay Alaspure
        </a>
      </div>
    </footer>
  );
}

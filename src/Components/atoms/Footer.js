import React from "react";
import { ProfileLinks, socialLink } from "constant";
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
        <a href={ProfileLinks.github} target="_blank" rel="noopener noreferrer">
          Designed & Built by Sujay Alaspure
        </a>
        <p className="legal">
          The source code for this website is
          <a href="https://github.com/alaspuresujay/alaspuresujay.github.io"> available on GitHub </a>
          under the
          <a href="http://opensource.org/licenses/mit-license.html"> MIT license.</a>
        </p>
      </div>
    </footer>
  );
}

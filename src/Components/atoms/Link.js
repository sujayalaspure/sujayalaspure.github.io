import React from "react";
import "styles/components/Atoms.css";

/**
 * Link Component
 * @param {{ children: string, href:string, newTab:boolean, button:boolean }}  props
 */
export function Link(props) {
  const { children, href, newTab, button = false, ...other } = props;
  return (
    <>
      <a
        className={button ? "button" : "link-item"}
        href={href}
        target={newTab ? "_blank" : "_self"}
        type={button ? "button" : undefined}
        rel="noreferrer"
        {...other}>
        {children}
      </a>
    </>
  );
}

export default Link;

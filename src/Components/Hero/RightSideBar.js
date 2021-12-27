import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";

export default function RightSideBar() {
  const [toolTipText, setToolTipText] = useState("Click to copy");

  const onClick = (e) => {
    navigator.clipboard.writeText("alaspuresujay@gmail.com");
    setToolTipText("Copied");
    setTimeout(() => {
      setToolTipText("Click to copy");
    }, 5000);
  };

  return (
    <div className="sidebar right">
      <Tooltip
        title={toolTipText}
        aria-label={"Click to copy"}
        placement="left"
        arrow
        onClose={() => {
          setToolTipText("Click to copy");
        }}
      >
        <div className="email">
          <p onClick={onClick}>alaspuresujay@gmail.com</p>
        </div>
      </Tooltip>
    </div>
  );
}

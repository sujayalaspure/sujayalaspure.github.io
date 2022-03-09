import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HashRouter basename="/">
        <App />
      </HashRouter>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"

import App from "./App"
import ScrollToTop from "./utils/TopScroller"

ReactDOM.render(
  <>
    <HashRouter basename="/">
      <ScrollToTop />
      <App />
    </HashRouter>
  </>,
  document.getElementById("root")
)

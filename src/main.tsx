import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { HashRouter } from "react-router-dom"
import "./main.css"
import TopScroller from "src/Utils/TopScroller.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <TopScroller />
      <App />
    </HashRouter>
  </React.StrictMode>
)

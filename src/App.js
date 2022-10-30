import React, { Suspense, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import ContextProvider from "Context/ContextProvider"
import { MousePointer, SomeRandomAnim } from "Components/atoms"
import LogoIcon from "Assets/LogoIcon"
// import useFirebase from "utils/firebase"

const Home = React.lazy(() => import("Pages/Home"))
const TestPage = React.lazy(() => import("Pages/TestPage"))
const CaseStudy = React.lazy(() => import("Pages/CaseStudy/CaseStudy"))
const NotFound = React.lazy(() => import("Pages/NotFound"))

function App() {
  // const { updateVisitor } = useFirebase();
  useEffect(() => {
    // updateVisitor();
    const red = () => {
      const url = window.location.href
      if (url.includes("/resume")) {
        window.location.href =
          "https://alaspuresujay.github.io/assets/Resume_Sujay_Alaspure_Software_Developer_3_years.pdf"
      }
    }
    red()
  }, [])

  return (
    <>
      <ContextProvider>
        <MousePointer />
        <SomeRandomAnim />

        <Suspense fallback={<LogoIcon />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/case/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ContextProvider>
    </>
  )
}

export default App

import React, {Suspense, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import "./App.css"
import ContextProvider from "Context/ContextProvider"
import {Footer, MousePointer, SomeRandomAnim} from "Components/atoms"
import LogoIcon from "Assets/LogoIcon"
import {resumeLink} from "constant"
import GodrejCaseStudy from "./Projects/godrej-innard/GodrejCaseStudy"
import ImageModal, {imageModalRef} from "./Components/molecules/ImageModal"
// import useFirebase from "utils/firebase"

const Home = React.lazy(() => import("Pages/Home"))
const TestPage = React.lazy(() => import("Pages/TestPage"))
const CaseStudy = React.lazy(() => import("Pages/CaseStudy/CaseStudy"))
const NotFound = React.lazy(() => import("Pages/NotFound"))

function App() {
  // const { updateVisitor } = useFirebase()
  useEffect(() => {
    // updateVisitor()
    const resumeRedirect = () => {
      const url = window.location.href
      if (url.includes("/resume")) {
        window.location.href = `https://sujayalaspure.github.io${resumeLink}`
      }
    }
    resumeRedirect()
  }, [])

  const FallbackLoader = () => {
    return (
      <div className="full-screen">
        <LogoIcon />
      </div>
    )
  }

  return (
    <>
      <ContextProvider>
        <MousePointer />
        <SomeRandomAnim />

        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/test" element={<TestPage />} />
            <Route path="/case/:slug" element={<CaseStudy />} />
            <Route path="/innards" element={<GodrejCaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ContextProvider>
      <Footer />
      <ImageModal ref={imageModalRef} />
    </>
  )
}

export default App

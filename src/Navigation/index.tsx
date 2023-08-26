import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"
import TestPage from "../Pages/TestPage"

type Props = {}

const FallbackLoader = () => {
  return (
    <div className="full-screen">
      <h1>Loading...</h1>
    </div>
  )
}

function Navigator({}: Props) {
  return (
    <>
      <Suspense fallback={<FallbackLoader />}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Navigator

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "Context/ContextProvider";
import MousePointer from "Components/atoms/MousePointer";
import SomeRandomAnim from "Components/atoms/SomeRandomAnim";
import LogoIcon from "Assets/LogoIcon";
const Home = React.lazy(() => import("Pages/Home"));
const TestPage = React.lazy(() => import("Pages/TestPage"));
const CaseStudy = React.lazy(() => import("Pages/CaseStudy/CaseStudy"));
const NotFound = React.lazy(() => import("Pages/NotFound"));

function App() {
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
  );
}

export default App;

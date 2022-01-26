import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "Context/ContextProvider";
import { useState } from "react";
import { useEffect } from "react";
import COLORS from "utils/Colors";
// import Navbar from './Components/Navbar';

const Home = React.lazy(() => import("Pages/Home"));
const TestPage = React.lazy(() => import("Pages/TestPage"));
const CaseStudy = React.lazy(() => import("Pages/CaseStudy/CaseStudy"));
const NotFound = React.lazy(() => import("Pages/NotFound"));

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handle = (e) =>
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });

    document.addEventListener("mousemove", handle);
    return () => {
      document.removeEventListener("mousemove", handle);
    };
  }, []);
  return (
    <ContextProvider>
      <div
        style={{
          height: 80,
          width: 80,
          backgroundColor: COLORS.darkslate,
          borderRadius: "50%",
          position: "absolute",
          top: mousePosition.y - 40,
          left: mousePosition.x - 40,
          opacity: 0.7,
          filter: "blur(30px)",
        }}
      />

      <HashRouter basename="/">
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/test" component={TestPage} />
            <Route path="/case/:slug" component={CaseStudy} />
            <Route path="*" component={NotFound} />
            {/*<Route path='/sign-up' component={SignUp} /> */}
          </Switch>
        </Suspense>
      </HashRouter>
    </ContextProvider>
  );
}

export default App;

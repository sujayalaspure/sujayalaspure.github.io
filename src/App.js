import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import ContextProvider from "Context/ContextProvider";
import MousePointer from "Components/atoms/MousePointer";
import SomeRandomAnim from "Components/atoms/SomeRandomAnim";
const Home = React.lazy(() => import("Pages/Home"));
const TestPage = React.lazy(() => import("Pages/TestPage"));
const CaseStudy = React.lazy(() => import("Pages/CaseStudy/CaseStudy"));
const NotFound = React.lazy(() => import("Pages/NotFound"));

function App() {
  return (
    <React.StrictMode>
      <ContextProvider>
        {console.log("App rendered")}

        <MousePointer />
        <SomeRandomAnim />

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
    </React.StrictMode>
  );
}

export default App;

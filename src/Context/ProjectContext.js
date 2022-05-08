import React, { useContext, useEffect, useState } from "react";
import projects from "Projects";
const ProjectContext = React.createContext();

export function useProject() {
  return useContext(ProjectContext);
}
export default function ProjectProvider({ children }) {
  const [scrolled, setScrolled] = useState(0);
  function getProject(slug) {
    return projects.find((project) => project.slug === slug);
  }

  const updateThrottled = throttle((e) => {
    setScrolled(e.scrollY);
  }, 100);

  useEffect(() => {
    window.onscroll = () => {
      updateThrottled(window);
    };
    return () => {};
  }, []);

  function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    const timeoutFunc = () => {
      if (waitingArgs == null) {
        shouldWait = false;
      } else {
        cb(...waitingArgs);
        waitingArgs = null;
        setTimeout(timeoutFunc, delay);
      }
    };

    return (...args) => {
      if (shouldWait) {
        waitingArgs = args;
        return;
      }

      cb(...args);
      shouldWait = true;
      setTimeout(timeoutFunc, delay);
    };
  }
  const value = {
    getProject,
    scrolled,
    throttle,
  };
  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

import React, { useContext } from "react";
import projects from "Projects";
const ProjectContext = React.createContext();

export function useProject() {
  return useContext(ProjectContext);
}
export default function ProjectProvider({ children }) {
  function getProject(slug) {
    return projects.find((project) => project.slug === slug);
  }

  const getProjectsFromJson = async (slug) => {
    const data = await import(`Projects/json/${slug}`);
    return data.default;
  };

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
    throttle,
    getProjectsFromJson,
  };
  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

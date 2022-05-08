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

  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.scrollY);
      console.log(window.scrollY);
    };
    return () => {};
  }, []);

  const value = {
    getProject,
    scrolled,
  };
  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

import React, { useContext } from 'react';
import projects from 'Projects/Projects';
const ProjectContext = React.createContext();

export function useProject() {
	return useContext(ProjectContext);
}
export default function ProjectProvider({ children }) {
	function getProject(slug) {
		return projects.find(project => project.slug === slug);
	}

	const value = {
		getProject,
	};
	return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
}

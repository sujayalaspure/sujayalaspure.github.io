import ProjectProvider from './ProjectContext';
import { IconContext } from 'react-icons';

export default function ContextProvider({ children }) {
	return (
		<ProjectProvider>
			<IconContext.Provider value={{ className: 'react-icons' }}>{children}</IconContext.Provider>
		</ProjectProvider>
	);
}

import ProjectProvider from './ProjectContext';
import { IconContext } from 'react-icons';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function ContextProvider({ children }) {
	return (
		<ProjectProvider>
			<ParallaxProvider>
				<IconContext.Provider value={{ className: 'react-icons' }}>{children}</IconContext.Provider>
			</ParallaxProvider>
		</ProjectProvider>
	);
}

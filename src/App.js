import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { ParallaxProvider } from 'react-scroll-parallax';

// import Navbar from './Components/Navbar';

const Home = React.lazy(() => import('./Pages/Home'));
const TestPage = React.lazy(() => import('./Pages/TestPage'));
const CaseStudy = React.lazy(() => import('./Pages/CaseStudy'));

function App() {
	return (
		<ParallaxProvider>
			<IconContext.Provider value={{ className: 'react-icons' }}>
				<Router>
					<Suspense fallback={<div>Loading...</div>}>
						{/* <Navbar /> */}

						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/test' component={TestPage} />
							<Route path='/casestudy' component={CaseStudy} />
							{/*<Route path='/sign-up' component={SignUp} /> */}
						</Switch>
					</Suspense>
				</Router>
			</IconContext.Provider>
		</ParallaxProvider>
	);
}

export default App;

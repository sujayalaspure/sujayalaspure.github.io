import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
// import Navbar from './Components/Navbar';

const Home = React.lazy(() => import('Pages/Home'));
const TestPage = React.lazy(() => import('Pages/TestPage'));
const CaseStudy = React.lazy(() => import('Pages/CaseStudy'));
const NotFound = React.lazy(() => import('Pages/NotFound'));

function App() {
	return (
		<ParallaxProvider>
			<IconContext.Provider value={{ className: 'react-icons' }}>
				<HashRouter basename='/'>
					<Suspense fallback={<div>Loading...</div>}>
						<div id='forkme'>
							<a href='https://github.com/alaspuresujay/alaspuresujay.github.io'>Fork</a>
						</div>
						{/* <Navbar /> */}

						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/test' component={TestPage} />
							<Route path='/case/:slug' component={CaseStudy} />
							<Route path='*' component={NotFound} />
							{/*<Route path='/sign-up' component={SignUp} /> */}
						</Switch>
					</Suspense>
				</HashRouter>
			</IconContext.Provider>
		</ParallaxProvider>
	);
}

export default App;

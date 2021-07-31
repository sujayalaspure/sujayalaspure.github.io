import React, { useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';

import Home from './Pages/Home';
import TestPage from './Pages/TestPage';
import Navbar from './Components/Navbar';

function App() {
	return (
		<IconContext.Provider value={{ className: 'react-icons' }}>
			<Router>
				<Navbar />

				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/test' component={TestPage} />
					{/* <Route path='/products' component={Products} />
				<Route path='/sign-up' component={SignUp} /> */}
				</Switch>
			</Router>
		</IconContext.Provider>
	);
}

export default App;

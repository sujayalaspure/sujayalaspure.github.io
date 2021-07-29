import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { IconContext } from 'react-icons';

import Home from './Pages/Home';

function App() {
	return (
		<IconContext.Provider value={{ className: 'react-icons' }}>
			<Router>
				{/* <Navbar /> */}
				<Switch>
					<Route path='/' exact component={Home} />
					{/* <Route path='/services' component={Services} />
				<Route path='/products' component={Products} />
				<Route path='/sign-up' component={SignUp} /> */}
				</Switch>
			</Router>
		</IconContext.Provider>
	);
}

export default App;

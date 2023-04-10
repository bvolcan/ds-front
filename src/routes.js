import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './containers/Login'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Login} path='/' />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes

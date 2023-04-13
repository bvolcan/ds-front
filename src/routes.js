import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './containers/Login'
import ChangePassword from './containers/Login/ChangePassword'
import Submission from './containers/Submission'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={ChangePassword} path='/changepassword' />
				<Route component={Submission} path='/proposalsubmission' />
				<Route component={Login} path='/' />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes

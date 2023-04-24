import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import ChangePassword from './containers/Login/ChangePassword'
import StudentList from './containers/Student/List'
import ViewRevision from './containers/Student/ViewRevision'
import ViewClass from './containers/Advisor/ViewClass'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={StudentList} path='/studentlist' />
				<Route component={ViewRevision} path='/viewrevision' />
				<Route component={ViewClass} path='/advisorviewclass' />
				<Route component={ChangePassword} path='/changepassword' />
				<Route component={Login} path='/' />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes

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
				<Route component={Login} path='/' exact />
				<Route
					component={() => (
						<div>
							<h1>Dashboard Professor</h1>
						</div>
					)}
					path='/professor'
				/>
				<Route
					component={() => (
						<div>
							<h1>Dashboard Aluno</h1>
						</div>
					)}
					path='/aluno'
				/>
				<Route component={StudentList} path='/studentlist' />
				<Route component={ViewRevision} path='/viewrevision' />
				<Route component={ViewClass} path='/advisorviewclass' />
				<Route component={ChangePassword} path='/changepassword' />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes

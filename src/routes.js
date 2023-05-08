import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import Submission from './containers/Submission'
import ChangePassword from './containers/ChangePassword'
import StudentList from './containers/Student/List'
import ViewRevision from './containers/ViewRevision'
import ViewClass from './containers/Advisor/ViewClass'
const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Login} path='/' exact />
				<Route component={ViewClass} path='/professor' />
				<Route component={StudentList} path='/aluno' />
				<Route component={ViewRevision} path='/verrevisao' />
				<Route component={ChangePassword} path='/changepassword' />
				<Route component={Submission} path='/proposta/submissao' />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes

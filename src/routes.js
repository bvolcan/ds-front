import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import Submission from './containers/Submission'
import ChangePassword from './containers/ChangePassword'
import ProfessorClasses from './containers/ProfessorClasses'
import StudentList from './containers/Student/List'
import ViewRevision from './containers/ViewRevision'
import ReviewSubmission from './containers/ReviewSubmission'
import ReviewsLinker from './containers/ReviewsLinker'
import ViewClass from './containers/ViewClass'

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Login} path='/' exact />
				<Route
					component={ReviewsLinker}
					path='/professor/coordenacao/associarrevisores'
				/>
				<Route component={StudentList} path='/aluno' />
				<Route component={ViewRevision} path='/verrevisao' />
				<Route component={ChangePassword} path='/changepassword' />
				<Route component={ProfessorClasses} path='/professor' exact />
				<Route component={ViewClass} path='/professor/:role' exact />
				<Route component={Submission} path='/proposta/submissao' />
				<Route
					component={ReviewSubmission}
					path='/professor/revisor/revisarproposta'
				/>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes

import React from 'react'
import { Header, ShowRevision } from '../../../components'
import './style.css'

let propostaTitle = 'Proposta Teste'
const ViewRevision = () => {
	return (
		<div className='view-revision'>
			<Header />
			<div className='view-revision-title'>
				<h1>Revisão de proposta</h1>
				<h3>Proposta: {propostaTitle}</h3>
			</div>
			<div className='view-revision-box'>
				<ShowRevision />
			</div>
		</div>
	)
}

export default ViewRevision

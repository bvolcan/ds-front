import React from 'react'
import { Header, RevisionContainer } from '../../components'
import './style.css'
import { Link } from 'react-router-dom'

const ViewRevision = (reviewsData) => {
	return (
		<div className='view-revision'>
			<Header />
			<div className='view-revision-title'>
				<h1>Revisão de proposta</h1>
				<h3>Proposta: {reviewsData.title}</h3>
			</div>
			{reviewsData.reviews.length > 0 ? (
				<div className='view-revision-box'>
					<div className='view-revision-reviewers'>
						<RevisionContainer isRevision={false} data={reviewsData.reviews} />
					</div>

					{reviewsData.reviews.map((review) => (
						<RevisionContainer isRevision={true} data={review} />
					))}
				</div>
			) : (
				<div className='view-revision-empty'>
					<h2>Esta proposta ainda não tem nenhuma revisão.</h2>
				</div>
			)}

			<div className='back-button'>
				<Link variant='outlined' to='/aluno' exact>
					Voltar
				</Link>
			</div>
		</div>
	)
}

export default ViewRevision

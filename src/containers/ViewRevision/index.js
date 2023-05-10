import React from 'react'
import { useState, useEffect } from 'react'
import { Header, RevisionContainer } from '../../components'
import './style.css'
import { reviewsRequest } from '../../services/user'
import { useHistory } from 'react-router-dom'
import { Button } from '@mui/material'

const ViewRevision = () => {
	const queryParams = new URLSearchParams(window.location.search)
	const proposalId = queryParams.get('proposalId')
	const history = useHistory()
	const [reviewsData, setReviewsData] = useState(null)

	useEffect(() => {
		const getReviewsData = async () => {
			try {
				const { data } = await reviewsRequest(proposalId)
				setReviewsData(data)
			} catch (error) {
				console.log(error)
			}
		}
		getReviewsData()
	}, [])

	return (
		reviewsData && (
			<div className='view-revision'>
				<Header />
				<div className='view-revision-title'>
					<h1>Revisão de proposta</h1>
					<h3>Proposta: {reviewsData.title}</h3>
				</div>
				{reviewsData.reviews.length > 0 ? (
					<div className='view-revision-box'>
						<div className='view-revision-reviewers'>
							<RevisionContainer
								isRevision={false}
								data={reviewsData.reviews}
							/>
						</div>

						{reviewsData.reviews.map((review) => (
							<RevisionContainer isRevision={true} data={review} />
						))}
					</div>
				) : (
					<div className='view-revision-empty'>
						<h2>Sua proposta ainda não tem nenhuma revisão.</h2>
					</div>
				)}

				<div className='back-button'>
					<Button
						variant='outlined'
						onClick={() => {
							localStorage.getItem('isProfessor') === 'true'
								? history.push('/professor/revisor')
								: history.push('/aluno')
						}}
					>
						Voltar
					</Button>
				</div>
			</div>
		)
	)
}

export default ViewRevision

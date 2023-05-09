import React, { useState, useEffect } from 'react'
import './style.css'
import {
	IconButton,
	Select,
	MenuItem,
	Box,
	Chip,
	OutlinedInput,
	TableContainer,
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableCell
} from '@material-ui/core'
import { Create, Check, Close } from '@mui/icons-material'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components'

import {
	classProposalsRequest,
	professorsRequest,
	linkProfessorsRequest
} from '../../services'

const ReviewerSelector = ({ id, professorsList, linkedProfessors }) => {
	const [isEditingReviewers, setIsEditingReviewers] = useState(false)
	const [selectedReviewers, setSelectedReviewers] = useState(linkedProfessors)

	const registerLinkedProfessors = async (id, selectedReviewers) => {
		try {
			const emailList = {
				reviewersEmails: selectedReviewers.map((professor) => professor.email)
			}
			await linkProfessorsRequest(id, emailList)
		} catch (error) {
			console.log(error)
		}
	}

	const handleChange = (event) => {
		const {
			target: { value }
		} = event
		console.log(value)
		setSelectedReviewers(value)
	}

	const handleSave = () => {
		registerLinkedProfessors(id, selectedReviewers)
	}

	return (
		<div className='reviewer-selector-container'>
			<Select
				disabled={!isEditingReviewers}
				multiple
				defaultValue={selectedReviewers}
				value={selectedReviewers}
				onChange={handleChange}
				input={
					<OutlinedInput id='professors-multiselect' label='Professores' />
				}
				renderValue={(selected) => (
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
						{selected.map((value) => (
							<Chip key={value.email} label={value.name} />
						))}
					</Box>
				)}
			>
				{professorsList.map((professor) => (
					<MenuItem key={professor.email} value={professor}>
						{professor.name}
					</MenuItem>
				))}
			</Select>
			{isEditingReviewers ? (
				<div className='edit-buttons'>
					<IconButton
						onClick={() => {
							handleSave()
							setIsEditingReviewers(false)
						}}
					>
						<Check />
					</IconButton>
					<IconButton
						onClick={() => {
							setSelectedReviewers(linkedProfessors)
							setIsEditingReviewers(false)
						}}
					>
						<Close />
					</IconButton>
				</div>
			) : (
				<IconButton onClick={() => setIsEditingReviewers(true)}>
					<Create />
				</IconButton>
			)}
		</div>
	)
}

const ReviewsLinker = () => {
	const [proposalsList, setProposalsList] = useState([])
	const [professorsList, setProfessorsList] = useState([])

	useEffect(() => {
		const getProposals = async (classId) => {
			try {
				const { data } = await classProposalsRequest(classId)
				setProposalsList(data)
			} catch (error) {
				console.log(error)
			}
		}

		const getProfessors = async () => {
			try {
				const { data } = await professorsRequest()
				setProfessorsList(data)
			} catch (error) {
				console.log(error)
			}
		}

		getProposals(3)
		getProfessors()
	}, [])

	return (
		<div className='reviews-linker-container'>
			<Header />
			<div className='reviews-linker-content'>
				<h2>Propostas da turma xxxx</h2>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Proposta</TableCell>
								<TableCell>Revisores</TableCell>
								<TableCell>Arquivo</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{proposalsList !== [] &&
								proposalsList.map((proposal, index) => {
									const reviewers =
										proposal.reviews && proposalsList === []
											? []
											: proposal.reviews.map((review) => {
													const matchingProfessor = professorsList.find(
														(professor) =>
															professor.email === review.reviewer.userEmail
													)
													return matchingProfessor
											  })
									return (
										<TableRow key={index}>
											<TableCell>{proposal.title}</TableCell>
											<TableCell>
												{professorsList !== [] && (
													<ReviewerSelector
														id={proposal.id}
														professorsList={professorsList}
														linkedProfessors={reviewers}
													/>
												)}
											</TableCell>
											<TableCell>
												<a href={`${proposal.filePath}`}>PDF</a>
											</TableCell>
										</TableRow>
									)
								})}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</div>
	)
}

export default ReviewsLinker

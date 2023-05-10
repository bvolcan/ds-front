import React, { useState } from 'react'
import './style.css'
import {
	TextField,
	Button,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components'
import { reviewSubmission } from '../../services'

const ReviewSubmission = () => {
	const { handleSubmit } = useForm()
	const history = useHistory()
	const [formData, setFormData] = useState({})

	const onSubmit = () => {
		localStorage.getItem('currentReviewId')
		try {
			submitReview(formData)
		} catch (error) {
			console.log(error)
		} finally {
			localStorage.removeItem('currentReviewId')
			history.push('/professor/revisor')
		}
	}

	const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const submitReview = async (reviewData) => {
		try {
			const { data } = await reviewSubmission(
				localStorage.getItem('reviewId'),
				reviewData
			)
			if (data !== 1) throw new Error('Erro ao enviar revisão')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='main-container'>
			<Header />
			<div className='review-submission-container'>
				<div className='review-submission-titles'>
					<h3>Revisão de proposta</h3>
					<h4>Proposta: Título proposta</h4>
				</div>
				<form
					className='review-submission-form'
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='review-submission-form-inputs'>
						<FormControl>
							<FormLabel>Apresentação e consistência.</FormLabel>
							<RadioGroup name='presentation' onChange={handleFormChange}>
								<FormControlLabel
									value='4 - Excelente'
									control={<Radio />}
									label='Excelente'
								/>
								<FormControlLabel
									value='3 - Bom'
									control={<Radio />}
									label='Bom'
								/>
								<FormControlLabel
									value='2 - Regular'
									control={<Radio />}
									label='Regular'
								/>
								<FormControlLabel
									value='1 - Insuficiente'
									control={<Radio />}
									label='Insuficiente'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Relevância e contribuição.</FormLabel>
							<RadioGroup name='relevance' onChange={handleFormChange}>
								<FormControlLabel
									value='4 - Excelente'
									control={<Radio />}
									label='Excelente'
								/>
								<FormControlLabel
									value='3 - Bom'
									control={<Radio />}
									label='Bom'
								/>
								<FormControlLabel
									value='2 - Regular'
									control={<Radio />}
									label='Regular'
								/>
								<FormControlLabel
									value='1 - Insuficiente'
									control={<Radio />}
									label='Insuficiente'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Metodologia.</FormLabel>
							<RadioGroup name='methodology' onChange={handleFormChange}>
								<FormControlLabel
									value='4 - Excelente'
									control={<Radio />}
									label='Excelente'
								/>
								<FormControlLabel
									value='3 - Bom'
									control={<Radio />}
									label='Bom'
								/>
								<FormControlLabel
									value='2 - Regular'
									control={<Radio />}
									label='Regular'
								/>
								<FormControlLabel
									value='1 - Insuficiente'
									control={<Radio />}
									label='Insuficiente'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Adequação ao curso.</FormLabel>
							<RadioGroup
								name='wasAdequate'
								onChange={(e) => {
									setFormData({
										...formData,
										[e.target.name]: e.target.value === 'true'
									})
								}}
							>
								<FormControlLabel
									value='true'
									control={<Radio />}
									label='Sim'
								/>
								<FormControlLabel
									value='false'
									control={<Radio />}
									label='Não'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Plano de trabalho a ser desenvolvido.</FormLabel>
							<RadioGroup name='workPlan' onChange={handleFormChange}>
								<FormControlLabel
									value='3 - Muito bem especificado e exequível'
									control={<Radio />}
									label='Muito bem especificado e exequível'
								/>
								<FormControlLabel
									value='2 - Exequível'
									control={<Radio />}
									label='Exequível'
								/>
								<FormControlLabel
									value='1 - Mal especificado e/ou não exequível'
									control={<Radio />}
									label='Mal especificado e/ou não exequível'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Avaliação geral.</FormLabel>
							<RadioGroup
								name='wasApproved'
								onChange={(e) => {
									setFormData({
										...formData,
										[e.target.name]: e.target.value === 'true'
									})
								}}
							>
								<FormControlLabel
									value='true'
									control={<Radio />}
									label='Aprovada'
								/>
								<FormControlLabel
									value='false'
									control={<Radio />}
									label='Reprovada'
								/>
							</RadioGroup>
						</FormControl>
						<div>
							<span>Resumo da proposta.</span>
							<TextField
								id='summary'
								name='summary'
								required
								variant='outlined'
								multiline
								minRows={5}
								onChange={handleFormChange}
							/>
						</div>
						<div>
							<span>Pontos fortes da proposta.</span>
							<TextField
								id='strengths'
								name='strengths'
								required
								variant='outlined'
								multiline
								minRows={5}
								onChange={handleFormChange}
							/>
						</div>
						<div>
							<span>Pontos fracos da proposta</span>
							<TextField
								id='weaknesses'
								name='weaknesses'
								required
								variant='outlined'
								multiline
								minRows={5}
								onChange={handleFormChange}
							/>
						</div>
						<div>
							<span>Detalhamento da avaliação.</span>
							<TextField
								id='details'
								name='details'
								required
								variant='outlined'
								multiline
								minRows={5}
								onChange={handleFormChange}
							/>
						</div>
					</div>
					<div className='buttons'>
						<Button
							variant='contained'
							style={{
								width: 236,
								marginRight: 22,
								backgroundColor: '#E4FFFDFF',
								color: '#00BBAAFF'
							}}
							onClick={() => {
								history.push('/professor/revisor')
							}}
						>
							Cancelar
						</Button>
						<Button
							variant='contained'
							style={{
								width: 236,
								backgroundColor: '#00BBAAFF',
								color: 'white'
							}}
							type='submit'
						>
							Criar
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ReviewSubmission

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
import { useParams } from 'react-router-dom'
import { createClass, editClass } from '../../services'

const EditClass = () => {
	const { handleSubmit } = useForm()
	const history = useHistory()
	const [formData, setFormData] = useState({})
	const { modo } = useParams()
	const classId = localStorage.getItem('classId')

	const onSubmit = () => {
		try {
			if (modo === 'criar') {
				submitClass(formData)
			} else {
				submitEditClass(formData)
			}
		} catch (error) {
			console.log(error)
		} finally {
			// localStorage.removeItem('currentReviewId')
			console.log(formData)
			history.push('/professor')
		}
	}

	const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const submitClass = async (classInfo) => {
		try {
			const { data } = await createClass(classInfo)
			// if (data !== 1) throw new Error('Erro ao enviar criacao de turma')
		} catch (error) {
			console.log(error)
		}
	}

	const submitEditClass = async (classInfo) => {
		try {
			const { data } = await editClass(classInfo, classId)
			// if (data !== 1) throw new Error('Erro ao enviar edicao de turma')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='main-container'>
			<Header />
			<div className='edit-class-container'>
				<div className='edit-class-titles'>
					<h2>
						{modo === 'criar'
							? 'Criando turma'
							: `Editando turma: ${localStorage
									.getItem('className')
									.toUpperCase()}`}
					</h2>
				</div>
				<form className='edit-class-form' onSubmit={handleSubmit(onSubmit)}>
					<div className='edit-class-form-inputs'>
						{modo === 'criar' ? (
							<div className='create-input'>
								<h4>Nome:</h4>
								<TextField
									id='summary'
									name='name'
									required
									variant='outlined'
									multiline
									minRows={1}
									onChange={handleFormChange}
								/>
							</div>
						) : null}
						<div className='conjunto-datas'>
							<div className='conjunto'>
								<h4>Período letivo</h4>
								<div>
									<span>Inicio</span>
									<TextField
										id='summary'
										name='startDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
								<div>
									<span>Fim</span>
									<TextField
										id='strengths'
										name='endDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
							</div>
							<div className='conjunto'>
								<h4>Submissão</h4>
								<div>
									<span>Inicio</span>
									<TextField
										id='summary'
										name='submissionStartDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
								<div>
									<span>Fim</span>
									<TextField
										id='strengths'
										name='submissionEndDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
							</div>
							<div className='conjunto'>
								<h4>Avaliação</h4>
								<div>
									<span>Inicio</span>
									<TextField
										id='summary'
										name='evaluationStartDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
								<div>
									<span>Fim</span>
									<TextField
										id='strengths'
										name='evaluationEndDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
							</div>
							<div className='conjunto'>
								<h4>Ressubmissão</h4>
								<div>
									<span>Inicio</span>
									<TextField
										id='summary'
										name='resubmissionStartDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
								<div>
									<span>Fim</span>
									<TextField
										id='strengths'
										name='resubmissionEndDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
							</div>
							<div className='conjunto'>
								<h4>Reavaliação</h4>
								<div>
									<span>Inicio</span>
									<TextField
										id='summary'
										name='reevaluationStartDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
								<div>
									<span>Fim</span>
									<TextField
										id='strengths'
										name='reevaluationEndDate'
										required
										variant='outlined'
										multiline
										minRows={1}
										onChange={handleFormChange}
									/>
								</div>
							</div>
						</div>
						{modo === 'criar' ? (
							<div className='conjunto-alunos'>
								<h4>Alunos</h4>
								<span>
									{'('}inserir e-mail dos alunos separados por ponto e vírgula
									{')'}
								</span>

								<TextField
									id='summary'
									name='students'
									required
									variant='outlined'
									multiline
									minRows={7}
									onChange={handleFormChange}
								/>
							</div>
						) : null}
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
								history.push('/professor')
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
							Confirmar
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default EditClass

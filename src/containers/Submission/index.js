import React, { useState, useEffect } from 'react'
import './style.css'
import { TextField, Button, Select, MenuItem } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components'
import { proposalSubmission } from '../../services/proposal'
import { professorsRequest } from '../../services'

const Submission = () => {
	const { handleSubmit } = useForm()
	const history = useHistory()
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		accept: {
			'application/pdf': ['.pdf']
		}
	})

	const [professorsData, setProfessorsData] = useState(null)
	const [activeClassName, setActiveClassName] = useState('')

	useEffect(() => {
		setActiveClassName(localStorage.getItem('activeClassName'))
		const getProfessorsData = async () => {
			try {
				const { data } = await professorsRequest()
				console.log(data)
				setProfessorsData(data)
			} catch (error) {
				console.log(error)
			}
		}
		getProfessorsData()
	}, [])

	const [formData, setFormData] = useState({})

	const onSubmit = (e) => {
		const proposalFormData = new FormData()
		proposalFormData.append('title', formData.title)
		proposalFormData.append('advisorEmail', formData.advisorEmail)
		proposalFormData.append('coadvisor', formData.coadvisor)
		proposalFormData.append('abstract', formData.abstract)
		proposalFormData.append('keywords', '')
		proposalFormData.append('file', acceptedFiles[0])

		submitProposal(proposalFormData)
	}

	const handleFormChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const submitProposal = async (proposalData) => {
		try {
			const { data } = await proposalSubmission(proposalData)
			console.log(data)
		} catch (error) {
			console.log(error)
		} finally {
			history.push('/aluno')
		}
	}

	const files = acceptedFiles.map((file) => (
		<p className='file uploaded' key={file.path}>
			{file.path} - {file.size} bytes
			<span>Clique aqui para enviar um novo arquivo</span>
		</p>
	))

	return (
		<div className='submission-container'>
			<Header />

			<form className='submission-form' onSubmit={handleSubmit(onSubmit)}>
				<div className='form-header'>
					<h3>Nova proposta</h3>
					{activeClassName && <h4>Turma: {activeClassName.toUpperCase()}</h4>}
				</div>
				<div className='title input'>
					<span>Título</span>
					<TextField
						required
						id='title'
						name='title'
						placeholder='Insira o título da proposta'
						variant='outlined'
						style={{
							width: '100%',
							backgroundColor: '#F3F4F6FF'
						}}
						onChange={handleFormChange}
					/>
				</div>
				<div className='advisors'>
					<div className='advisor input'>
						<span>Orientador</span>
						<Select
							id='advisor'
							name='advisorEmail'
							variant='outlined'
							value={formData.advisorEmail}
							onChange={handleFormChange}
							style={{
								width: 'calc(100% - 15px)',
								backgroundColor: '#F3F4F6FF'
							}}
						>
							{professorsData?.map((professor) => (
								<MenuItem value={professor.email}>{professor.name}</MenuItem>
							))}
						</Select>
					</div>
					<div className='co-advisor input'>
						<span>Coorientador</span>
						<TextField
							id='co-advisor'
							name='coadvisor'
							placeholder='Insira o nome do coorientador'
							variant='outlined'
							style={{ width: '100%', backgroundColor: '#F3F4F6FF' }}
							onChange={handleFormChange}
						/>
					</div>
				</div>
				<div className='abstract input'>
					<span>Resumo</span>
					<TextField
						required
						id='abstract'
						name='abstract'
						placeholder='Insira o resumo da proposta'
						variant='outlined'
						multiline
						minRows={5}
						style={{
							width: '100%',
							backgroundColor: '#F3F4F6FF'
						}}
						onChange={handleFormChange}
					/>
				</div>
				<div className='file input'>
					<h4>Arquivo</h4>
					<div {...getRootProps({ className: 'dropzone' })}>
						<input id='file' name='file' {...getInputProps()} />
						{files.length > 0 ? (
							files
						) : (
							<>
								<p>
									Arraste e solte um arquivo aqui, ou clique e selecione o
									arquivo
								</p>
								<span>Apenas arquivos .pdf</span>
							</>
						)}
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
							history.push('/aluno')
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
	)
}

export default Submission

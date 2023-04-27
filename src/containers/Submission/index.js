import React, { useState } from 'react'
import './style.css'
import { TextField, Button, Select, MenuItem } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components'
import { proposalSubmission } from '../../services/proposal'

const Submission = () => {
	const { handleSubmit } = useForm()
	const history = useHistory()
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		accept: {
			'application/pdf': ['.pdf']
		}
	})

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
					<h5>Turma MM/YYYY</h5>
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
							<MenuItem value='adubois@inf.ufpel.edu.br'>
								André du Bois
							</MenuItem>
							<MenuItem value='larissa@inf.ufpel.edu.br'>
								Larissa Freitas
							</MenuItem>
							<MenuItem value='marilton@inf.ufpel.edu.br'>
								Marilton Sanchotene Aguiar
							</MenuItem>
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
						<input required {...getInputProps()} />
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

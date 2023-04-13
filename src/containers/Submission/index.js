import React, { useState } from 'react'
import './style.css'
import { TextField, Button, Select, MenuItem } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import { useForm } from 'react-hook-form'
import { Header } from '../../components'

const Submission = () => {
	const { handleSubmit } = useForm()
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
		maxFiles: 1,
		accept: {
			'application/pdf': ['.pdf']
		}
	})

	const [title, setTitle] = useState('')
	const [advisor, setAdvisor] = useState('')
	const [coAdvisor, setCoAdvisor] = useState('')
	const [abstract, setAbstract] = useState('')

	const onSubmit = (e) => {
		console.log({
			title: title,
			advisor: advisor,
			coAdvisor: coAdvisor,
			abstract: abstract,
			files: files
		})
	}

	const files = acceptedFiles.map((file) => (
		<p key={file.path}>
			{file.path} - {file.size} bytes
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
						placeholder='Insira o título da proposta'
						variant='outlined'
						style={{
							width: '100%',
							backgroundColor: '#F3F4F6FF'
						}}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className='advisors'>
					<div className='advisor input'>
						<span>Orientador</span>
						<Select
							id='advisor'
							variant='outlined'
							value={advisor}
							onChange={(e) => setAdvisor(e.target.value)}
							style={{
								width: 'calc(100% - 15px)',
								backgroundColor: '#F3F4F6FF'
							}}
						>
							<MenuItem value='1'>Orientador 1</MenuItem>
							<MenuItem value='2'>Orientador 2</MenuItem>
							<MenuItem value='3'>Orientador 3</MenuItem>
						</Select>
					</div>
					<div className='co-advisor input'>
						<span>Coorientador</span>
						<TextField
							id='co-advisor'
							placeholder='Insira o nome do coorientador'
							variant='outlined'
							style={{ width: '100%', backgroundColor: '#F3F4F6FF' }}
							onChange={(e) => setCoAdvisor(e.target.value)}
						/>
					</div>
				</div>
				<div className='abstract input'>
					<span>Resumo</span>
					<TextField
						required
						id='abstract'
						placeholder='Insira o resumo da proposta'
						variant='outlined'
						multiline
						minRows={5}
						style={{
							width: '100%',
							backgroundColor: '#F3F4F6FF'
						}}
						onChange={(e) => setAbstract(e.target.value)}
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

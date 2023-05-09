import React, { useState, useEffect } from 'react'
import './style.css'
import { Button } from '@mui/material'
import { Dashboard, Folder, Groups, Create, Class } from '@mui/icons-material'
import { Header } from '../../components'
import { professorsClassesRequest } from '../../services'
import ClassesContainer from './ClassesContainer'

const ProfessorClasses = () => {
	const [classesData, setClassesData] = useState(null)
	const [componenteAtual, setComponenteAtual] = useState([])
	const [isCoordinator, setIsCoordinator] = useState(false)

	useEffect(() => {
		const getClassesData = async () => {
			try {
				const { data } = await professorsClassesRequest()
				console.log(data)
				setClassesData(data)
			} catch (error) {
				console.log(error)
			}
		}
		getClassesData()
	}, [])

	useEffect(() => {
		if (classesData) handleRolesClick('advisorClasses')
	}, classesData)

	const handleRolesClick = (role) => {
		setComponenteAtual(classesData[role])
		setIsCoordinator(role === 'coordinatorClasses')
	}

	return (
		<div className='container-class'>
			<Header />
			<div className='menu-lateral'>
				<div className='menu'>
					<Button
						variant='text'
						style={{
							fontSize: 16,
							fontWeight: 'bold',
							alignItems: 'center',
							width: 240,
							height: 52,
							color: '#00BBAAFF'
						}}
						type='submit'
						startIcon={<Dashboard />}
						onClick={() => handleRolesClick('advisorClasses')}
					>
						Orientações
					</Button>

					<Button
						variant='text'
						style={{
							fontSize: 16,
							fontWeight: 'bold',
							alignItems: 'center',
							width: 240,
							height: 52,
							color: '#565D6DFF'
						}}
						type='submit'
						startIcon={<Folder />}
						onClick={() => handleRolesClick('reviewerClasses')}
					>
						Revisões
					</Button>

					<Button
						variant='text'
						style={{
							fontSize: 16,
							fontWeight: 'bold',
							alignItems: 'center',
							width: 240,
							height: 52,
							color: '#565D6DFF'
						}}
						type='submit'
						startIcon={<Groups />}
						onClick={() => handleRolesClick('coordinatorClasses')}
					>
						Coordenações
					</Button>
				</div>

				<div>
					<Button
						variant='contained'
						style={{
							marginTop: 360,
							width: 240,
							height: 52,
							backgroundColor: '#E4FFFDFF',
							color: '#00BBAAFF'
						}}
						type='submit'
						startIcon={<Create />}
					>
						Criar Turma
					</Button>
				</div>
			</div>

			<div className='body-classes'>
				<h1>Turmas</h1>

				{componenteAtual && (
					<div className='cards'>
						{componenteAtual.map((turma) => (
							<ClassesContainer turma={turma} isCoordinator={isCoordinator} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default ProfessorClasses

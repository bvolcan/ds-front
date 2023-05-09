import React, { useState, useEffect } from 'react'
import './style.css'
import { Button } from '@mui/material'
import { Dashboard, Folder, Groups, Create, Class } from '@mui/icons-material'
import { Header } from '../../components'
import { professorsClassesRequest } from '../../services'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

const ProfessorClasses = () => {
	const [classesData, setClassesData] = useState(null)
	const [componenteAtual, setComponenteAtual] = useState([])
	const [isLoading, setIsLoading] = useState(true)

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
		if (classesData) handleClickOrientacao()
	}, classesData)

	function handleClickOrientacao() {
		setComponenteAtual(classesData.advisorClasses)
	}

	function handleClickRevisao() {
		setComponenteAtual(classesData.reviewerClasses)
	}

	function handleClickCoordenacao() {
		setComponenteAtual(classesData.coordinatorClasses)
	}

	return (
		<div className='container-class'>
			<Header />
			<div className='menu-lateral'>
				<div className='menu'>
					{/* {componenteAtual === 'orientacao' ? <ClassesContainer /> : null}
							{componenteAtual === 'revisao' ? <ClassesContainer /> : null}
							{componenteAtual === 'coordenacao' ? (
								<CoordinatorClassesContainer />
							) : null} */}

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
						onClick={handleClickOrientacao}
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
						onClick={handleClickRevisao}
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
						onClick={handleClickCoordenacao}
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
							<Link
								to='/professor/turma'
								className='itens'
								onClick={localStorage.setItem('classId', turma.id)}
							>
								<h3>{turma.name}</h3>
								<span className='item-datas'>
									<p>
										Inicio: {format(new Date(turma.startDate), 'dd/MM/yyyy')}
									</p>

									<p>Fim: {format(new Date(turma.endDate), 'dd/MM/yyyy')}</p>
								</span>

								<span className='item-status'>
									Status:{' '}
									{new Date() < new Date(turma.endDate) ? (
										<p className='status-ativa'>Ativa</p>
									) : (
										<p className='status-finalizada'>Finalizada</p>
									)}
								</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default ProfessorClasses

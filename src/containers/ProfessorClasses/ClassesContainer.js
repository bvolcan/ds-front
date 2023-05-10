import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { Button } from '@mui/material'
import { Edit, InsertLink } from '@mui/icons-material'
import { useHistory } from 'react-router-dom'
import './style.css'

const ClassesContainer = ({ turma, isCoordinator, role }) => {
	const history = useHistory()

	return (
		<div className='single-class'>
			{isCoordinator ? (
				<div className='itens coordinator'>
					<h3>{turma.name}</h3>

					<span className='item-coordinator-menu'>
						<Button
							variant='text'
							type='submit'
							startIcon={<Edit />}
							onClick={() => {
								localStorage.setItem('className', turma.name)
								localStorage.setItem('classId', turma.id)
								history.push('/professor/coordenacao/editarturma')
							}}
						>
							Editar
						</Button>
						<Button
							variant='text'
							type='submit'
							startIcon={<InsertLink />}
							onClick={() => {
								localStorage.setItem('className', turma.name)
								localStorage.setItem('classId', turma.id)
								history.push('/professor/coordenacao/associarrevisores')
							}}
						>
							Linkar Revisores
						</Button>
					</span>
				</div>
			) : (
				<Link
					to={`/professor/${
						role === 'reviewerClasses' ? 'revisor' : 'orientador'
					}`}
					className='itens normal'
					onClick={() => {
						localStorage.setItem('className', turma.name)
						localStorage.setItem('classId', turma.id)
					}}
				>
					<h3>{turma.name}</h3>
					<span className='item-datas'>
						<p>Inicio: {format(new Date(turma.startDate), 'dd/MM/yyyy')}</p>

						<p>Fim: {format(new Date(turma.endDate), 'dd/MM/yyyy')}</p>
					</span>
					<span className='item-status'>
						Status:{' '}
						{new Date() < new Date(turma.endDate) ? (
							<p className='status ativa'>Ativa</p>
						) : (
							<p className='status finalizada'>Finalizada</p>
						)}
					</span>
				</Link>
			)}
		</div>
	)
}

export default ClassesContainer

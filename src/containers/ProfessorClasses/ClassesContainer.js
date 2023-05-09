import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'

const ClassesContainer = (data) => {
	console.log(data)
	return (
		<div className='classes-container'>
			<Link
				to='/professor/turma'
				className='itens'
				onClick={localStorage.setItem('classId', data.id)}
			>
				<h3>{data.name}</h3>
				<span className='item-datas'>
					<p>Inicio: {format(new Date(data.startDate), 'dd/MM/yyyy')}</p>

					<p>Fim: {format(new Date(data.endDate), 'dd/MM/yyyy')}</p>
				</span>

				<span className='item-status'>
					Status:{' '}
					{new Date() < new Date(data.endDate) ? (
						<p className='status-ativa'>Ativa</p>
					) : (
						<p className='status-finalizada'>Finalizada</p>
					)}
				</span>
			</Link>
		</div>
	)
}

export default ClassesContainer

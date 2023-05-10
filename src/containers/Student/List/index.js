import React, { useState, useEffect } from 'react'
import './style.css'
import EnhancedTable from '../../../components/EnhancedTable'
import { Header } from '../../../components'
import { studentRequest } from '../../../services'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { useHistory } from 'react-router-dom'

const StudentList = () => {
	const [studentData, setStudentData] = useState(null)
	const history = useHistory()

	useEffect(() => {
		const getStudentData = async () => {
			try {
				const { data } = await studentRequest()
				setStudentData(data)
				localStorage.setItem('activeClassName', data.activeClass[0].name)
			} catch (error) {
				console.log(error)
			}
		}
		getStudentData()
	}, [])

	return (
		studentData && (
			<div className='container'>
				<Header />
				<div className='title'>
					<h2>
						Olá {studentData.userName},{' '}
						{studentData.activeClass.length > 0
							? `você está matriculado na turma ${studentData.activeClass[0].name.toUpperCase()}.`
							: 'você não está matriculado em nenhuma turma.'}
					</h2>
				</div>
				<div className='table'>
					<div className='table-header'>
						<div className='table-header-text'>
							<h3>Suas submissões</h3>
						</div>
						<div className='table-header-button'>
							<Button
								variant='outlined'
								onClick={() => {
									history.push('/proposta/submissao')
								}}
								disabled={studentData.activeClass.length < 1}
							>
								Nova Submissão
							</Button>
						</div>
					</div>
					<div className='submissions-table'>
						<EnhancedTable data={studentData.proposals} />
					</div>
				</div>
			</div>
		)
	)
}

export default StudentList

import React, { useState, useEffect } from 'react'
import './style.css'
import EnhancedTable from '../../../components/EnhancedTable'
import UploadButton from '../../../components/UploadButton'
import { Header } from '../../../components'
import { studentRequest } from '../../../services'

const StudentList = () => {
	const [studentData, setStudentData] = useState(null)

	useEffect(() => {
		const getStudentData = async () => {
			try {
				const { data } = await studentRequest()
				console.log(data)
				setStudentData(data)
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
						{studentData.activeClass === []
							? `você está matriculado na turma ${studentData.activeClass.name}`
							: 'você não está matriculado em nenhuma turma'}
					</h2>
				</div>
				<div className='table'>
					<div className='table-header'>
						<div className='table-header-text'>
							<h3>Suas submissões</h3>
						</div>
						<div className='table-header-button'>
							<UploadButton />
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

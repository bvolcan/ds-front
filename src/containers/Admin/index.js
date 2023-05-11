import React, { useState, useEffect } from 'react'
import './style.css'
import AdminPopUp from '../../components/AdminPopUp/AdminPopUpAluno'
import TableAdmin from '../../components/TableAdmin/TableAdmin'
import { Header } from '../../components'
import AdminPopUpAluno from '../../components/AdminPopUp/AdminPopUpAluno'
import AdminPopUpProfessor from '../../components/AdminPopUp/AdminPopUpProfessor'
import { professorsRequest, studentListRequest } from '../../services'

const Admin = () => {
	const [professorData, setProfessorData] = useState(null)

	useEffect(() => {
		const getProfessorData = async () => {
			try {
				const { data } = await professorsRequest()
				setProfessorData(data)
			} catch (error) {
				console.log(error)
			}
		}
		getProfessorData()
	}, [professorData])

	const [studentData, setStudentData] = useState(null)

	useEffect(() => {
		const getStudentData = async () => {
			try {
				const { data } = await studentListRequest()
				setStudentData(data)
			} catch (error) {
				console.log(error)
			}
		}
		getStudentData()
	}, [studentData])

	return (
		professorData && (
			<div className='admin-container-class'>
				<Header />

				<h1>Administração</h1>

				<div className='admin-conteudos'>
					<div className='conteudos'>
						<h1>Alunos</h1>
						<div className='tabela-scroll'>
							<TableAdmin data={studentData} />
						</div>

						<div className='PopUp'>
							<AdminPopUpAluno />
						</div>
					</div>

					<div className='conteudos'>
						<h1>Professores</h1>
						<div className='tabela-scroll'>
							<TableAdmin data={professorData} />
						</div>

						<div className='PopUp'>
							<AdminPopUpProfessor />
						</div>
					</div>
				</div>
			</div>
		)
	)
}

export default Admin

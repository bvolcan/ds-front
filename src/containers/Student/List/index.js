import React from 'react'
import './style.css'
import EnhancedTable from '../../../components/EnhancedTable'
import Logo from '../../../images/logo.svg'
import UploadButton from '../../../components/UploadButton'

let userName = 'Aluno Teste'
let className = 'Turma Teste'

const StudentList = () => {
	return (
		<div className='container'>
			<header>
				<img src={Logo}></img>
				<span className='profile-pic'>Profile Pic</span>
			</header>
			<div className='title'>
				<h2>
					Olá {userName}, você está matriculado na turma <b>{className}!</b>
				</h2>
			</div>
			<div className='table'>
				<div className='table-header'>
					<div className='table-header-text'>
						<h3>Suas submissões</h3>
					</div>
					<div className='table-header-button'>
						<UploadButton></UploadButton>
					</div>
				</div>
				<div className='submissions-table'>
					<EnhancedTable></EnhancedTable>
				</div>
			</div>
		</div>
	)
}

export default StudentList

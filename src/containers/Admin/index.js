import React, { useState, useEffect } from 'react'
import './style.css'
import AdminPopUp from '../../components/AdminPopUp/AdminPopUpAluno'
import TableAdmin from '../../components/TableAdmin/TableAdmin'
import { Header } from '../../components'
import AdminPopUpAluno from '../../components/AdminPopUp/AdminPopUpAluno'
import AdminPopUpProfessor from '../../components/AdminPopUp/AdminPopUpProfessor'


const Admin = () => {
	return (
		<div className="admin-container-class">

        <Header />

        <h1>Administração</h1>

        <div className="admin-conteudos">
        
            <div className="conteudos">
                <h1>Alunos</h1> 
                <div className="tabela">
                    <TableAdmin />
                </div>
                

                <div className='PopUp'>
                    <AdminPopUpAluno />
                </div>
            </div>

            <div className="conteudos">

                <h1>Professores</h1>
                <div className="tabela">
                    <TableAdmin />
                </div>
                

                <div className='PopUp'>
                    <AdminPopUpProfessor />
                </div>
            </div>
        </div>
    </div>
	)
}

export default Admin

import React, { useState, useEffect } from 'react'
import './style.css'
import { Header } from '../../components'
import { reviewerClassRequest, advisorClassRequest } from '../../services'
import AdvisorClassTable from '../../components/AdvisorClassTable'
import { useParams } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { useHistory } from 'react-router-dom'

const ViewClass = () => {
	const [classesData, setClassesData] = useState(null)
	const { role } = useParams()
	const history = useHistory()

	useEffect(() => {
		const getClassesData = async () => {
			try {
				const { data } =
					role === 'revisor'
						? await reviewerClassRequest(localStorage.getItem('classId'))
						: await advisorClassRequest(localStorage.getItem('classId'))
				setClassesData(data)
			} catch (error) {
				console.log(error)
			}
		}
		getClassesData()
	}, [role])

	return (
		<div className='container'>
			<Header />
			<div className='table'>
				<div className='table-header'>
					<div className='table-header-text'>
						<IconButton
							onClick={() => {
								history.push('/professor')
							}}
						>
							<ArrowBack />
						</IconButton>
						<h3>
							Propostas da turma{' '}
							{localStorage.getItem('className').toUpperCase()}
						</h3>
					</div>
				</div>
				<div className='submissions-table'>
					{classesData && <AdvisorClassTable data={classesData} role={role} />}
				</div>
			</div>
		</div>
	)
}

export default ViewClass

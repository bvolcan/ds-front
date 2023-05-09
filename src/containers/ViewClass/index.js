import React, { useState, useEffect } from 'react'
import './style.css'
import EnhancedTable from '../../components/EnhancedTable'
import { Header } from '../../components'
import { professorsClassesRequest } from '../../services'

let turma = 'blabla'
const ViewClass = () => {
	const [classesData, setClassesData] = useState(null)

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
	console.log(classesData)
	return (
		<div className='container'>
			<Header />
			<div className='table'>
				<div className='table-header'>
					<div className='table-header-text'>
						<h3>Propostas da turma {turma}</h3>
					</div>
				</div>
				<div className='submissions-table'>
					{/* <EnhancedTable data={classesData.proposals} /> */}
				</div>
			</div>
		</div>
	)
}

export default ViewClass

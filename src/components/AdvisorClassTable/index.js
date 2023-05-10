import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { format } from 'date-fns'
import './style.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function createData(data) {
	let titulo = data.title
	let autor = data.student.user.name
	let dataenvio = format(new Date(data.createdAt), 'dd/MM/yyyy')
	let status = data.status
	let id = data.id
	let link = data.filePath
	let reviewId = data.reviews[data.reviews.length - 1].id

	return { titulo, autor, dataenvio, status, id, link, reviewId }
}

const headCells = [
	{
		id: 'titulo',
		numeric: false,
		disablePadding: false,
		label: 'Título'
	},
	{
		id: 'autor',
		numeric: false,
		disablePadding: false,
		label: 'Autor'
	},
	{
		id: 'dataenvio',
		numeric: false,
		disablePadding: false,
		label: 'Data de envio'
	},
	{
		id: 'status',
		numeric: false,
		disablePadding: false,
		label: 'Status'
	},
	{
		id: 'proposta',
		numeric: false,
		disablePadding: false,
		label: 'Proposta'
	},
	{
		id: 'revisao',
		numeric: false,
		disablePadding: false,
		label: 'Revisão'
	}
]

function EnhancedTableHead(props) {
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
					>
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

const AdvisorClassTable = ({ data }) => {
	const [rows, setRows] = React.useState([])
	useEffect(() => {
		const getTableData = async () => {
			try {
				setRows(data?.map((proposal, i) => createData(proposal)))
			} catch (error) {
				console.log(error)
			}
			data?.map((proposal, i) => createData(proposal))
		}
		getTableData()
	}, [data])

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby='tableTitle'
						size={'medium'}
					>
						<EnhancedTableHead rowCount={rows.length} />
						<TableBody>
							{rows.length > 0 ? (
								rows?.map((row, index) => {
									return (
										<TableRow hover key={row.titulo + index}>
											<TableCell
												component='th'
												scope='row'
												padding='normal'
												align='left'
											>
												{row.titulo}
											</TableCell>
											<TableCell align='left'>{row.autor}</TableCell>
											<TableCell align='left'>{row.dataenvio}</TableCell>
											<TableCell align='left'>{row.status}</TableCell>
											<TableCell align='left'>
												<a
													href={`${row.link}`}
													target='_blank'
													rel='noopener noreferrer'
												>
													PDF
												</a>
											</TableCell>
											<TableCell align='left'>
												{row.status === 'Pendente' ? (
													<Link
														to='/professor/revisor/revisarproposta'
														onClick={() => {
															localStorage.setItem('reviewId', row.reviewId)
														}}
													>
														Revisar
													</Link>
												) : (
													<Link to='/professor/revisor/xxx'>Ver</Link>
												)}
											</TableCell>
										</TableRow>
									)
								})
							) : (
								<TableRow key='vazio'>
									<TableCell
										component='th'
										scope='row'
										padding='normal'
										align='center'
										colSpan={6}
									>
										Ainda não tem nenhuma proposta aqui.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Box>
	)
}

export default AdvisorClassTable

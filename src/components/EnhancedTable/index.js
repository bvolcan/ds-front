import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './style.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function createData(data) {
	let titulo = data.title
	let turma = data.class.name
	let orientador = data.professor.user.name
	let status = data.status
	let id = data.id
	let link = data.link

	return { titulo, turma, orientador, status, id, link }
}

const headCells = [
	{
		id: 'titulo',
		numeric: false,
		disablePadding: false,
		label: 'Título'
	},
	{
		id: 'turma',
		numeric: false,
		disablePadding: false,
		label: 'Turma'
	},
	{
		id: 'orientador',
		numeric: false,
		disablePadding: false,
		label: 'Orientador'
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

const EnhancedTable = ({ data }) => {
	const [rows, setRows] = React.useState([])

	useEffect(() => {
		const getTableData = async () => {
			try {
				setRows(data.map((proposal, i) => createData(proposal)))
			} catch (error) {
				console.log(error)
			}
			data.map((proposal, i) => createData(proposal))
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
												// sx={{ pl: 4 }}
												align='left'
											>
												{row.titulo}
											</TableCell>
											<TableCell align='left'>
												{row.turma.toUpperCase()}
											</TableCell>
											<TableCell align='left'>{row.orientador}</TableCell>
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
												<Link to={`verrevisao/?proposalId=${row.id}`}>Ver</Link>
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
										Você ainda não submeteu nenhuma proposta.
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

export default EnhancedTable

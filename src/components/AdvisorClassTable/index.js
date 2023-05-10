import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import { format } from 'date-fns'
import { visuallyHidden } from '@mui/utils'
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

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1
	}
	if (b[orderBy] > a[orderBy]) {
		return 1
	}
	return 0
}

function getComparator(order, orderBy) {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index])
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0])
		if (order !== 0) {
			return order
		}
		return a[1] - b[1]
	})
	return stabilizedThis.map((el) => el[0])
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

const DEFAULT_ORDER = 'asc'
const DEFAULT_ORDER_BY = 'status'
const DEFAULT_ROWS_PER_PAGE = 5

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props
	const createSortHandler = (newOrderBy) => (event) => {
		onRequestSort(event, newOrderBy)
	}

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'normal'}
						sortDirection={orderBy === headCell.id ? order : false}
						// sx={{ pl: 4 }}
					>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box component='span' sx={visuallyHidden}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}

EnhancedTableHead.propTypes = {
	numSelected: PropTypes.number.isRequired,
	onRequestSort: PropTypes.func.isRequired,
	onSelectAllClick: PropTypes.func.isRequired,
	order: PropTypes.oneOf(['asc', 'desc']).isRequired,
	orderBy: PropTypes.string.isRequired,
	rowCount: PropTypes.number.isRequired
}

const AdvisorClassTable = ({ data }) => {
	const [order, setOrder] = React.useState(DEFAULT_ORDER)
	const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY)
	const [selected, setSelected] = React.useState([])
	const [page, setPage] = React.useState(0)
	const [dense, setDense] = React.useState(false)
	const [visibleRows, setVisibleRows] = React.useState(null)
	const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE)
	const [paddingHeight, setPaddingHeight] = React.useState(0)
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
	}, [])

	React.useEffect(() => {
		let rowsOnMount = stableSort(
			rows,
			getComparator(DEFAULT_ORDER, DEFAULT_ORDER_BY)
		)

		rowsOnMount = rowsOnMount.slice(
			0 * DEFAULT_ROWS_PER_PAGE,
			0 * DEFAULT_ROWS_PER_PAGE + DEFAULT_ROWS_PER_PAGE
		)

		setVisibleRows(rowsOnMount)
	}, [])

	const handleRequestSort = React.useCallback(
		(event, newOrderBy) => {
			const isAsc = orderBy === newOrderBy && order === 'asc'
			const toggledOrder = isAsc ? 'desc' : 'asc'
			setOrder(toggledOrder)
			setOrderBy(newOrderBy)

			const sortedRows = stableSort(
				rows,
				getComparator(toggledOrder, newOrderBy)
			)
			const updatedRows = sortedRows.slice(
				page * rowsPerPage,
				page * rowsPerPage + rowsPerPage
			)

			setVisibleRows(updatedRows)
		},
		[order, orderBy, page, rowsPerPage]
	)

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.titulo)
			setSelected(newSelected)
			return
		}
		setSelected([])
	}

	const handleClick = (event, titulo) => {
		const selectedIndex = selected.indexOf(titulo)
		let newSelected = []

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, titulo)
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1))
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1))
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			)
		}

		setSelected(newSelected)
	}

	const handleChangePage = React.useCallback(
		(event, newPage) => {
			setPage(newPage)

			const sortedRows = stableSort(rows, getComparator(order, orderBy))
			const updatedRows = sortedRows.slice(
				newPage * rowsPerPage,
				newPage * rowsPerPage + rowsPerPage
			)

			setVisibleRows(updatedRows)

			// Avoid a layout jump when reaching the last page with empty rows.
			const numEmptyRows =
				newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0

			const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows
			setPaddingHeight(newPaddingHeight)
		},
		[order, orderBy, dense, rowsPerPage]
	)

	const handleChangeRowsPerPage = React.useCallback(
		(event) => {
			const updatedRowsPerPage = parseInt(event.target.value, 10)
			setRowsPerPage(updatedRowsPerPage)

			setPage(0)

			const sortedRows = stableSort(rows, getComparator(order, orderBy))
			const updatedRows = sortedRows.slice(
				0 * updatedRowsPerPage,
				0 * updatedRowsPerPage + updatedRowsPerPage
			)

			setVisibleRows(updatedRows)

			// There is no layout jump to handle on the first page.
			setPaddingHeight(0)
		},
		[order, orderBy]
	)

	const handleChangeDense = (event) => {
		setDense(event.target.checked)
	}

	const isSelected = (titulo) => selected.indexOf(titulo) !== -1

	return (
		<Box sx={{ width: '100%' }}>
			<Paper sx={{ width: '100%', mb: 2 }}>
				<TableContainer>
					<Table
						sx={{ minWidth: 750 }}
						aria-labelledby='tableTitle'
						size={dense ? 'small' : 'medium'}
					>
						<EnhancedTableHead
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows.length}
						/>
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
							{paddingHeight > 0 && (
								<TableRow
									style={{
										height: paddingHeight
									}}
								>
									<TableCell colSpan={6} />
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

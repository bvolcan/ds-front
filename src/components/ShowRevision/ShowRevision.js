import React from 'react'
import './ShowRevision.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { format } from 'date-fns'

const ShowRevision = ({ isRevision, data }) => {
	// console.log(data)

	return (
		<>
			{isRevision ? (
				<div className='show-revision'>
					<div className='show-revision-title'>
						<h2>Revisão - Professor {data.numeroServidorRevisor}</h2>
					</div>
					<div className='show-revision-content'>
						<div className='objective-criteria'>
							<h3>Critérios Objetivos</h3>
							<TableContainer component={Paper}>
								<Table sx={{ width: 1200 }} aria-label='criterios objetivos'>
									<TableBody>
										<TableRow
											key='Apresentacao e consistencia'
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell
												component='th'
												scope='row'
												align='left'
												width='50%'
												style={{ fontWeight: 600 }}
											>
												Apresentação e consistência
											</TableCell>
											<TableCell>{data.presentation}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell style={{ fontWeight: 600 }}>
												Relevância e contribuição
											</TableCell>
											<TableCell>{data.relevance}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell style={{ fontWeight: 600 }}>
												Metodologia
											</TableCell>
											<TableCell>{data.methodology}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell style={{ fontWeight: 600 }}>
												Adequação ao curso
											</TableCell>
											<TableCell>
												{data.wasAdequate ? '1 - Adequado' : '2 - Inadequado'}
											</TableCell>
										</TableRow>
										<TableRow>
											<TableCell style={{ fontWeight: 600 }}>
												Plano de trabalho a ser desenvolvido
											</TableCell>
											<TableCell>{data.workPlan}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell style={{ fontWeight: 600 }}>
												Avaliação geral
											</TableCell>
											<TableCell>
												{data.wasApproved
													? '1 - Proposta Aprovada'
													: '2 - Proposta Reprovada'}
											</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</div>
						<div className='dissertative-criteria'>
							<h3>Critérios Dissertativos</h3>
							<TableContainer component={Paper}>
								<Table
									sx={{ width: 1200 }}
									aria-label='criterios dissertativos'
								>
									<TableBody>
										<TableRow
											key='Resumo da proposta'
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell
												component='th'
												scope='row'
												align='left'
												width='50%'
												style={{ fontWeight: 600 }}
											>
												Resumo da proposta
											</TableCell>
											<TableCell>{data.summary}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell style={{ fontWeight: 600 }}>
												Pontos fortes da proposta
											</TableCell>
											<TableCell>{data.strengths}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell style={{ fontWeight: 600 }}>
												Pontos fracos da proposta
											</TableCell>
											<TableCell>{data.weaknesses}</TableCell>
										</TableRow>
										<TableRow>
											<TableCell style={{ fontWeight: 600 }}>
												Detalhamento da avaliação
											</TableCell>
											<TableCell>{data.details}</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
						</div>
					</div>
				</div>
			) : (
				<div className='show-revision'>
					<div className='show-revision-title'>
						<h2>Revisores</h2>
					</div>
					<div className='show-revision-content'>
						<div className='reviewers'>
							<div className='reviewers-title'>
								<h3>Revisor</h3>
								<h3>Revisado em</h3>
							</div>

							<TableContainer component={Paper}>
								<Table sx={{ width: 1200 }} aria-label='revisores'>
									<TableBody>
										{data.map((revisao) => (
											<TableRow>
												<TableCell
													component='th'
													scope='row'
													align='left'
													width='50%'
													style={{ fontWeight: 600 }}
												>
													{revisao.reviewer}
												</TableCell>
												<TableCell>
													{format(new Date(revisao.reviewedOn), 'dd/MM/yyyy')}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default ShowRevision

import React from 'react'
import './ShowRevision.css'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const ShowRevision = ({ data }) => {
	// console.log(data)
	return (
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
									<TableCell>{data.apresentacao}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ fontWeight: 600 }}>
										Relevância e contribuição
									</TableCell>
									<TableCell>{data.relevancia}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ fontWeight: 600 }}>Metodologia</TableCell>
									<TableCell>{data.metodologia}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ fontWeight: 600 }}>
										Adequação ao curso
									</TableCell>
									<TableCell>
										{data.foiAdequado ? '1 - Adequado' : '2 - Inadequado'}
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ fontWeight: 600 }}>
										Plano de trabalho a ser desenvolvido
									</TableCell>
									<TableCell>{data.planoDeTrabalho}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ fontWeight: 600 }}>
										Avaliação geral
									</TableCell>
									<TableCell>
										{data.foiAprovado
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
						<Table sx={{ width: 1200 }} aria-label='criterios dissertativos'>
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
									<TableCell>{data.resumo}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ fontWeight: 600 }}>
										Pontos fortes da proposta
									</TableCell>
									<TableCell>{data.pontosFortes}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ fontWeight: 600 }}>
										Pontos fracos da proposta
									</TableCell>
									<TableCell>{data.pontosFracos}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={{ fontWeight: 600 }}>
										Detalhamento da avaliação
									</TableCell>
									<TableCell>{data.detalhamento}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</div>
			</div>
		</div>
	)
}

export default ShowRevision
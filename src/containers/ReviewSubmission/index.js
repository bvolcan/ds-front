import React, { useState, useEffect } from 'react'
import './style.css'
import {
	TextField,
	Button,
	Select,
	MenuItem,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
	FormLabel
} from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { Header } from '../../components'

const ReviewSubmission = () => {
	return (
		<div className='main-container'>
			<Header />
			<div className='review-submission-container'>
				<div className='review-submission-titles'>
					<h3>Revisão de proposta</h3>
					<h4>Proposta: Título proposta</h4>
				</div>
				<form className='review-submission-form'>
					<div className='review-submission-form-inputs'>
						<FormControl>
							<FormLabel>Apresentação e consistência.</FormLabel>
							<RadioGroup>
								<FormControlLabel
									value='teste1'
									control={<Radio />}
									label='Excelente'
								/>
								<FormControlLabel
									value='teste2'
									control={<Radio />}
									label='Bom'
								/>
								<FormControlLabel
									value='teste3'
									control={<Radio />}
									label='Regular'
								/>
								<FormControlLabel
									value='teste4'
									control={<Radio />}
									label='Insuficiente'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Relevância e contribuição.</FormLabel>
							<RadioGroup>
								<FormControlLabel
									value='teste1'
									control={<Radio />}
									label='Excelente'
								/>
								<FormControlLabel
									value='teste2'
									control={<Radio />}
									label='Bom'
								/>
								<FormControlLabel
									value='teste3'
									control={<Radio />}
									label='Regular'
								/>
								<FormControlLabel
									value='teste4'
									control={<Radio />}
									label='Insuficiente'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Metodologia.</FormLabel>
							<RadioGroup>
								<FormControlLabel
									value='teste1'
									control={<Radio />}
									label='Excelente'
								/>
								<FormControlLabel
									value='teste2'
									control={<Radio />}
									label='Bom'
								/>
								<FormControlLabel
									value='teste3'
									control={<Radio />}
									label='Regular'
								/>
								<FormControlLabel
									value='teste4'
									control={<Radio />}
									label='Insuficiente'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Adequação ao curso.</FormLabel>
							<RadioGroup>
								<FormControlLabel
									value='teste1'
									control={<Radio />}
									label='Sim'
								/>
								<FormControlLabel
									value='teste2'
									control={<Radio />}
									label='Não'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Plano de trabalho a ser desenvolvido.</FormLabel>
							<RadioGroup>
								<FormControlLabel
									value='teste1'
									control={<Radio />}
									label='Muito bem especificado e exequível'
								/>
								<FormControlLabel
									value='teste2'
									control={<Radio />}
									label='Exequível'
								/>
								<FormControlLabel
									value='teste3'
									control={<Radio />}
									label='Mal especificado e/ou inexequível'
								/>
							</RadioGroup>
						</FormControl>
						<FormControl>
							<FormLabel>Avaliação geral.</FormLabel>
							<RadioGroup>
								<FormControlLabel
									value='teste1'
									control={<Radio />}
									label='Aprovada'
								/>
								<FormControlLabel
									value='teste2'
									control={<Radio />}
									label='Reprovada'
								/>
							</RadioGroup>
						</FormControl>
						<div>
							<span>Resumo da proposta.</span>
							<TextField required variant='outlined' multiline minRows={5} />
						</div>
						<div>
							<span>Pontos fortes da proposta.</span>
							<TextField required variant='outlined' multiline minRows={5} />
						</div>
						<div>
							<span>Pontos fracos da proposta</span>
							<TextField required variant='outlined' multiline minRows={5} />
						</div>
						<div>
							<span>Detalhamento da avaliação.</span>
							<TextField required variant='outlined' multiline minRows={5} />
						</div>
					</div>
					<div className='buttons'>
						<Button
							variant='contained'
							style={{
								width: 236,
								marginRight: 22,
								backgroundColor: '#E4FFFDFF',
								color: '#00BBAAFF'
							}}
							// onClick={() => {
							// 	history.push('/aluno')
							// }}
						>
							Cancelar
						</Button>
						<Button
							variant='contained'
							style={{
								width: 236,
								backgroundColor: '#00BBAAFF',
								color: 'white'
							}}
							type='submit'
						>
							Criar
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ReviewSubmission

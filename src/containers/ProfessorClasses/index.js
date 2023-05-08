import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { Button } from '@mui/material'
import { Dashboard, Folder, Groups, Create, Class } from '@mui/icons-material'
import {
	Header,
	ClassesContainer,
	CoordinatorClassesContainer
} from '../../components'

const turmas = {
	coordinatorClasses: [
		{
			id: 1,
			name: 'tcc1 2021/2',
			startDate: '2021-01-28T03:00:00.000Z',
			endDate: '2023-04-30T03:00:00.000Z'
		},
		{
			id: 2,
			name: 'tcc1 2022/1',
			startDate: '2021-01-28T03:00:00.000Z',
			endDate: '2023-04-30T03:00:00.000Z'
		},
		{
			id: 3,
			name: 'tcc1 2022/2',
			startDate: '2021-01-28T03:00:00.000Z',
			endDate: '2023-04-30T03:00:00.000Z'
		},
		{
			id: 4,
			name: 'tcc1 2023/1',
			startDate: '2021-01-28T03:00:00.000Z',
			endDate: '2023-04-30T03:00:00.000Z'
		}
	],
	advisorClasses: [
		{
			id: 1,
			name: 'tcc1 2021/2',
			startDate: '2021-01-28T03:00:00.000Z',
			endDate: '2023-04-30T03:00:00.000Z'
		}
	],
	reviewerClasses: []
}

const ProfessorClasses = () => {
  const [componenteAtual, setComponenteAtual] = useState('orientacao');

    function handleClickOrientacao() {
      setComponenteAtual('orientacao');
    }

    function handleClickRevisao() {
      setComponenteAtual('revisao');
    }

    function handleClickCoordenacao() {
      setComponenteAtual('coordenacao');
    }

	return (
		<div className='container-class'>
			<Header />
			<div className='menu-lateral'>
				<div className='menu'>
          <div>
            {componenteAtual === 'orientacao' ? <ClassesContainer/> : null}
            {componenteAtual === 'revisao' ? <ClassesContainer/> : null}
            {componenteAtual === 'coordenacao' ? <CoordinatorClassesContainer/> : null}

            <Button
              variant='text'
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                alignItems: 'center',
                width: 240,
                height: 52,
                color: '#00BBAAFF'
              }}
              type='submit'
              startIcon={<Dashboard />}
              onClick={handleClickOrientacao}
            >
              Orientações
            </Button>

            <Button
              variant='text'
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                alignItems: 'center',
                width: 240,
                height: 52,
                color: '#565D6DFF'
              }}
              type='submit'
              startIcon={<Folder />}
              onClick={handleClickRevisao}
            >
              Revisões
            </Button>

            <Button
              variant='text'
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                alignItems: 'center',
                width: 240,
                height: 52,
                color: '#565D6DFF'
              }}
              type='submit'
              startIcon={<Groups />}
              onClick={handleClickCoordenacao}
            >
              Coordenações
            </Button>
          </div>
					
				</div>

				<div>
					<Button
						variant='contained'
						style={{
							marginTop: 360,
							width: 240,
							height: 52,
							backgroundColor: '#E4FFFDFF',
							color: '#00BBAAFF'
						}}
						type='submit'
						startIcon={<Create />}
					>
						Criar Turma
					</Button>
				</div>
			</div>

			<div className='body-classes'>
				<h1>Turmas</h1>

				<div className='cards'>
					{turmas.coordinatorClasses.map((turma) => (
						<Link to='/' className='itens'>
							Turma: {turma.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProfessorClasses
import React from 'react'
import { Header, ShowRevision } from '../../../components'
import { Button } from '@material-ui/core'
import './style.css'

let revisoesData = [
	{
		id: 1,
		propostaId: 1,
		revisadoEm: '16-04-2023',
		apresentacao: '3 - Bom',
		relevancia: '4 - Excelente',
		metodologia: '3 - Bom',
		foiAdequado: true,
		planoDeTrabalho: '2 - Exequível',
		foiAprovado: true,
		resumo:
			'O trabalho trata sobre xxxx. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		pontosFortes: 'Os pontos fortes são que blablabla.',
		pontosFracos: 'Como pontos fracos é possivel citar xlaxaoxalxoalo.',
		detalhamento: 'Detalhes não sei pois não li tudo.',
		numeroServidorRevisor: 1234
	},
	{
		id: 2,
		propostaId: 1,
		revisadoEm: '16-04-2023',
		apresentacao: '2 - Regular',
		relevancia: '3 - Bom',
		metodologia: '1 - Insuficiente',
		foiAdequado: false,
		planoDeTrabalho: '1 - Mal especificado e/ou não exequível',
		foiAprovado: false,
		resumo:
			'O trabalho trata sobre um bagulho interessante mas foi mal feito. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
		pontosFortes: 'Os pontos fortes são o assunto né mas ta uma bosta.',
		pontosFracos: 'Os pontos fracos são todo o resto.',
		detalhamento: 'Nao sei detalhes pois li rapidao e nao entendi nada.',
		numeroServidorRevisor: 5678
	}
]

let propostaTitle = 'Proposta Teste'

const ViewRevision = () => {
	return (
		<div className='view-revision'>
			<Header />
			<div className='view-revision-title'>
				<h1>Revisão de proposta</h1>
				<h3>Proposta: {propostaTitle}</h3>
			</div>
			<div className='view-revision-box'>
				{revisoesData.map((revisao) => (
					<ShowRevision data={revisao} />
				))}
			</div>
			<div className='back-button'>
				<Button variant='outlined' href='studentlist'>
					Voltar
				</Button>
			</div>
		</div>
	)
}

export default ViewRevision

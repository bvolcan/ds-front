import React from 'react'
import { Header, ShowRevision } from '../../../components'
import { Button } from '@material-ui/core'
import './style.css'

let revisoesData = {
	id: 1,
	title:
		'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina',
	reviews: [
		{
			id: 1,
			proposalId: 1,
			reviewedOn: '2021-03-05T03:00:00.000Z',
			presentation: '2 - Regular',
			relevance: '3 - Bom',
			methodology: '2 - Regular',
			wasAdequate: true,
			workPlan: '2 - Exequível',
			wasApproved: false,
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.\n     Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.\n     Donec sit amet orci vulputate turpis tristique molestie.',
			strengths:
				'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
			weaknesses:
				'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
			details:
				'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
			reviewerEmail: 'ldsfreitas@inf.ufpel.edu.br',
			reviewer: 'Larissa Astrogildo de Freitas'
		},
		{
			id: 2,
			proposalId: 1,
			reviewedOn: '2021-04-06T03:00:00.000Z',
			presentation: '4 - Excelente',
			relevance: '3 - Bom',
			methodology: '3 - Bom',
			wasAdequate: true,
			workPlan: '2 - Exequível',
			wasApproved: true,
			summary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.\n    Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.\n    Donec sit amet orci vulputate turpis tristique molestie.',
			strengths:
				'Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. ',
			weaknesses:
				'Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim.',
			details:
				'Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis.',
			reviewerEmail: 'ldsfreitas@inf.ufpel.edu.br',
			reviewer: 'Rafael Piccin Torchelsen'
		}
	]
}

const ViewRevision = () => {
	return (
		<div className='view-revision'>
			<Header />
			<div className='view-revision-title'>
				<h1>Revisão de proposta</h1>
				<h3>Proposta: {revisoesData.title}</h3>
			</div>
			<div className='view-revision-box'>
				<div className='view-revision-reviewers'>
					<ShowRevision isRevision={false} data={revisoesData.reviews} />
				</div>

				{revisoesData.reviews.map((revisao) => (
					<ShowRevision isRevision={true} data={revisao} />
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

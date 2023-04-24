import React from 'react'
import './style.css'
import EnhancedTable from '../../../components/EnhancedTable'
import { Header } from '../../../components'
import UploadButton from '../../../components/UploadButton'

let studentsData = [
	{
		userEmail: 'lwtavares@inf.ufpel.edu.br',
		registrationNumber: '19100824',
		proposals: [
			{
				id: 1,
				title:
					'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina 1',
				coadvisor: 'Guilherme Corrêa',
				filePath: '/home/sim',
				abstract: 'forget',
				keywords:
					'inteligência artifical; nuvens de pontos; aprendizado de máquina',
				classId: 1,
				studentEmail: 'lwtavares@inf.ufpel.edu.br',
				advisorEmail: 'cfdsantos@inf.ufpel.edu.br',
				created_at: '2023-04-12T18:17:59.472Z',
				updated_at: '2023-04-12T18:17:59.472Z',
				class: {
					name: 'TCC1 2021/2'
				},
				professor: {
					userEmail: 'cfdsantos@inf.ufpel.edu.br',
					employeeNumber: '12345678'
				}
			},
			{
				id: 2,
				title:
					'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina 2',
				coadvisor: 'Guilherme Corrêa',
				filePath: '/home/sim',
				abstract:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.\n     Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.\n     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.',
				keywords:
					'inteligência artifical; nuvens de pontos; aprendizado de máquina',
				classId: 1,
				studentEmail: 'lwtavares@inf.ufpel.edu.br',
				advisorEmail: 'cfdsantos@inf.ufpel.edu.br',
				created_at: '2023-04-12T18:17:59.472Z',
				updated_at: '2023-04-12T18:17:59.472Z',
				class: {
					name: 'TCC1 2021/2'
				},
				professor: {
					userEmail: 'cfdsantos@inf.ufpel.edu.br',
					employeeNumber: '12345678'
				}
			},
			{
				id: 3,
				title:
					'Decisão de modo de codificação de nuvens de pontos segundo o padrão G-PCC utilizando aprendizado de máquina 3',
				coadvisor: 'Guilherme Corrêa',
				filePath: '/home/sim',
				abstract:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget auctor erat, a lacinia tellus. Mauris rutrum, leo eget tempor vulputate, diam magna consequat nunc, at lacinia nulla augue sed magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam cursus quam nec pellentesque tristique. Integer sed sem ultricies, pellentesque turpis et, convallis urna. Pellentesque iaculis sem sagittis sapien congue pharetra. Nunc varius nunc ut ipsum facilisis commodo. Sed vestibulum, ipsum ac mattis facilisis, velit ex dignissim dui, id commodo purus turpis et risus. Aenean malesuada, felis at pharetra porta, nibh ligula faucibus nunc, ac feugiat nisl erat vel ante. Nunc mattis, risus pretium ultricies interdum, nibh lectus posuere erat, ut dignissim lacus dui in massa. Phasellus eleifend diam at sem blandit, sit amet consectetur massa fringilla. Aenean pretium aliquam nisi nec blandit. Proin semper, dui non fringilla ultrices, nibh dolor mollis justo, posuere feugiat neque nisi ac massa. Donec fermentum consectetur orci, ac imperdiet mauris imperdiet eget. Proin augue enim, porttitor nec nulla eu, eleifend mollis nunc.\n     Praesent sit amet bibendum metus, id accumsan nibh. Pellentesque convallis odio eget pharetra euismod. Duis blandit arcu eget ultrices egestas. Nulla ac aliquet libero. Vivamus scelerisque pharetra dui, tempor egestas tortor rhoncus ac. Mauris porttitor consequat ante, quis porttitor nisl vestibulum quis. Duis vel lacus et orci pellentesque dignissim. Praesent sollicitudin tempus vestibulum. Ut sollicitudin posuere velit, vel hendrerit turpis facilisis ut. Aliquam sit amet eros id risus maximus facilisis. Donec in velit vitae dolor fringilla ullamcorper non eget massa. Ut efficitur iaculis diam, vel ornare erat fringilla lobortis. Vestibulum sodales accumsan finibus. Sed in felis non nunc mattis tincidunt vitae eu ipsum. Phasellus venenatis massa tellus, ac dapibus turpis tempor id.\n     Donec sit amet orci vulputate turpis tristique molestie. Etiam id nibh non nisi commodo semper. Integer interdum, orci nec mollis malesuada, dui magna fermentum nisl, sed finibus risus odio nec neque. Praesent mauris lectus, condimentum id ligula vel, commodo tempus augue. In semper ultrices scelerisque. Praesent dignissim vulputate justo posuere porta. Donec ligula sem, lobortis ultricies lectus quis, eleifend pharetra lorem. Aliquam vel interdum est, sit amet consequat nisi. Duis nec accumsan lorem, eu suscipit elit.',
				keywords:
					'inteligência artifical; nuvens de pontos; aprendizado de máquina',
				classId: 1,
				studentEmail: 'lwtavares@inf.ufpel.edu.br',
				advisorEmail: 'cfdsantos@inf.ufpel.edu.br',
				created_at: '2023-04-12T18:17:59.472Z',
				updated_at: '2023-04-12T18:17:59.472Z',
				class: {
					name: 'TCC1 2022/1'
				},
				professor: {
					userEmail: 'cfdsantos@inf.ufpel.edu.br',
					employeeNumber: '12345678'
				}
			}
		]
	}
]
let turma = 'TCC1 2022/2'

const ViewClass = () => {
	return (
		<div className='container'>
			<Header />

			<div className='table'>
				<div className='table-header'>
					<div className='table-header-text'>
						<h3>Propostas da turma {turma}</h3>
					</div>
					<div className='table-header-button'>
						<UploadButton />
					</div>
				</div>
				<div className='submissions-table'>
					<EnhancedTable data={studentsData[0].proposals} />
				</div>
			</div>
		</div>
	)
}

export default ViewClass

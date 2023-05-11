import React from 'react'
import './Header.css'
import Larichair_Icon from '../../images/larichair_icon.png'
import { AccountCircle, Logout } from '@mui/icons-material'
import { Button } from '@mui/material'
import Popover from '@mui/material/Popover'
import { useHistory } from 'react-router-dom'

const Header = () => {
	const history = useHistory()
	const [anchorEl, setAnchorEl] = React.useState(null)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	return (
		<header>
			<Button
				onClick={() => {
					localStorage.getItem('isProfessor') === 'true'
						? history.push('/professor')
						: history.push('/aluno')
				}}
			>
				<img src={Larichair_Icon} alt=''></img>
			</Button>
			<div className='profile-pic'>
				<AccountCircle onClick={handleClick} />
				<Popover
					className='popover-div'
					id={id}
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center'
					}}
				>
					<div className='popover-content'>
						<h3 className='user-name'>{localStorage.getItem('userName')}</h3>
						<Button
							onClick={() => {
								localStorage.clear()
								history.push('/')
							}}
						>
							<Logout />
							<h4>Logout</h4>
						</Button>
					</div>
				</Popover>
			</div>
		</header>
	)
}

export default Header

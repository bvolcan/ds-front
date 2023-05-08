import React from 'react'
import './Header.css'
import Larichair_Icon from '../../images/larichair_icon.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Header = () => {
	return (
		<header>
			<img src={Larichair_Icon} alt=''></img>
			<div className='profile-pic'>
				<AccountCircleIcon sx={{ fontSize: 40 }} />
			</div>
		</header>
	)
}

export default Header

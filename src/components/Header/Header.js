import React from 'react'
import './Header.css'
import Larichair_Icon from '../../images/larichair_icon.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<Link to='/'>
				<img src={Larichair_Icon} alt=''></img>
			</Link>
			<div className='profile-pic'>
				<AccountCircleIcon sx={{ fontSize: 40 }} />
			</div>
		</header>
	)
}

export default Header

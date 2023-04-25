import React from 'react'
import './Header.css'
import Logo from '../../images/logo.svg'

const Header = () => {
	return (
		<header>
			<img src={Logo} alt=''></img>
			<span className='profile-pic'>Profile Pic</span>
		</header>
	)
}

export default Header

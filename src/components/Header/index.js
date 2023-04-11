import React from 'react'
import './style.css'
import Logo from '../../images/logo.svg'

const Header = () => {
	return (
		<header>
			<img src={Logo}></img>
			<span className='profile-pic'>Profile Pic</span>
		</header>
	)
}

export default Header

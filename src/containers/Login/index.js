import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import './style.css'
import { useAuth } from '../../context/AuthContext'
import { Button, TextField } from '@material-ui/core'
import Logo from '../../images/larichair_icon.png'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'

const Login = () => {
	const { handleSubmit } = useForm()
	const { login } = useAuth()
	const history = useHistory()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)
	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const onSubmit = async () => {
		try {
			await login(email, password)
		} catch (error) {
			console.log('Login error')
		} finally {
			if (localStorage.getItem('isProfessor') === 'true') {
				history.push('/professor')
			} else {
				history.push('/aluno')
			}
		}
	}

	const onEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const onPasswordChange = (e) => {
		setPassword(e.target.value)
	}

	return (
		<div className='container'>
			<header>
				<img src={Logo} alt=''></img>
			</header>
			<div className='body-container'>
				<form className='login-form' onSubmit={handleSubmit(onSubmit)}>
					<h1>Login</h1>
					<div className='field email'>
						<span>Email</span>
						<TextField
							required
							id='email'
							placeholder='Insira seu email'
							variant='outlined'
							style={{ width: 483, backgroundColor: '#F3F4F6FF' }}
							onChange={onEmailChange}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<EmailIcon />
									</InputAdornment>
								)
							}}
						/>
					</div>
					<div className='field password'>
						<span>Senha</span>
						<TextField
							required
							type={showPassword ? 'text' : 'password'}
							id='password'
							placeholder='Insira sua senha'
							variant='outlined'
							style={{ width: 483, backgroundColor: '#F3F4F6FF' }}
							onChange={onPasswordChange}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<LockIcon />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge='end'
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					</div>
					<Button
						variant='contained'
						style={{ backgroundColor: '#00BBAAFF', color: 'white' }}
						height='44px'
						width='483px'
						type='submit'
					>
						Entrar
					</Button>
				</form>
			</div>
		</div>
	)
}

export default Login

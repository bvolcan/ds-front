import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import './style.css'
import { useAuth } from '../../context/AuthContext'
import { Button, TextField } from '@material-ui/core'
import Logo from '../../images/logo.svg'

const Login = () => {
	const { handleSubmit } = useForm()
	const { login } = useAuth()
	const history = useHistory()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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
						/>
					</div>
					<div className='field password'>
						<span>Senha</span>
						<TextField
							required
							type='password'
							id='password'
							placeholder='Insira sua senha'
							variant='outlined'
							style={{ width: 483, backgroundColor: '#F3F4F6FF' }}
							onChange={onPasswordChange}
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

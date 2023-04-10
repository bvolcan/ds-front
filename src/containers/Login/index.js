import './style.css'
import { Button, TextField } from '@material-ui/core'

const Login = () => {
	return (
		<div className='container'>
			<header>
				<h1>Logo</h1>
			</header>
			<div className='body'>
				<div className='login-form'>
					<h1>Login</h1>
					<div className='field email'>
						<span>Email</span>
						<TextField
							required
							id='email'
							placeholder='Insira seu email'
							variant='outlined'
							style={{ width: 483, backgroundColor: '#F3F4F6FF' }}
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
						/>
					</div>
					<Button
						variant='contained'
						style={{ backgroundColor: '#00BBAAFF', color: 'white' }}
						height='44px'
						width='483px'
					>
						Entrar
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Login

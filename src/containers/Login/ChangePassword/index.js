import './style.css'
import { Button, TextField } from '@material-ui/core'
import Logo from '../../../images/logo.svg'
const ChangePassword = () => {
	return (
		<div className='container'>
			<header>
				<img src={Logo}></img>
				<span className='profile-pic'>Profile Pic</span>
			</header>
			<div className='body'>
				<div className='login-form'>
					<h1>Trocar Senha</h1>
					<div className='field email'>
						<span>Senha antiga</span>
						<TextField
							required
							type='password'
							id='old_password'
							placeholder='Insira sua senha antiga'
							variant='outlined'
							style={{ width: 483, backgroundColor: '#F3F4F6FF' }}
						/>
					</div>
					<div className='field password'>
						<span>Nova senha</span>
						<TextField
							required
							type='password'
							id='new_password'
							placeholder='Insira sua nova senha'
							variant='outlined'
							style={{ width: 483, backgroundColor: '#F3F4F6FF' }}
						/>
					</div>
					<div className='field password'>
						<span>Repita a nova senha</span>
						<TextField
							required
							type='password'
							id='password'
							placeholder='Repita sua nova senha'
							variant='outlined'
							style={{ width: 483, backgroundColor: '#F3F4F6FF' }}
						/>
					</div>
					<Button
						variant='contained'
						style={{
							backgroundColor: '#00BBAAFF',
							color: 'white',
							marginBottom: 20
						}}
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

export default ChangePassword

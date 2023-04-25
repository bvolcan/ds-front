import { fetchClient } from '../providers'

export const loginRequest = (email, password) =>
	fetchClient.post('/users/login', { email, password })

export const studentRequest = () => fetchClient.get('/students')

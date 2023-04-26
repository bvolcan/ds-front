import axios from 'axios'

const provider = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL
})

provider.interceptors.request.use(async ({ headers, ...config }) => {
	const token = await localStorage.getItem('token')

	return {
		...config,
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : ''
		}
	}
})

export default provider

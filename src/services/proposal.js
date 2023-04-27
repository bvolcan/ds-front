import { fetchClient } from '../providers'

export const proposalSubmission = (formData) =>
	fetchClient.post('/proposals', formData, {
		headers: { 'content-type': 'multipart/form-data' }
	})

import { fetchClient } from '../providers'

export const proposalSubmission = (formData) =>
	fetchClient.post('/proposals', formData, {
		headers: { 'content-type': 'multipart/form-data' }
	})

export const classProposalsRequest = (classId) =>
	fetchClient.get(`/professors/classes/${classId}/proposals/coordinations`)

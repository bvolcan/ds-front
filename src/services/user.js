import { fetchClient } from '../providers'

export const loginRequest = (email, password) =>
	fetchClient.post('/users/login', { email, password })

export const studentRequest = () => fetchClient.get('/students')

export const reviewsRequest = (proposalId) =>
	fetchClient.get(`/students/proposals/${proposalId}/reviews`)

export const professorsRequest = () => fetchClient.get(`/professors`)

export const linkProfessorsRequest = (proposalId, emailList) =>
	fetchClient.post(`/coordinators/proposals/${proposalId}/reviewers`, emailList)

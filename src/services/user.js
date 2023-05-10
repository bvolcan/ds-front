import { fetchClient } from '../providers'

export const loginRequest = (email, password) =>
	fetchClient.post('/users/login', { email, password })

export const studentRequest = () => fetchClient.get('/students')

export const reviewsRequest = (proposalId) =>
	fetchClient.get(`/students/proposals/${proposalId}/reviews`)

export const professorsRequest = () => fetchClient.get(`/professors`)

export const linkProfessorsRequest = (proposalId, emailList) =>
	fetchClient.post(`/coordinators/proposals/${proposalId}/reviewers`, emailList)

export const professorsClassesRequest = () =>
	fetchClient.get(`/professors/classes`)

export const reviewerClassRequest = (classId) =>
	fetchClient.get(`professors/classes/${classId}/proposals/reviews`)

export const advisorClassRequest = (classId) =>
	fetchClient.get(`professors/classes/${classId}/proposals/advises`)

export const createClass = (classInfo) =>
	fetchClient.post(`/classes`, classInfo)

export const editClass = (classInfo, classId) =>
	fetchClient.put(`/classes`, { ...classInfo, classId })

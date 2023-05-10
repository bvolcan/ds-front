import { fetchClient } from '../providers'

export const reviewSubmission = (id, data) => {
	return fetchClient.put(`/reviews/${id}`, data)
}

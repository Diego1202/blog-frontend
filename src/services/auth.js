import axios from 'axios';
const baseUrl = '/api/auth'

const login = async (credentials) => {
	const response = await axios.post(`${baseUrl}/sign-in`, credentials)
	return response.data
}

const register = async (credentials) => {
	const response = await axios.post(`${baseUrl}/sign-up`, credentials)
	return response.data
}

export default { login, register }
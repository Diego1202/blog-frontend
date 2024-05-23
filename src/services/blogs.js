import axios from 'axios'
const baseUrl = '/api/blogs'

let token = ''
const setToken = (newToken) => {
	token = `Bearer ${newToken}`
}

const getAll = () => {
	const config = {
		headers: {
			Authorization: token
		}
	}
	const request = axios.get(baseUrl, config)
	return request.then(response => response.data)
}

const create = async (newObject) => {
	const config = {
		headers: {
			Authorization: token
		}
	}
	const response = await axios.post(baseUrl, newObject, config)
	return response.data
}

const remove = async (id) => {
	const config = {
		headers: {
			Authorization: token
		}
	}
	// console.log('remove', id)
	const response = await axios.delete(`${baseUrl}/${id}`, config)
	return response.data
}

export default { getAll, setToken, create, remove }
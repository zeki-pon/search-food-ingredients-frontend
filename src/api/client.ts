import axios from 'axios'

const createClient = function(): any {
    return axios.create({ baseURL: 'http://localhost:8080', withCredentials: true })
}

export const client = createClient()
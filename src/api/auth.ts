import { client } from "./client"

const login = function (email: string, password: string): any {
        let params = new URLSearchParams()
        params.append('email', email)
        params.append('pass', password)
        return client.post('/login', params)
    }

export { login }

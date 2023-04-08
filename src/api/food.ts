import { client } from "./client"

const getFoods = function (): object {
        return client.get('/food/list')
    }

export { getFoods }
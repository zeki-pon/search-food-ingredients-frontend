import { client } from "./client"

const getFoods = function (): object {
        return client.get('/food/list')
    }

const getFoodDetail = function (foodId: string) {
    return client.get('/food/detail/' + foodId)
}

export { getFoods, getFoodDetail }
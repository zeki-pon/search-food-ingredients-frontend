import { client } from "./client"

const getFoods = function (): object {
        return client.get('/food/list')
    }

const getFoodDetail = function (foodId: string) {
    return client.get('/food/detail/' + foodId)
}

const registerFood = function (food: object) {
    return client.post('food/register', food)
}

const updateFood = function (food: object) {
    return client.put('food/update', food)
}

const deleteFood = function (foodId: string) {
    return client.delete('/food/delete/' + foodId)
}

export { getFoods, getFoodDetail, registerFood, updateFood, deleteFood }
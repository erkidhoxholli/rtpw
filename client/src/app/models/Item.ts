/*
* Item represents an entity part of the recommender system. It can
* be anything such as a Recipe, Movie, Car, Product, Shipping method etc
*
* */

type ItemData = {
    name: string
    description: string
    price: number
}

export default interface Item {
    id: number
    score: number // 0-1, the higher the better
    data: ItemData
}

export type Items = Item[]
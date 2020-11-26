import Recipe from "./Recipe";

export default interface User {
    id: number
    name: string
    email: string
    recipes: Recipe[]
}
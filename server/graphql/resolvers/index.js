const authResolvers = require('./auth')
const userResolvers = require('./user')
const recipeResolvers = require('./recipe')
const { resolvers }  = require('graphql-scalars');

const { EmailAddress } = resolvers
const index = {
    EmailAddress,
    Query: {
        allUsers: userResolvers.allUsers,
        user: userResolvers.user,
        allRecipes: recipeResolvers.allRecipes,
        recipe: recipeResolvers.recipe
    },
    Mutation: {
        createUser: userResolvers.createUser,
        createRecipe: recipeResolvers.createRecipe,
        login: authResolvers.login,
        signup: authResolvers.signup,
    },
    User: {
        async recipes(user) {
            return user.getRecipes()
        }
    },
    Recipe: {
        async user(recipe) {
            return recipe.getUser()
        }
    },
}

module.exports = index
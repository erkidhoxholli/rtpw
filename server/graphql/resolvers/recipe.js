const getPaginatedModelData = require('./paginate').getPaginatedModelData

async function createRecipe(parent, {userId, title, ingredients, direction}, {models}) {
    return models.Recipe.create({userId, title, ingredients, direction})
}

async function allRecipes(parent, {page, pageSize}, {models}) {
    return getPaginatedModelData(models.Recipe, page, pageSize)
}

async function recipe(parent, {id}, {models}) {
    return models.Recipe.findById(id)
}

module.exports = {
    allRecipes,
    createRecipe,
    recipe,
}

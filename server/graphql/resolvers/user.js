const getPaginatedModelData = require('./paginate').getPaginatedModelData

async function createUser(parent, {name, email, password}, {models}) {
    return models.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10)
    })
}

async function user(parent, {id}, {models}) {
    return models.User.findById(id)
}

async function allUsers(parent, {page, pageSize}, {models}) {
    return getPaginatedModelData(models.User, page, pageSize)
}

module.exports = {
    allUsers,
    createUser,
    user,
}

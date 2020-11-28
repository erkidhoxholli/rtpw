const errors = require('./errors')
const jwt = require('jsonwebtoken')
const {USER} = require('../directives/roles')
const bcrypt = require('bcryptjs')

async function login(parent, {email, password}, {models}) {
    const user = await models.User.findOne({where: {email}})
    if (!user) {
        throw new Error(errors.ERROR_NO_USER_FOUND)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
        throw new Error(errors.ERROR_INVALID_PASSWORD)
    }

    const token = jwt.sign({
        userId: user.id,
        role: user.role,
    }, process.env.APP_SECRET)

    return {
        token,
        user,
    }
}

async function signup(parent, {email, password, name}, {models}) {
    // check if users already exists
    const user = await models.User.findOne({where: {email}})
    if (user) {
        throw new Error(errors.ERROR_USER_ALREADY_EXISTS)
    }

    const newUser = await models.User.create({
        password,
        email,
        role: USER, // default role is user
        name
    })
    const token = jwt.sign({userId: newUser.id}, process.env.APP_SECRET)
    return {
        token,
        user: newUser,
    }
}

async function viewer(parent, _args, {models, authScope}) {
    // TODO: use uuid instead
    if (!authScope) {
        return {
            id: null,
            role: null
        }
    }
    const {id, role} = await models.User.findOne({where: {id: authScope.userId}})
    return {
        id,
        role
    }
}

module.exports = {
    login,
    signup,
    viewer
}

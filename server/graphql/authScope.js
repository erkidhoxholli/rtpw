const jwt = require('jsonwebtoken')

function authScope({req}) {
    const authorizationHeader = req.get('Authorization')
    if (!authorizationHeader) return null
    const [_, token] = authorizationHeader.split(" ")
    const decodedUser = jwt.verify(token, process.env.APP_SECRET);
    return decodedUser
}

module.exports = authScope
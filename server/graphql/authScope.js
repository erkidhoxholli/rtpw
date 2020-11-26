const jwt = require('jsonwebtoken')

function authScope({req}) {
    const token = req.get('Authorization')
    if (!token) return null
    const decodedUser = jwt.verify(token, process.env.APP_SECRET);
    return decodedUser
}

module.exports = authScope
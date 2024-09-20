const jwt = require('jsonwebtoken')

/// Summary: authentication check (JWT)
module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        req.user = jwt.verify(token, process.env.secretKey)
        next()
    } catch (e) {
        return res.status(401).json({message: 'Auth error'})
    }
}
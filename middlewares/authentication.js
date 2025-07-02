const jwt = require("jsonwebtoken")

async function authentication(req, res, next) {
    try {
        const accessToken = req.headers.authorization?.split(" ")[1]
        if (!accessToken) {
            throw {
                status: 401,
                message: "Unauthorized"
            }
        }

        
    } catch (error) {
        next(error)
    }
}

module.exports = authentication
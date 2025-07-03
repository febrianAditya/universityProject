const jwt = require("jsonwebtoken")
const { User } = require("../models"); 

async function authentication(req, res, next) {
    try {
        const accessToken = req.headers.authorization?.split(" ")[1]
        // console.log(accessToken, "=> apa sih 11")

        const decode = jwt.verify(accessToken, "rahasia banget")
        // console.log(decode, "==> apasih");
        
        const dataUser = await User.findByPk(decode?.id, {
            raw: true
        })
        // console.log(dataUser, "==> FINAL");

        if (!dataUser || !accessToken) {
            throw {
                status: 401,
                message: "Unauthorized"
            }
        }

        const dataToken = {
            id: dataUser.id,
            username: dataUser.username,
            role: dataUser.role
        }

        req.user = dataToken
        next()
        // console.log(decode, "==> INI HASIL DECODE");
        
    } catch (error) {
        next(error)
    }
}

module.exports = authentication
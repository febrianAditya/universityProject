const { raw } = require("express")
const { User } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const saltRound = 10


class UserControllers {

    static async registerUser(req, res) {
        try {
            const {username, password, role} = req.body

            const salt = bcrypt.genSaltSync(saltRound)
            const hash = bcrypt.hashSync(password, salt)
            // console.log(hash, "===> INI CEK");
            

            let inputUser = {
                username,
                password: hash,
                role
            }

            // console.log(inputUser, "==> FINAL");
            
            const result = await User.create(inputUser)
            // // console.log(result, "==> APA SIH NIH");
        
            res.status(201).json({
                "message": "Success Register",
                data: inputUser
            })

        } catch (error) {
            console.log(error, "==> INI ERROR");
            
        }
    }

    static async loginUser(req, res, next) {
        try {
            const { username, password } = req.body
            let inputUser = {
                username,
                password
            }

            const data = await User.findOne({
                where: {
                    username
                },
                raw: true
            })

            if (!data) {
                throw {
                    status: 404,
                    message: "Data Not Foun" 
                }
            }
            
            const resultCekPassword = bcrypt.compareSync(password, data.password)
            if (!resultCekPassword) {
                throw {
                    status: 400,
                    message: "Invalid username or password"
                }
            }

            let toDecode = {
                id: data.id,
                role: data.role,
                username: data.username
            }

            let secret = "rahasia banget"

            const token = jwt.sign(toDecode, secret)
            
            res.status(200).json({
                token
            })
            
        } catch (error) {
            next(error)
        }
    }

}


module.exports = UserControllers
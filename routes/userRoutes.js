const express = require("express")
const route = express.Router()
const UserControllers = require("../controllers/userControllers")
// kita akan buat services login dan register

route.post("/register", UserControllers.registerUser)
route.post("/login", UserControllers.loginUser)
module.exports = route
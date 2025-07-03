const express = require("express")
const route = express.Router()
const UserControllers = require("../controllers/userControllers")
// kita akan buat services login dan register
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

route.post("/register", UserControllers.registerUser)
route.post("/login", UserControllers.loginUser)

route.get("/cekdulu", authentication, (req, res) => {
    res.status(200).json("aku masuk kamar")
})

route.get("/users", authentication, authorization, (req, res) =>{
    res.send("aku bisa lihat semua akun")
})



module.exports = route
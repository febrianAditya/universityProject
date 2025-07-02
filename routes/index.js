const express = require("express")
const route = express.Router()

const studentRoutes = require('./studentRoutes');
const dosenRoutes = require("./dosenRoutes")
const userRoutes = require("./userRoutes")

route.use("/", userRoutes)
route.use("/students", studentRoutes)
route.use("/dosen", dosenRoutes)

module.exports = route
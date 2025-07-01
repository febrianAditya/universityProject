const express = require("express")
const route = express.Router()

const studentRoutes = require('./studentRoutes');
const dosenRoutes = require("./dosenRoutes")

route.use("/students", studentRoutes)
route.use("/dosen", dosenRoutes)

module.exports = route
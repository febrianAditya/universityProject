const express = require("express")
const route = express.Router()

const studentRoutes = require('./studentRoutes');
const dosenRoutes = require("./dosenRoutes")
const userRoutes = require("./userRoutes")

const KrsControllers = require("../controllers/krsControllers")

route.use("/", userRoutes)
route.use("/students", studentRoutes)
route.use("/dosen", dosenRoutes)
route.get("/krs/add", KrsControllers.addDataWithTransaction)

module.exports = route
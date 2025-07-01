const route = require("express").Router()
const fs = require("node:fs/promises")
const StudentControllers = require("../controllers/studentControllers")

route.get("/cobacobi", StudentControllers.cobaController)

route.get("/", StudentControllers.getAllDataStudents)

route.post("/", StudentControllers.addDataStudents)

route.patch("/:id", StudentControllers.editDataStudents)

route.delete("/:id", StudentControllers.deleteDataStudents)  

module.exports = route
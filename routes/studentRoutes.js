const route = require("express").Router()
const fs = require("node:fs/promises")
const StudentControllers = require("../controllers/studentControllers")

route.get("/cobacobi", StudentControllers.cobaController)

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get All Data Students
 *     description: Get all data students.
 *     tags:
 *       - Students
 *     responses:
 *       200:
 *         description: Get all data students
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       first_name:
 *                         type: string
 *                         example: amandong
 *                       last_name:
 *                         type: string
 *                         example: stranio
 *                       email:
 *                         type: string
 *                         example: stranio@mail.com
 *                       gender:
 *                         type: string
 *                         example: female
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal Server Error
 */
route.get("/", StudentControllers.getAllDataStudents)

route.post("/", StudentControllers.addDataStudents)

route.patch("/:id", StudentControllers.editDataStudents)

route.delete("/:id", StudentControllers.deleteDataStudents)  

module.exports = route
const fs = require("node:fs/promises")

class StudentControllers {

    static cobaController(req, res) {
        res.send("aku terpanggil di folder controllers")
    }

    static async getAllDataStudents(req, res) {
        try {
            const resultData = await fs.readFile("./dataStudent.json", "utf-8")
            let manipulateData = JSON.parse(resultData)

            res.status(200).json({
                message: "Success",
                data: manipulateData
            })
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    static async addDataStudents(req, res) {
        try {
            const { first_name, last_name, gender, email } = req.body
            let currentData = await fs.readFile("./dataStudent.json", "utf-8")
            let manipulateData = JSON.parse(currentData)
    
            let studentId = manipulateData[manipulateData.length -1].id + 1
    
            let inputUser = {
                id: studentId,
                first_name,
                last_name,
                gender,
                email
            }
    
            manipulateData.push(inputUser)
    
            let manipulateToString = JSON.stringify(manipulateData)
    
            await fs.writeFile("./dataStudent.json", manipulateToString)
    
            res.status(201).json({
                message: "Success add"
            })
    
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error"
            })
        }
    }

    static async editDataStudents(req, res) {
        try {
            let { name } = req.body
    
            let idFromPostman = +req.params.id
            let currentData = await fs.readFile("./dataStudent.json", "utf-8")
            let manipulateData = JSON.parse(currentData)
    
            let tampDataUser = manipulateData.findIndex((el) => {
                return el.id === idFromPostman
            })
    
            manipulateData[tampDataUser].first_name = name
    
            await fs.writeFile("./dataStudent.json", JSON.stringify(manipulateData))
    
            res.status(200).json({
                message: "Success Edited"
            })
            
        } catch (error) {
            res.status(500).json({
                message: "INTERNAL SERVER ERROR"
            })
        }
    }

    static async deleteDataStudents(req, res, next) {
        try {
            let currentData = await fs.readFile("./dataStudent.json", "utf-8")
            let manipulateData = JSON.parse(currentData)

            let idParams = +req.params.id

            let cekData = manipulateData.find(el => {
                return el.id === idParams
            })

            // console.log(cekData, "==> CEK DATA");
            if (!cekData) {
                // res.status(404).json({ // codingan febrian
                //     message: "not found"
                // })

                throw { status: 404, message: "not found"}
            }
            

            // let result = manipulateData.filter((el) => {
            //     return el.id !== idParams
            // })

            // console.log(result, "==> FINAL");
            // res.status(200).json({
            //     message: "deleted successed"
            // })

        } catch (error) {
            // console.log(error, "==> apa nich");
            next(error)
            // res.status(500).json({
            //     message: "INTERNAL SERVER ERROR"
            // })
        }
    }
}

module.exports = StudentControllers
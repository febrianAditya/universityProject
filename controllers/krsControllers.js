// const { sequelize, Student, MataKuliah, Krs } = require('./models');
const { sequelize, Student, Krs, Matkul } = require('../models');

class KrsControllers {

    static async addDataWithTransaction (req, res) {
        const t = await sequelize.transaction() 

        try {            
            const student = await Student.findByPk(3, { raw: true, transaction: t});
            if (!student) {
                res.status(404).json({
                    "message": "data not found"
                })
            }
            
            const matKulList = await Matkul.findAll({ raw: true}) 

            const krsEntries = matKulList.map((matkulId) => ({
                idStudent: 3,
                // kalau mau buat error + 1 aja id nya
                idMatkul: matkulId.id + 1
            }));

            await Krs.bulkCreate(krsEntries, { transaction: t });            
            await t.commit();

            res.status(201).json({
                message: "Success"
            })
            
        } catch (error) {
            await t.rollback();
            console.log(error.message, "==> APA");
            res.status(500).json("Error nih")
        }
    }

}

module.exports = KrsControllers
const route = require("express").Router()

route.get("/", (req, res) => {
    res.send("dosen terpanggil")
})

module.exports = route
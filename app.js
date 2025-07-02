const express = require("express")
const app = express()
const PORT = 3000
const fs = require("node:fs/promises")
const routes = require("./routes")
const morgan = require("morgan")
const errorHandler = require("./middlewares/errorHandler")

app.use(morgan('common'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(routes)
app.use(errorHandler)



app.listen(PORT, () => {
    console.log(`I LOVE YOU ${PORT}`);
    
})
const express = require("express")
const app = express()
const PORT = 3000
const fs = require("node:fs/promises")
const routes = require("./routes")

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(routes)



app.listen(PORT, () => {
    console.log(`I LOVE YOU ${PORT}`);
    
})
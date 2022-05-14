const express = require('express')
const app = express()
const PORT = 3009;

app.listen(PORT, (req,res,next) => {
    console.log(`Hola desde ${PORT}`)
})
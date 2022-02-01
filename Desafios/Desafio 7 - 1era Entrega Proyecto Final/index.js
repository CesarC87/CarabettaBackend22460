const express = require('express');
const app = express();
let path = require("path");
require('dotenv').config();
const PORT = process.env.PORT;


//middlewares
app.use("/static", express.static(path.join(__dirname, "public", "uploads")));
app.use("files", express.static("files"));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(PORT, (req,res) => {
    console.log(`Escuchando desde ${PORT}`)
})

const productosRouter = require('./routes/api/productos')
app.use("/api/productos", productosRouter);
const carritoRouter = require('./routes/api/carrito')
app.use("/api/carrito", carritoRouter);

const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('./src/config')
const PORT = config.port; 
const path = require("path");


// Middlewares
app.use(cors(config.cors))
// Settings
app.use(express.static(path.join(__dirname, "public")));
app.use("/style", express.static(__dirname + "public/style"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, () => console.log(`SERVER ON ${PORT}`));

// Routers
const carritoRouter = require("./src/routes/api/carrito");
app.use("/api/carrito", carritoRouter);
const productosRouter = require("./src/routes/api/productos");
app.use("/api/productos", productosRouter);
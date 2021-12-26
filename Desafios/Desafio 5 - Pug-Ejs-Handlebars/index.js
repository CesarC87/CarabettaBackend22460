let express = require("express");
let path = require("path");
let { Router } = express;
let router = new Router();
require("dotenv").config();
const PORT = process.env.PORT;
const {engine} = require("express-handlebars")
let app = express();
//Engines
app.engine('handlebars', engine({ extname: '.hbs', defaultLayout: "main"}))

// -------- Usando Hanldebars -----------
// app.set("view engine", 'handlebars');
// app.set("views", "./views");

// -------- Usando Pug -----------
// app.set("view engine", 'pug');
// app.set("views", "./views");

// -------- Usando EJS -----------
app.set("view engine", 'ejs');
app.set("views", "./views");

//middlewares
app.use(express.static('public'))
app.use("/css", express.static(__dirname + 'public/css'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Escuchando en puerto: ${PORT}`);
});

// Router
const apiRouter = require("./routes/api/productos");
app.use("/api", apiRouter);





// app.use("/static", express.static(path.join(__dirname, "public", "uploads", "views", "files")));
// app.use("files", express.static("files"));
// app.use(express.static(path.join(__dirname, 'files')));
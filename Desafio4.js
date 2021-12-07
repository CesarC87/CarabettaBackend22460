let express = require("express");
let path = require("path");
let app = express();
let { Router } = express;
let router = new Router();
const PORT = 3000;



//middlewares
app.use("/static", express.static(path.join(__dirname, "public", "uploads")));
app.use("files", express.static("files"));
// app.use(express.urlencoded({extended: true}))
// app.use(express.json)
  
app.listen(PORT, () => {
  console.log(`Escuchando en puerto: ${PORT}`);
});

const apiRouter = require('./routes/api')
app.use("/api", apiRouter);




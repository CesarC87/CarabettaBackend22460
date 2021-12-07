let express = require("express");
let multer = require('multer')
let path = require("path");
let app = express();
let { Router } = express;
let router = new Router();
const PORT = 3000;

class Productos {
  constructor(archivo) {
    this.archivo = archivo;
    this.id = 0;
    this.productosBase = [
      {
        title: "Ferrari 488",
        price: 300000,
        thumbnail:
          "https://www.diariomotor.com/imagenes/picscache/1440x655c/Ferrari_488_GTB_2015_DM_2_ok_1440x655c.jpg",
        id: 1,
      },
      {
        title: "Lamborghini Asterion",
        price: 279000,
        thumbnail:
          "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-03.jpg",
        id: 2,
      },
      {
        title: "Mclaren",
        price: 3490000,
        thumbnail:
          "https://www.actualidadmotor.com/wp-content/uploads/2018/01/mclaren-mso-x-frontal-3-4.jpg",
        id: 3,
      },
    ];
  }
  getAll() {
    try {
      return this.productosBase;
    } catch (error) {
      console.log(error);
    }
  }
  getById(id) {
    try {
      this.id = id;
      let getByIdProducts = this.productosBase.filter((x) => x.id == id);
      let error = "Producto no encontrado";
      if (getByIdProducts.length == 0) {
        return error;
      } else {
        return getByIdProducts;
      }
    } catch (error) {
      console.log("Nada por aqui");
    }
  }
  addProduct(inputValue) {
    try {
      this.inputValue = inputValue;
    } catch {
      console.log(error);
    }
  }
}

const Prod = new Productos();

//middlewares
app.use("/static", express.static(path.join(__dirname, "public", "uploads")));
app.use("files", express.static("files"));
// app.use(express.urlencoded({extended: true}))
// app.use(express.json)

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req,res,cb) => {      
        cb(null, `-${file.originalname}`)
    }
  });
let uploadMiddleware = multer({ storage });
  
app.listen(PORT, () => {
  console.log(`Escuchando en puerto: ${PORT}`);
});

app.get("/api", (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/api/productos", (req, res, next) => {
  res.send(Prod.getAll());
});
app.get("/api/productos/:id", (req, res, next) => {
  let id = req.params.id;
  res.send(Prod.getById(id));
});
app.post(
  "/api/productos",
  uploadMiddleware.single("subirProducto"),
  (req, res, next) => {
    const file = req.file;
    console.log("Dentro del post", file)
    if (!file) {
      new Error("Por favor, agregue un producto");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
    let inputValue = document.querySelector("#agregarProducto").value;
    res.send(Prod.addProduct(inputValue));
  }
);
router.put("/api/productos/:id", (req, res, next) => {
  res.send(Prod.getAll());
});

app.use("/casa", router);




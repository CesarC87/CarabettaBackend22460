const express = require("express");
const router = express.Router();
let multer = require('multer')
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
    },
    filename: (req,res,cb) => {      
        cb(null, `-${file.originalname}`)
    }
  });
let uploadMiddleware = multer({ storage });

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

router.get("/", (req, res, next) => {
  res.sendFile("C:/Users/carab/Desktop/Stuff/CoderHouse - BackEnd 22460/carabetta-backend22460/public/index.html");
});
router.get("/productos", (req, res, next) => {
  res.send(Prod.getAll());
});
router.get("/productos/:id", (req, res, next) => {
  let id = req.params.id;
  res.send(Prod.getById(id));
});
router.post(
  "/productos",
  uploadMiddleware.single("subirProducto"),
  (req, res, next) => {
    const file = req.file;
    console.log("Dentro del post", file);
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
router.put("/productos/:id", (req, res, next) => {
  res.send(Prod.getAll());
});

module.exports = router
const express = require("express");
const app = express();
const router = express.Router();
// app.use(express.urlencoded({extended: true}))

class Productos {
    constructor(archivo) {
      this.archivo = archivo;
      this.id = 3;
      const date = new Date(Date.now());
      this.productosBase = [
        {
          title: "Ferrari 488",
          price: 300000,
          thumbnail:
            "https://www.diariomotor.com/imagenes/picscache/1440x655c/Ferrari_488_GTB_2015_DM_2_ok_1440x655c.jpg",
          id: 1,
          timestamp: date,
          descripcion: "Lo mejor de Ferrari",
          codigo: 4312,
          stock: 5
        },
        {
          title: "Lamborghini Asterion",
          price: 279000,
          thumbnail:
            "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-03.jpg",
          id: 2,
          timestamp: date,
          descripcion: "Il torino giallo",
          codigo: 1432,
          stock: 11
        },
        {
          title: "Mclaren",
          price: 3490000,
          thumbnail:
            "https://www.actualidadmotor.com/wp-content/uploads/2018/01/mclaren-mso-x-frontal-3-4.jpg",
          id: 3,
          timestamp: date,
          descripcion: "De formula 1",
          codigo: 5443,
          stock: 8
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
    addProduct(a,b,c) {
      try {
        let id = this.id++
        this.a = a;
        this.b = b;
        this.c = c;
        this.productosBase.push({title: a,
                                 price: b,
                                thumbnail: c,
                                id: id})
      } catch {
        console.log(error);
      }
    }
    deleteById(id){
      try{
          this.id = id;        
          let deleteByIdProducts = this.productosBase.filter(x => x.id != id)                 
          return deleteByIdProducts
      }catch(error){
          console.log(error)
      }
  }
  }
  
  const Prod = new Productos();

  router.get("/", (req, res, next) => {
    res.send(Prod.getAll());
  });
  router.get("/:id", (req, res, next) => {
    let id = req.params.id;
    res.send(Prod.getById(id));
  });
  router.post("/", (req,res,next) => {
    console.log(req.body.title)
    res.send(req.body.title)
    Prod.addProduct(req.body.title, req.body.price, req.body.thumbnail)
  })
  router.put("/:id", (req, res, next) => {
    let id = req.params.id;
    let body = req.body;
    let specificProduct = Prod.getById(id);  
    specificProduct[0] = {id:id, ...body}
    res.send(specificProduct[0])  
  });
  
  router.delete("/:id", (req, res, next) => {
    let id = req.params.id;  
    let deleteSpecificProduct = Prod.deleteById(id);    
    res.send(deleteSpecificProduct)  
  });

module.exports = router
module.exports = Productos
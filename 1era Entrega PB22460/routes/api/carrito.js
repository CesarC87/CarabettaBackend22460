const express = require("express");
const app = express();
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({extended: true}))

class Carrito {
  constructor(id){      
      this.id = id;
      const date = new Date(Date.now());
      this.productosCarrito = [
        {
          title: "Prueba",
          price: 200000,
          thumbnail:
            "Probando",
          id: 3,
          timestamp: date,
          descripcion: "PruebaCarrito",
          codigo: 4312,
          stock: 5
        }
      ];
      }
      showProducts(){
        try {
          return this.productosCarrito;
        } catch (error) {
          console.log(error);
        }
      }
      getId(){
        try {
          return this.id;
        } catch (error) {
          console.log(error);
        }
      }
      addToCart(products){
        try {
          let cart = this.productosCarrito;
          cart.push(products)
        } catch (error) {
          console.log(error);
        }
      }
}

let id1 = uuidv4()
const Compra = new Carrito(id1);
let carritosArray = [];

// Prueba
router.get("/:id/productos", (req, res, next) => {
  let id = req.params.id;
  let searchInCart = carritosArray.filter(x => x.id == id)
  console.log(searchInCart)
  res.send(searchInCart[0].productosCarrito)
});
// Prueba

router.post("/", (req, res, next) => {  
  const Compra = new Carrito(id1);
  carritosArray.push(Compra)    
  res.send(Compra.id)
});

router.post("/:id/productos", (req, res, next) => {
    let id = req.params.id    
    let searchInCart = carritosArray.filter(x => x.id == id)
    let toBeAdded = "Nuevo producto"
    searchInCart[0].productosCarrito.push(toBeAdded)
    res.send(searchInCart[0].productosCarrito)
  });
router.delete("/:id", (req, res, next) => {
    let id = req.params.id    
    let deleteCart = carritosArray.filter(x => x.id != id) 
    res.send(deleteCart)
  });
router.delete("/:id/productos/:id_prod", (req, res, next) => {
    let id = req.params.id    
    let id_prod = req.params.id_prod
    let searchInCart = carritosArray.filter(x => x.id == id)
    let deleteProduct = searchInCart[0].productosCarrito.filter(y => y.id != id_prod)    
    res.send(deleteProduct)
  });


module.exports = router
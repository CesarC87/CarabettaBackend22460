let express = require('express');
let app = express();
let { Router } = express;
let router = new Router;
const PORT = 3000;
let path = require('path');

class Productos {
    constructor(archivo){
        this.archivo = archivo;
        this.id = 0;
        this.productosBase = [
            {
              "title": "Ferrari 488",
              "price": 300000,
              "thumbnail": "https://www.diariomotor.com/imagenes/picscache/1440x655c/Ferrari_488_GTB_2015_DM_2_ok_1440x655c.jpg",
              "id": 1
            },
            {
              "title": "Lamborghini Asterion",
              "price": 279000,
              "thumbnail": "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-03.jpg",
              "id": 2
            },
            {
              "title": "Mclaren",
              "price": 3490000,
              "thumbnail": "https://www.actualidadmotor.com/wp-content/uploads/2018/01/mclaren-mso-x-frontal-3-4.jpg",
              "id": 3
            }
           ];    
    }
    getAll(){
        try{                    
            return this.productosBase;
        }catch(error){
            console.log(error)
        }
    }
    getById(id){
        try{
            this.id = id;           
            let getByIdProducts = this.productosBase.filter(x => x.id == id)     
            let error = "Producto no encontrado" ;                   
            if (getByIdProducts.length == 0){
                return error;
            }else {
                return getByIdProducts;
            }
            
        }catch(error){
            console.log("Nada por aqui");
        }
    }
}

const Prod = new Productos;

app.listen(PORT, () => {
    console.log(`Escuchando en puerto: ${PORT}`)
})

app.get("/api", (req, res, next) => {
    res.send("Todo ok");
})
app.get("/api/productos", (req, res, next) => {
    res.send(Prod.getAll());
})
app.get("/api/productos/:id", (req, res, next) => {
    let id = req.params.id;
    res.send(Prod.getById(id));
})
app.post("/api/productos", (req, res, next) => {
    res.send(Prod.getAll());
})
router.put("/api/productos/:id", (req, res, next) => {
    res.send(Prod.getAll());
})

app.use("/casa" , router);
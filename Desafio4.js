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
    }
    getAll(){
        try{            
            let productosBase = [
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
            return productosBase;
        }catch(error){
            console.log(error)
        }
    }
    getById(id){
        try{
            this.id = id;            
            let showProducts = Productos.getAll();
            let getByIdProducts = showProducts.filter(x => x.id == id)                         
            return getByIdProducts
        }catch(error){
            console.log(error);
        }
    }
}

app.listen(PORT, () => {
    console.log(`Escuchando en puerto: ${PORT}`)
})

app.get("/api", (req, res, next) => {
    res.send("Todo ok");
})
app.get("/api/productos", (req, res, next) => {
    res.send(Productos.getAll());
})
app.get("/api/productos/:id", (req, res, next) => {
    res.send(Productos.getById(id));
})
app.post("/api/productos", (req, res, next) => {
    res.send(Productos.getAll());
})
router.put("/api/productos/:id", (req, res, next) => {
    res.send(Productos.getAll());
})

app.use("/casa" , router);
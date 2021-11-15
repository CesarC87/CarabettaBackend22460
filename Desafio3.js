class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
        this.id = 0;
    }
    async save(producto){        
        try {            
            let id = this.id++;
            arrayProductos.push({...producto, id});
            let data = JSON.stringify(arrayProductos);
            fs.writeFileSync(this.archivo , data)
            console.log(id)                    
        }catch(error){
            console.log(error);
        }
    }
    getById(id){
        try{
            this.id = id;            
            let showProducts = JSON.parse(fs.readFileSync(this.archivo, `utf-8`))
            let getByIdProducts = showProducts.filter(x => x.id == id)            
            return getByIdProducts
        }catch(error){
            console.log(error);
        }
    }
    getAll(){
        try{            
            let getAllProducts = JSON.parse(fs.readFileSync(this.archivo, `utf-8`));            
            return getAllProducts;
        }catch(error){
            console.log(error)
        }
    }
    getRandom(){
        try{
            let showProducts = JSON.parse(fs.readFileSync(this.archivo, `utf-8`))
            let id = Math.ceil(Math.random() * showProducts.length);            
            let getRandomProducts = showProducts.filter(x => x.id == id)            
            return getRandomProducts
        }catch(error){
            console.log(error)
        }
    }
    deleteById(id){
        try{
            this.id = id;            
            let showProducts2 = JSON.parse(fs.readFileSync(this.archivo, `utf-8`))
            let deleteByIdProducts = showProducts2.filter(x => x.id != id)
            deleteByIdProducts = JSON.stringify(deleteByIdProducts)     
            fs.writeFileSync(this.archivo, deleteByIdProducts)           
            return deleteByIdProducts
        }catch(error){
            console.log(error)
        }
    }
    deleteAll(){
        try{
            let arrayProductos = [];
            fs.writeFileSync(this.archivo, JSON.stringify(arrayProductos))
            return fs.readFileSync(this.archivo, `utf-8`)
        }catch(error){
            console.log(error)
        }
    }
}

let container2 = new Contenedor("./Desafio3.txt");


const express = require('express')
const fs = require('fs')
const app = express()

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
 })
 server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
 })
app.get('/productos', (req, res) => {
    res.send( console.log(container2.getAll()) )
 })
app.get('/productoRandom', (req, res) => {
    res.send( console.log(container2.getRandom()) )
 })


 
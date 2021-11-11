const { error } = require('console');
const fs = require('fs');
const { arch } = require('os');


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
    deleteById(id){
        try{
            this.id = id;            
            let showProducts2 = JSON.parse(fs.readFileSync(this.archivo, `utf-8`))
            let deleteByIdProducts = showProducts2.filter(x => x.id != id)
            deleteByIdProducts = JSON.stringify(deleteByIdProducts)     
            fs.writeFileSync(this.archivo, deleteByIdProducts)           
            return deleteByIdProducts
        }catch(error){

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
let producto1 = {    
    item: "Puma Runner"
};
let producto2 = {    
    item: "Nike Gazer"
};    
let producto3 = {    
    item: "Reebok Hey"
};  
let producto4 = {    
    item: "Adidas Maze"
};  

let arrayProductos = [];
const container = new Contenedor('./Desafio2.txt')


console.log(container.save(producto3))
console.log(container.save(producto2))
console.log(container.save(producto1))
console.log(container.save(producto4))
console.log(container.getById(2))
console.log(container.getAll())
console.log(container.deleteById(1))
console.log(container.deleteAll())

// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.
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
            let showProducts = JSON.parse(fs.readFileSync(this.archivo, `utf-8`))
            let deleteByIdProducts = showProducts.filter(x => x.id != id)       
            fs.writeFileSync(this.archivo, deleteByIdProducts )     
            return deleteByIdProducts
        }catch(error){

        }
    }
    deleteAll(){
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
const Container = new Contenedor('./Desafio2.txt')


console.log(Container.save(producto3))
// console.log(Container.save(producto2))
// console.log(Container.getById(2))
// console.log(Container.getAll())

// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.
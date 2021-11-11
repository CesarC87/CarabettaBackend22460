const fs = require('fs');
const { arch } = require('os');


class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }
    save(producto){
        this.producto = producto;
        fs.appendFileSync(`${this.archivo}` , `${JSON.stringify(this.producto)}`)        
        return this.producto.id;        
    }
    getById(id){
        this.id = id;
        this.archivo = archivo;
        let archivoObj = JSON.parse(archivo) 

        // return fs.readFileSync(`${this.archivo}` , 'utf-8')
        fs.readFileSync(`${this.archivo}`, `utf-8`)
    }
    getAll(){
        let productos = [];
        let productosObj = JSON.parse(this.archivo)
        productos.push(productosObj)
        return productos;

    }
    // deleteById(Number){

    // }
    // deleteAll(){

    // }
}
let producto1 = {
    id: 1599,
    item: "Puma Runner"};

let producto2 = {
    id: 2122,
    item: "Nike Gazer"
};


    
const Container = new Contenedor('./Desafio2.txt')

// console.log(Container.save(producto1))
// console.log(Container.getById(1599))
console.log(Container.getAll())
// save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
// getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
// getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
// deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
// deleteAll(): void - Elimina todos los objetos presentes en el archivo.
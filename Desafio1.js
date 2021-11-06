class Usuario {
    constructor(nombre, apellido, libros, mascotas){
       this.nombre = nombre;
       this.apellido = apellido; 
       this.libros = libros; 
       this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor){
        this.libros.push({nombre:nombre,autor:autor})
    }
    getBookNames() {
        let nombresLibros = []
        this.libros.forEach(libro => {
          nombresLibros.push(libro.nombre)
        });
        return nombresLibros
    }
}

const PERSONA = new Usuario("juan", "Carlos", [{nombre: 'Jurassic Park',autor: 'Stephen King'}, {nombre: 'Transformers', autor: 'Michael Bay'}],["Perro", "Gato"])

console.log(PERSONA.getFullName())
PERSONA.addMascota("Cocodrilo")
console.log(PERSONA.mascotas)
console.log(PERSONA.countMascotas())
console.log(PERSONA.addBook("Conan","Juanpe"))
console.log(PERSONA.libros)
console.log(PERSONA.getBookNames())
import React from 'react'

const Desafio1 = () => {

    class Usuario {
        constructor(nombre, apellido, libros, mascotas){
            nombre = this.nombre;
            apellido = this.apellido;
            libros = this.libros;
            mascotas = this.mascotas;
        }
        getFullName() {
            console.log(Usuario.nombre)
        }
    }
    
    const PERSONA = new Usuario("juan", "Carlos", ["Harry Potter","Jurassic Park"],["Perro", "Gato"])

    return (
        <div>
            <button onClick={PERSONA.getFullName}>Click Aqui</button>
        </div>
    )
}

export default Desafio1

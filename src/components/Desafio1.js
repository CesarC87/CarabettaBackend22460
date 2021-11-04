import React from 'react'
import "../components/Desafio1.css"

const Desafio1 = () => {

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
    }
    
    const PERSONA = new Usuario("juan", "Carlos", ["Harry Potter","Jurassic Park"],["Perro", "Gato"])
    const Display = document.querySelector(".Display")
    const FullName = PERSONA.getFullName();
    
    function Mostrar() {
        Display.innerHTML = FullName ;
    }

    return (
        <div>
            <button onClick={Mostrar}>Mostrar Nombre</button>
            <span className="Display"></span>
        </div>
    )
}

export default Desafio1

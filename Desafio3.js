let Contenedor = require('./Desafio2.js')
let container2 = new Contenedor("./Desafio3.txt");

const express = require('express')
const fs = require('fs')
const app = express()
const archivo = "./Desafio3.txt"

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
 })
 server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
 })
app.get('/productos', (req, res) => {
    res.send( container2.getAll())
 })
 app.get('/productoRandom', (req, res) => {
    let showProducts = container2.getAll();
    let id = Math.ceil(Math.random() * showProducts.length);
    res.send( container2.getById(id))
})

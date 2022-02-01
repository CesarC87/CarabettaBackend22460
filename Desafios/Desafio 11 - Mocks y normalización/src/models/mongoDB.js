const MensajesNew = require('../config/mensajesNew')
let { mongoURL } = require('../config/index')

const MongoDB = async (message) =>{
    const mongoose = require('mongoose')
    const Schema = mongoose.Schema;
    const mensajeSchema = new Schema({
        author: {
            id: {type:String, require:true, max:50},
            nombre: {type:String, require:true, max:50},
            apellido: {type:String, require:true, max:50},
            edad: {type:String, require:true, max:50},
            alias: {type:String, require:true, max:50},
            avatar: {type:String, require:true, max:50}
        },
        text: {type:String, require:true, max: 500}
    })    
    const mensajes = mongoose.model('mensajesNew', mensajeSchema)    
    const smsNew = new MensajesNew(mongoose,'mensajesNew', 'mongodb://localhost:27017/ecommerce' , mensajes);    
    await smsNew.crearTabla()
    await smsNew.addMensaje(message) 
}

module.exports = { MongoDB }




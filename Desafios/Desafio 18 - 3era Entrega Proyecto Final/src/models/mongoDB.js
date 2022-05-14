const MensajesNew = require('../config/mensajesNew')
let { mongoURL } = require('../config/index')
let modelo = require('./MensajesSchema')

const MongoDB = async (message) =>{
    const mongoose = require('mongoose')      
    const smsNew = new MensajesNew(mongoose,'mensajesNew', 'mongodb://localhost:27017/ecommerce' , modelo);    
    await smsNew.crearTabla()
    await smsNew.addMensaje(message) 
}

module.exports = { MongoDB }

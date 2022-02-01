const MensajesNew = require('../config/mensajesNew')
const URL = process.env.URL

const MongoDB = async (message) =>{
    const mongoose = require('mongoose')
    const mensajeSchema = new mongoose.Schema({
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
    const mensajesNewModel = mongoose.model('mensajesNew', mensajeSchema)
    const smsNew = new MensajesNew(mongoose,'mensajesNew', URL, mensajesNewModel);
    // await smsNew.tableExists();
    await smsNew.crearTabla()
    await smsNew.addMensaje(message) 
}

module.exports = { MongoDB }




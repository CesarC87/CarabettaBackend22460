let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const mensajeSchema = new Schema({
    author: {
        email: {type:String, require:true, max:50},
        nombre: {type:String, require:true, max:50},
        apellido: {type:String, require:true, max:50},
        edad: {type:String, require:true, max:50},
        alias: {type:String, require:true, max:50},
        avatar: {type:String, require:true, max:50}
    },
    text: {type:String, require:true, max: 500}
})    
module.exports = mongoose.model('mensajesNew', mensajeSchema);       
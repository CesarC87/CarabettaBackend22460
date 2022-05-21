let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const productsEcommSchema = new Schema({   
        title: {type:String, require:true, max:50},
        description: {type:String, require:true, max:200},        
        image: {type:String, require:true, max:200},        
        price: {type:Number, require:true, max:5000000000000},
        stock: {type:Number, require:true, max:50},   
        date: {type:Date, default:Date.now},   
})    
exports.productsEcomm = mongoose.model('productsEcomm', productsEcommSchema);       
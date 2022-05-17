let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const userSchema = new Schema({   
        name: {type:String, require:true, max:20},
        email: {type:String, require:true, max:20},        
        password: {type:String, require:true, max:20},        
        isAdmin: {type:Boolean, require:true},          
})    
exports.User = mongoose.model('User', userSchema);   
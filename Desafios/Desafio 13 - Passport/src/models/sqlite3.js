const Mensajes = require('../config/mensajes')

const SqLite3 = async(message) => {
    let sqlite = require('knex')({
      client: 'sqlite3',
      connection: {
          filename:'./DB/ecomerce.sqlite'
        },      
      useNullAsDefault: true        
    })
    const sms = new Mensajes(sqlite, 'mensajes');
    await sms.tableExists();
    await sms.addMensaje(message) 
    
  };
  
  module.exports = { SqLite3 };
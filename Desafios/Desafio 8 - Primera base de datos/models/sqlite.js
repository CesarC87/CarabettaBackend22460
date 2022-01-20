const Mensajes = require('../config/mensajes')
let { db } = require('../config/index')

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
    class Database { // Es un singleton, se instancia solo 1 vez
        static client;
        constructor(){
            if(Database.client){
                return Database.client;     // Esto sería --> db --> en index.js. db es la clase instanciada 1 vez
                                            // que tiene toda la info de conexión: Llama a mysql , quien tiene host,user,pass,etc.
            }
            Database.client = mysql;
            this.client = Database.client;
        }
      }
  };
  
  module.exports = { SqLite3 };
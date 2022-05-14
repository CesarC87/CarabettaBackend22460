const Productos = require('../config/productos')
let { db } = require('../config/index')

const OnMariaDB = async(product) => {
    let mysql = require('knex')({
      client: 'mysql',
      connection: {                   
        host: db.dbHost,
        user: db.dbUser,
        password: db.dbPass,
        database: db.dbName
      },
      pool: { min: 0, max: 7 } // Limita el nro de conexiones
    })
    const prods = new Productos(mysql, 'productos');
    await prods.tableExists();
    await prods.addProduct(product)
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
  
  module.exports = { OnMariaDB };
const Sequelize = require('sequelize');
const { db , config } = require('../');

const app = new Sequelize(
    db.database, 
    db.username, 
    db.password, 
    {
        host: db.host,
        dialect: db.dialect,
        timezone: '-3:00',
        pool:{
            max: 100,
            min: 50,
            acquire: 60000,
            idle: 20000
        }
    }
)

class Clase22460Client {
    constructor() {
        this.client = app
    }
    connect(){
        
    }
}
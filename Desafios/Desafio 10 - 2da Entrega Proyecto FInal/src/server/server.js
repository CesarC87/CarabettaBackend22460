const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path')


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.host = process.env.HOST || 'localhost';
        this.mainRoute = '/api';
        this.mensajesRoute = '/api/mensajes';
        this.productosRoute = '/api/productos';
        this.productosTestRoute = '/api/productosTest';
        this.middleware();
        this.routes();
        this.views()
    }

    middleware() {
        this.app.use(cors()); 
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, "../public")));
        this.app.use("/style", express.static(__dirname + "../public/style"));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(bodyParser.json())
    } 
    
    routes() {
        this.app.use(this.mensajesRoute, require('../routes/api/mensajes'));
        this.app.use(this.productosRoute, require('../routes/api/productos'));
        this.app.use(this.mainRoute, require('../routes/api/main'));
        this.app.use(this.productosTestRoute, require('../routes/api/productosTest'));
    }

    views(){
        this.app.set('view engine', 'ejs')
        this.app.set('views', path.join(__dirname, '../views'))
    }
    
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://${this.host}:${this.port}`);                    
        });
    }
}

module.exports = Server;
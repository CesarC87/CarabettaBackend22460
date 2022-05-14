const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const path = require('path');
const redis = require('redis');
const redisClient = redis.createClient();
const session = require('express-session');
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo');
const FileStore = require('session-file-store')(session);
const RedisStore = require('connect-redis')(session)
const AdvancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }



class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.host = process.env.HOST || 'localhost';
        this.mainRoute = '/api';
        this.mensajesRoute = '/api/mensajes';
        this.productosRoute = '/api/productos';
        this.productosTestRoute = '/api/productosTest';
        this.loginRoute = '/api/login';
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
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(session({
            // store: new RedisStore({host: 'localhost',port: 6379,ttl:300,client: redisClient}),
            // store: MongoStore.create({ mongoUrl: 'mongodb://localhost/sesiones2'}), /*--> Para local*/
            store: MongoStore.create({ 
                mongoUrl: 'mongodb+srv://CesarC87:0101Anco@cluster0.38f0x.mongodb.net/CarabettaBackend?retryWrites=true&w=majority',
                mongoOptions: AdvancedOptions}),                
            secret: 'secret',
            resave: false,
            saveUninitialized: false
        }))
    } 
    
    routes() {
        this.app.use(this.mensajesRoute, require('../routes/api/mensajes'));
        this.app.use(this.productosRoute, require('../routes/api/productos'));
        this.app.use(this.mainRoute, require('../routes/api/main'));
        this.app.use(this.productosTestRoute, require('../routes/api/productosTest'));
        this.app.use(this.loginRoute, require('../routes/api/login'));
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
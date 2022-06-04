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
// const { isValidObjectId } = require('mongoose');
const mongoose = require('mongoose');
const { Server: HttpServer } = require("http");
const { Server: SocketIO } = require("socket.io");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.host = process.env.HOST || 'localhost';
        this.passport = require('passport');
        this.LocalStrategy = require('passport-local').Strategy;
        this.httpServer = new HttpServer(this.app);
        this.io = new SocketIO(this.httpServer);
        this.mainRoute = '/api';
        this.mensajesRoute = '/api/mensajes';
        this.productosRoute = '/api/productos';
        this.productosTestRoute = '/api/productosTest';
        this.productsRoute = '/api/productsEcommerce';
        this.loginRoute = '/api/login';
        this.logoutRoute = '/api/logout';
        this.registroRoute = '/api/registro';
        this.registroFailRoute = '/api/registroFail';
        this.loginFailRoute = '/api/loginFail';
        this.usersRoute = '/api/users';
        this.usuarios = []
        this.middleware();
        this.routes();
        this.views();       
        this.mongoConnection()
        this.socketConnection()
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
            saveUninitialized: false                    /* Para habilitar Mongo Atlas */
            // secret: "secret123",                     /* Para Passport */
            // cookie:{
            // httpOnly: false,
            // secure: false,
            // maxAge: 60000
            // },
            // resave:false,
            // saveUninitialized:false
        }));
        this.app.use(this.passport.initialize());
        this.app.use(this.passport.session());
        this.passport.use('registro', new this.LocalStrategy({
            passReqToCallback: true
        },(req, username, password, done)=>{
            let { direccion } = req.body;        
            let userfind = this.usuarios.find( usuario => usuario.username == username);        
            if(userfind) return done("Already registered!");        
            let user = {
                username,
                password,
                direccion
            }
            this.usuarios.push(user);        
            console.log(this.usuarios)
            return done(null, user);        
        }));
        this.passport.use('login', new this.LocalStrategy((username, password, done)=>{
            let user = this.usuarios.find( usuario => usuario.username == username);        
            if(!user) return done(null, false);        
            if(user.password != password) return done(null, false);        
            user.contador = 0;        
            console.log('Desde passport.use(login)')
            return done(null, user);
        }));
        
        this.passport.serializeUser((user, done)=>{
            done(null, user.username);
        })        
        this.passport.deserializeUser((username, done)=>{
            let user = this.usuarios.find( usuario => usuario.username == username);
                done(null, user);
        })
        
    } 
    
    routes() {
        this.app.use(this.mensajesRoute, require('../routes/api/mensajes'));
        this.app.use(this.productosRoute, require('../routes/api/productos'));
        this.app.use(this.mainRoute, require('../routes/api/main'));
        this.app.use(this.productosTestRoute, require('../routes/api/productosTest'));
        this.app.use(this.loginRoute, require('../routes/api/login'));
        this.app.use(this.logoutRoute, require('../routes/api/logout'));
        this.app.use(this.registroRoute, require('../routes/api/registro'));
        this.app.use(this.registroFailRoute, require('../routes/api/registroFail'));
        this.app.use(this.loginFailRoute, require('../routes/api/loginFail'));
        this.app.use(this.usersRoute, require('../routes/api/users'));
        this.app.use(this.productsRoute, require('../routes/api/productsEcommerce'));
    } 

    views(){
        this.app.set('view engine', 'ejs')
        this.app.set('views', path.join(__dirname, '../views'))
    }

    mongoConnection(){
        mongoose.connect(process.env.MONGO_ATLAS)
        .then(()=>{
            console.log('Conectados a Mongo Atlas')
        })
        .catch(()=>{
            console.log('Error al conectar a Mongo Atlas')
        })
    }
    socketConnection(){
        // this.io = socket(this.server);
        // this.io.on('connection', (socket)=>{
        //     console.log('Cliente conectado');
        //     socket.on('disconnect', ()=>{
        //         console.log('Cliente desconectado');
        //     });
        // });
        const messages = [];
        this.io.on("connection", (socket) => {
            console.log("usuario conectado");
            socket.emit("messages", messages);
            // socket.emit("prod-base", productos);
            
            socket.on("new-message", (data) => {
              messages.push(data);
              this.io.sockets.emit("messages", messages);
            });
            // socket.on("prod-nuevos", (data) => {
            //   productos.push(data);
            //   io.sockets.emit("prod-base", productos);
            // });
          }); 
    }
    
    listen() {
        // this.app.listen(this.port, () => {
        //     console.log(`Server is running on http://${this.host}:${this.port}`);                    
        // });
        this.httpServer.listen(this.port, () => {
            console.log(`Server is running on http://${this.host}:${this.port}`);                    
        });
    }
    
}

module.exports = Server;
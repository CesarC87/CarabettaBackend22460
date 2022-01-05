const express = require('express');
let { Router } = express;
let router = new Router();
const { config } = require('./config')
const cors = require('cors');
const db_obj = require('./config/db')
const PORT = config.port; 
const db = db_obj.client;
let path = require("path");
const { Server: HttpServer } = require("http");
const { Server: SocketIO } = require("socket.io");
const app = express();
const httpServer = new HttpServer(app);
const io = new SocketIO(httpServer);

 
// Middlewares
app.use(cors(config.cors))
// Settings
app.use(express.static(path.join(__dirname, "public")));
app.use("/style", express.static(__dirname + "public/style"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

httpServer.listen(PORT, () => console.log(`SERVER ON ${PORT}`));


// (async() => {
//     try {
//         // Crear database
//         await db.schema.createTable('productos' , table => {
//             table.increments('id').primary(),
//             table.string('title'),            
//             table.float('price'),
//             table.string('thumbnail')
//         })
//     } catch (error) {
        
//     }
// });

// (async() => {
//     try {
//         // Crear data dentro de db "desafio8"
//         let data = [
//             {
//                 id: 4,
//                 title: "Aston Martin",
//                 price: 159000,
//                 thumbnail: "https://amsc-prod-cd.azureedge.net/-/media/aston-martin/images/homepage/db11-in-arden-green/homepage-preowned/homepage-preowned-db11.jpg?mw=1920&rev=73a01005b4324c2bbcc372c4bee780bd&hash=30318BF9524BC29633FB3BE45E43B4B9"
//             }
//         ];
//         let response = await db.from('productos').insert(data);
//         console.log(response);        
//     } catch (error) {
//         console.log(error)
//     }
// });



const messages = [];
const productos = [];

io.on("connection", (socket) => {
  console.log("usuario conectado");
  socket.emit("messages", messages);
  socket.emit("prod-base", productos);
  
  socket.on("new-message", (data) => {
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
  socket.on("prod-nuevos", (data) => {
    productos.push(data);
    io.sockets.emit("prod-base", productos);
  });
});

// Router
const apiRouter = require("./routes/api/chat");
app.use("/api/chat", apiRouter);
let express = require("express");
let path = require("path");
let { Router } = express;
let router = new Router();
require("dotenv").config();
const PORT = process.env.PORT;
const { Server: HttpServer } = require("http");
const { Server: SocketIO } = require("socket.io");
let app = express();
const httpServer = new HttpServer(app);
const io = new SocketIO(httpServer);

//middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use("/style", express.static(__dirname + "public/style"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

httpServer.listen(PORT, () => console.log(`SERVER ON ${PORT}`));

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

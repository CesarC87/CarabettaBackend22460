let express = require("express");
let app = express();
let { Router } = express;
let router = new Router();
const PORT = 3000;
let path = require("path");
let multer = require('multer')

app.listen(PORT, () => {
    console.log(`Escuchando en puerto: ${PORT}`);
  });

//  -------- Usando Pug -----------
//   app.set('views' , './views');
//   app.set('view engine', 'pug');

//   app.get("/productos", (req,res,next) => {
//     res.render("Desafio5.pug" , { mensaje: "Usando Pug"})
//   })

 //-------- Usando EJS -----------
  app.set('views' ,__dirname + '/views');
  app.set('view engine', 'ejs');

  app.get("/", (req,res) => {
      let productos = [
          {
              producto: "Puma gazer",
              precio: 2900
          },
          {
            producto: "Nike phantom",
            precio: 2200
        },
        {
            producto: "Reebok 1",
            precio: 3500
        }
      ]
    res.render("Pages/productos" , {
        productos: productos
    })
  })

  
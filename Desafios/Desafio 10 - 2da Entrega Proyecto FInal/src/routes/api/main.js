const { Router } = require('express');
const router = Router();
// app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
    res.sendFile("C:/Users/carab/Desktop/Stuff/CoderHouse - BackEnd 22460/carabetta-backend22460/Desafios/Desafio 10 - 2da Entrega Proyecto FInal/src/public/index.html")
   });
 
   module.exports = router;
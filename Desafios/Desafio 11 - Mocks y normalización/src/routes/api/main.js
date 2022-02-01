const { Router } = require('express');
const router = Router();
// app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
    res.sendFile("C:/Users/carab/Desktop/Stuff/CoderHouse - BackEnd 22460/carabetta-backend22460/Desafios/Desafio 11 - Mocks y normalización/src/public/index.html")
   });
 
   module.exports = router;
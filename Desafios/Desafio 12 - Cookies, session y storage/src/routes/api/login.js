const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
    res.sendFile("C:/Users/carab/Desktop/Stuff/CoderHouse - BackEnd 22460/carabetta-backend22460/Desafios/Desafio 12 - Cookies, session y storage/src/public/login/login.html")
   });

module.exports = router;
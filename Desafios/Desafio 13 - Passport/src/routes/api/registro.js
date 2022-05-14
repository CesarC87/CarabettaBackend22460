const { Router } = require('express');
const { isNotAuth, isAuth } = require("../../controllers/users");
const passport = require('passport')
const router = Router();

router.get("/", isNotAuth, (req, res, next) => {
    console.log('Autorizado--> no esta registrado')
    res.sendFile("C:/Users/carab/Desktop/Stuff/CoderHouse - BackEnd 22460/carabetta-backend22460/Desafios/Desafio 13 - Passport/src/public/registro/registro.html")
   });

router.post("/", passport.authenticate('registro', { failureRedirect: '/registroFail', successRedirect: '/'}))


module.exports = router;

const { Router } = require('express');
const { isNotAuth, isAuth } = require("../../controllers/users");
const passport = require('passport')
const router = Router();

router.get("/", isAuth, (req, res, next) => {
    res.sendFile("C:/Users/carab/Desktop/Stuff/CoderHouse - BackEnd 22460/carabetta-backend22460/Desafios/Desafio 13 - Passport/src/public/login/login.html")
   });

router.post("/", passport.authenticate('login', { failureRedirect: '/loginFail', successRedirect: '/'}))
module.exports = router;
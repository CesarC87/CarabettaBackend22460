const { Router } = require('express');
const { isNotAuth, isAuth } = require("../../controllers/users");
const passport = require('passport')
const router = Router();
const path = require('path')

router.get("/", isNotAuth, (req, res, next) => {
    console.log('Autorizado--> no esta registrado')
    res.sendFile(path.join(__dirname, '../../public/registro/registro.html'))
   });

router.post("/", passport.authenticate('registro', { failureRedirect: '/registroFail', successRedirect: '/'}))


module.exports = router;

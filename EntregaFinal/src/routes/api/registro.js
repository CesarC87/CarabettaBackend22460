const { Router } = require('express');
const { isNotAuth, isAuth, postUser } = require("../../controllers/users");
const passport = require('passport')
const router = Router();
const path = require('path')

// router.get("/", isNotAuth, (req, res, next) => {
//     console.log('Autorizado--> no esta registrado')
//     res.sendFile(path.join(__dirname, '../../public/registro/registro.html'))
//    });

// router.post("/", passport.authenticate('registro', { failureRedirect: '/registroFail', successRedirect: '/'}))
router.get("/", (req, res, next) => {    
    res.sendFile(path.join(__dirname, '../../public/registro/registro.html'))
   });
router.post("/", postUser)


module.exports = router;

const { Router } = require('express');
const { isNotAuth, isAuth } = require("../../controllers/users");
const passport = require('passport')
const router = Router();
const jwt = require('jsonwebtoken');
const { JWTlogin } = require('../../controllers/login');
const path = require('path');

// router.get("/", isAuth, (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../../public/login/login.html'));
//    });
// router.post("/", passport.authenticate('login', { failureRedirect: '/loginFail', successRedirect: '/'}))

router.get("/", (req, res, next) => {    
    res.sendFile(path.join(__dirname, '../../public/login/login.html'));
   });

router.post("/", JWTlogin)


module.exports = router;
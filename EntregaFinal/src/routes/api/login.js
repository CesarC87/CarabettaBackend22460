const { Router } = require('express');
const { isNotAuth, isAuth } = require("../../controllers/users");
const passport = require('passport')
const router = Router();
const jwt = require('jsonwebtoken');
const { JWTlogin } = require('../../controllers/login');

// router.get("/", isAuth, (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../../public/login/login.html'));
//    });

// router.post("/", passport.authenticate('login', { failureRedirect: '/loginFail', successRedirect: '/'}))

router.post("/", JWTlogin)


module.exports = router;
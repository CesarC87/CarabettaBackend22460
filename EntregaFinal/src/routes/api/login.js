const { Router } = require('express');
const { isNotAuth, isAuth } = require("../../controllers/users");
const passport = require('passport')
const router = Router();

router.get("/", isAuth, (req, res, next) => {
    res.sendFile(path.join(__dirname, '../../public/login/login.html'));
   });

router.post("/", passport.authenticate('login', { failureRedirect: '/loginFail', successRedirect: '/'}))
module.exports = router;
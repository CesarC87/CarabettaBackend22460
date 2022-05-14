const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
    let usuario = req.username;    
    res.render('FailLogin', {usuario:usuario})
   });


module.exports = router;
const { Router } = require('express');
const router = Router();

router.get("/", (req, res, next) => {
    let usuario = req.user.username;    
    res.render('FailRegistro', {usuario:usuario})
   });


module.exports = router;
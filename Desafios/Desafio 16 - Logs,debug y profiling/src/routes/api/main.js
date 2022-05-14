const { Router } = require('express');
const router = Router();
// app.use(express.urlencoded({ extended: true }));

router.post("/", (req, res, next) => {
    
    let nombre = req.body.username;
    let contraseña = req.body.password;    

    req.session.user = nombre;
    req.session.pass = contraseña;
     
    return res.json({
        'status' : 200,
        'message' : 'Todo bien'        
      })    
});   

router.get("/", (req, res, next) => {
    let usuario = req.user.username;    
    console.log(usuario) 
    res.render('home', {usuario:usuario})
}) 

module.exports = router; 
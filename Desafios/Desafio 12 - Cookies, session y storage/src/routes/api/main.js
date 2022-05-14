const { Router } = require('express');
const router = Router();
// app.use(express.urlencoded({ extended: true }));

router.post("/", (req, res, next) => {
    
    let nombre = req.body.nombre;
    let contraseña = req.body.contraseña;    

    req.session.user = nombre;
    req.session.pass = contraseña;
     
    return res.json({
        'status' : 200,
        'message' : 'Todo bien'        
      })    
});   

router.get("/", (req, res, next) => {
    let usuario = req.session.user;
    // res.sendFile("C:/Users/carab/Desktop/Stuff/CoderHouse - BackEnd 22460/carabetta-backend22460/Desafios/Desafio 12 - Cookies, session y storage/src/public/index.html")
    res.render('home', {usuario:usuario})
})

module.exports = router;
const { Router } = require('express');
const router = Router();
const { User } = require('../../models/users');
const jwt = require('jsonwebtoken');
// app.use(express.urlencoded({ extended: true }));

// router.post("/", (req, res, next) => {    
//     let nombre = req.body.username;
//     let contraseña = req.body.password;          <---- Esto es para session
//     req.session.user = nombre;
//     req.session.pass = contraseña;    
//     return res.json({
//         'status' : 200,
//         'message' : 'Todo bien'        
//       })    
// });   
// router.get("/", (req, res, next) => {
//     let usuario = req.user.username;    
//     console.log(usuario) 
//     res.render('home', {usuario:usuario})
// }) 
const isAuthByJWT = (req, res, next) => {
    // const authHeader = req.headers['authorization'];
    // const token = authHeader && authHeader.split(' ')[1];
    // console.log('authHeader es:',authHeader)
    const token = req.cookies.token;
    const secretWord = process.env.SECRET;   
    if(token == null) {
        res.redirect('/api/login');    
        return res.sendStatus(401);
    }        

    jwt.verify(token, secretWord, (err, user) => {
        if(err) {
            res.clearCookie('token')
            res.clearCookie('user')
            res.redirect('/api/login');  
            return res.sendStatus(403); 
        }
        req.user = user;
        next();
    });
}
// isAuthByJWT,
router.get('/', isAuthByJWT,(req, res, next) => {     
    console.log(req.user) 
    const user = req.cookies.user
    res.render('home', {usuario: user});
})

module.exports = router; 
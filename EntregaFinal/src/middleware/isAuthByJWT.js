const jwt = require('jsonwebtoken');

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

module.exports = { isAuthByJWT }
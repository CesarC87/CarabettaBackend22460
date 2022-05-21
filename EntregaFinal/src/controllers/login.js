const { User } = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const JWTlogin = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const secret = process.env.SECRET
    const user = await User.findOne({email: email});

    if(!user) {
        return res.status(401).send({
            message: "No se encontró el usuario"
        })
    }else if (user && bcrypt.compareSync(password, user.password)){
        const token = jwt.sign({            
                userId: user._id,
                isAdmin: user.isAdmin            
        },
        secret,
        {
            expiresIn: "1d"
        }
        );
        res.status(200).send({user: user.email, token})
    } else {
        res.status(401).send({
            message: "Auth failed"
        })
    }
}

module.exports = { JWTlogin }
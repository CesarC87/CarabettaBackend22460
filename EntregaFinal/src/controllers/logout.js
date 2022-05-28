const logOut = async (req, res, next) => {
    res.clearCookie('token')
    res.clearCookie('user')    
    // res.redirect('/api/login')
    return res.status(200).send({
        message: "Logout exitoso"
    })
}

module.exports = { logOut } 
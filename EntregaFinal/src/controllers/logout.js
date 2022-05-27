const logOut = async (req, res, next) => {
    res.clearCookie('token')
    res.clearCookie('user')    
    return res.status(200).send({
        message: "Logout exitoso"
    })
}

module.exports = { logOut } 
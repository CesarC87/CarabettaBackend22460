// const isAuth = (req, res, next) => {
//   req.isAuthenticated() && next();
//   res.redirect("/login");
// };
const { User } = require('../models/users');
const bcrypt = require('bcrypt');

const getUser = async (req, res, next) => {
  try {
    const usersList = await User.find().select('-password');    
    !usersList ? res.status(404).json({ message: "No hay usuarios" }) : res.status(200).json(usersList);
  } catch (error) {
    console.log(error)
  }
};
const postUser = async (req, res, next) => {
  const { name, email, password, isAdmin } = req.body;
  let newUser = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
    isAdmin
  })
  newUser = await newUser.save()
  !newUser ? res.status(404).json({ message: "No se pudo crear el usuario" }) : res.status(200).json(newUser);
}

const isNotAuth = (req, res, next) => {
  !req.isAuthenticated() ? next() : res.redirect('/api/registroFail')
};
const isAuth = (req, res, next) => {
  req.isAuthenticated() ? next() : res.redirect('/api/registro')
};

module.exports = { isAuth, isNotAuth, getUser, postUser };

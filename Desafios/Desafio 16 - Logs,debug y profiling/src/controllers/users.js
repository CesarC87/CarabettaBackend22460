// const isAuth = (req, res, next) => {
//   req.isAuthenticated() && next();
//   res.redirect("/login");
// };

const isNotAuth = (req, res, next) => {
  !req.isAuthenticated() ? next() : res.redirect('/api/registroFail')
};
const isAuth = (req, res, next) => {
  req.isAuthenticated() ? next() : res.redirect('/api/registro')
};

module.exports = { isAuth, isNotAuth };

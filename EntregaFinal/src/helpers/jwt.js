const expressJWT = require("express-jwt");

const authJWT = () => {
  const secret = process.env.SECRET;
  return expressJWT({
    secret: secret,
    algorithms: ["HS256"],
    // credentialsRequired: false,
  }).unless({
    path: ["/api/login", "/api/registro"],
  });
};

const isRevoked = (req, payload, done) => {
    !payload.isAdmin ? done(null, true) : done()
}

module.exports = { authJWT, isRevoked };

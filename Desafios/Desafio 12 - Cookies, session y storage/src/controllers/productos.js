const { OnMariaDB } = require('../models/mariaDB');

const saveProducts = (req, res, next) => {
    let message = req.body;
    OnMariaDB(message)
    res.json(message)
    console.log(message);
  }

  module.exports = { saveProducts }
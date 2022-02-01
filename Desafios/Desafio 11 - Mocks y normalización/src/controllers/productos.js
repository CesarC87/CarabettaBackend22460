const { OnMariaDB } = require('../models/mariaDB');

const saveProducts = (req, res, next) => {
    let message = req.body;
    OnMariaDB(message)
    res.json(req.body)
    console.log(req.body);
  }

  module.exports = { saveProducts }
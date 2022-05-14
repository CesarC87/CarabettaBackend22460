const { SqLite3 } = require('../models/sqlite3');

const saveMessages = (req, res, next) => {
    let message = req.body;
    SqLite3(message)
    res.json(req.body)
    console.log(req.body);
  }

  module.exports = { saveMessages }
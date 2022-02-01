const { MongoDB } = require('../models/mongoDB');

const saveMessagesNew = (req, res, next) => {
    let message = req.body;
    MongoDB(message)
    res.json(req.body)
    console.log(req.body);
  }

  module.exports = { saveMessagesNew }
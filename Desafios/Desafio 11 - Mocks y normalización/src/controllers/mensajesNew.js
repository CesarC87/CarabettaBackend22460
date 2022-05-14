const { MongoDB } = require('../models/mongoDB');

const saveMessagesNew = (req, res, next) => {
  try {
      let message = req.body;
      MongoDB(message)
      res.json({
        'status' : 200,
        'message' : 'Exito total',
        'object' : message
      })      
    } catch (error) {
      res.json({
        'status' : 400,
        'message' : 'Fracaso total'        
      })            
    }
    // console.log(message);
  }

  module.exports = { saveMessagesNew }
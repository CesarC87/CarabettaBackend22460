const { MongoDB } = require('../models/mongoDB');

const saveMessagesNew = (req, res, next) => {
  try {
    let message = req.body;
    MongoDB(message)
    res.json({
      'status' : 200,
      'message' : 'Recibido',
      'object' : message
    })      
  } catch (error) {
    res.json({
      'status' : 400,
      'message' : 'Algo falló'        
    })            
  } 
}

  module.exports = { saveMessagesNew }
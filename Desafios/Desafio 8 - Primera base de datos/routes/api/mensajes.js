const express = require("express");
const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
const { SqLite3 } = require('../../models/sqlite');

router.post("/", (req, res, next) => {
    let message = req.body;
    SqLite3(message)
    res.json(req.body)
    console.log(req.body);
  });

  module.exports = router;
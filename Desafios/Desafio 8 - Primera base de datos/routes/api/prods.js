const express = require("express");
const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
const { OnMariaDB } = require('../../models/mariaDB');

router.post("/", (req, res, next) => {
    let prod = req.body;
    OnMariaDB(prod)
    res.json(req.body)
    // console.log(req.body);
  });

  module.exports = router;
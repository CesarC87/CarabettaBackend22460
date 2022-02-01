const express = require("express");
const app = express();
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({extended: true}))

module.exports = router
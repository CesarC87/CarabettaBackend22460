const express = require("express");
const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res, next) => {
   res.sendFile("C:/Users/carab/Desktop/Stuff/CoderHouse - BackEnd 22460/carabetta-backend22460/Desafios/Desafio 6 - Sockets/public/index.html")
  });

  module.exports = router;
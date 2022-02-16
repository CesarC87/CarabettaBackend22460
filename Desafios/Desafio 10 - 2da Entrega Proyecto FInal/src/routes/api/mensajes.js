const { Router } = require("express");
const router = Router();
const { saveMessages } = require("../../controllers/mensajes");

router.post("/", saveMessages);

module.exports = router;

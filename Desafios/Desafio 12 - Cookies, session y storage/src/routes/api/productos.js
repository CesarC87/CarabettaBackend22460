const { Router } = require("express");
const router = Router();
const { saveProducts } = require("../../controllers/productos");

router.post("/", saveProducts);

module.exports = router;

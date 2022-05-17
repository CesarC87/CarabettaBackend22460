const { Router } = require("express");
const router = Router();
const { saveProducts, getProducts} = require("../../controllers/productos");

// router.get("/", getProducts)
router.post("/", saveProducts);

module.exports = router;

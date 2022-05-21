const { Router } = require('express');
const router = Router();
const { getProducts, postProducts, deleteProducts } = require('../../controllers/productsEcommerce');

router.get("/", getProducts)
router.post("/", postProducts);
router.delete("/:id", deleteProducts)

module.exports = router;
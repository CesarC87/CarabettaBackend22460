const { Router } = require('express');
const router = Router();
const { getProducts, postProducts, deleteProducts } = require('../../controllers/productsEcommerce');
const { isAuthByJWT } = require ('../../middleware/isAuthByJWT');

router.get("/", isAuthByJWT, getProducts)
router.post("/", postProducts);
router.delete("/:id", deleteProducts)

module.exports = router;
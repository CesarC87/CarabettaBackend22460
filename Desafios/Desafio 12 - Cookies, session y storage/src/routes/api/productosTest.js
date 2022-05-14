const { Router } = require("express");
const router = Router();
const { saveMessagesNew } = require("../../controllers/mensajesNew");
const { getFakeProducts } = require("../../controllers/productosFake");

router.get('/', getFakeProducts)
router.post('/', saveMessagesNew);

module.exports = router;

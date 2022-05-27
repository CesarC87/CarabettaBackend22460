const { Router } = require('express');
const router = Router();
const { logOut } = require('../../controllers/logout');
const path = require('path');

router.get("/", logOut)


module.exports = router;
const { Router } = require('express');
const router = Router();
const { getUser, postUser } = require('../../controllers/users');

router.get("/", getUser)
router.post("/", postUser);

module.exports = router;
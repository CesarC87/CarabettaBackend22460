const { Router } = require('express');
const router = Router();
const { getUser, postUser, deleteUser } = require('../../controllers/users');

router.get("/", getUser)
router.post("/", postUser);
router.delete("/:id", deleteUser)

module.exports = router;
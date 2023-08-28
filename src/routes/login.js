const express = require("express");
const router = express.Router();
const controller = require("./../controllers/login.controllers");
router.get("/register",controller.register);
router.post('/register',controller.postRegister);

module.exports = router;
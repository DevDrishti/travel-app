const express = require('express');
const router = express.Router()
const par = require("body-parser");
//const validate=require("../middleware/auth")
const {
    sign,
    login
} = require("../controller/userData")

router.route("/signup").post(sign)
router.route("/login").post(login)
module.exports = router

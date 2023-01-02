const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware");
const { static: ctrl } = require("../../controllers");

router.get("/add", ctrl.addStatic);

module.exports = router;

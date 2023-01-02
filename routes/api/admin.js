const express = require("express");
const router = express.Router();
const { auth, authAdmin } = require("../../middleware");
const { admin: ctrl } = require("../../controllers");

router.get("/statistic/general", authAdmin, ctrl.getStatic);
router.get("/statistic/add", ctrl.addStatic);
router.get("/users/all", authAdmin, ctrl.getUsers);
router.delete("/users/remove/:userId", authAdmin, ctrl.removeUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const { validation, auth } = require("../../middlewares/index");
const { auth: ctrl } = require("../../controllers/index");
const { registerJoiSchema, loginJoiSchema } = require("../../schemas");

router.post("/signup", validation(registerJoiSchema), ctrl.register);
router.post("/login", validation(loginJoiSchema), ctrl.login);
router.get("/logout", auth, ctrl.logout);

module.exports = router;

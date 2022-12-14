const express = require("express");
const router = express.Router();
const { validation, auth, upload } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const { subJoiSchema, emailJoiSchema } = require("../../schemas");

router.get("/current", auth, ctrl.getCurrent);
router.get("/verify/:verifyToken", ctrl.verifyEmail);
router.get("/favorite/get", auth, ctrl.getFavoriteList);
router.delete("/favorite/remove/:movieId", auth, ctrl.removeFavoriteMovie);
router.patch("/avatars", auth, upload.single("avatar"), ctrl.updateAvatar);
router.post("/favorite/add", auth, ctrl.addFavoriteMovie);
router.post("/verify", validation(emailJoiSchema), ctrl.verificationByRequest);
router.patch(
  "/:userId/subscription",
  validation(subJoiSchema),
  ctrl.updateSubscription
);

module.exports = router;

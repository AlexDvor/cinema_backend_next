const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware");
const { users: ctrl } = require("../../controllers");

router.get("/current/user", auth, ctrl.getCurrent);
router.get("/profile", auth, ctrl.getProfile);
router.post("/profile/update", auth, ctrl.resetPassword);
router.get("/profile/favorites", auth, ctrl.getFavoriteList);
router.post("/profile/favorite/movies/toggle", auth, ctrl.toggleFavoriteMovie);
router.post("/profile/favorite/actor/toggle", auth, ctrl.toggleFavoriteActor);

module.exports = router;

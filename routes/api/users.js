const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");

router.get("/current/user", auth, ctrl.getCurrent);
router.get("/profile", auth, ctrl.getProfile);
router.get("/profile/favorites", auth, ctrl.getFavoriteList);
router.delete("/favorite/remove/:movieId", auth, ctrl.removeFavoriteMovie);
router.post("/favorite/add", auth, ctrl.addFavoriteMovie);

module.exports = router;

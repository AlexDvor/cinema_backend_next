const getCurrent = require("./getCurrent");
const updateSubscription = require("./updateSubscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const verificationByRequest = require("./verificationByRequest");
const addFavoriteMovie = require("./addFavoriteMovie");
const getFavoriteList = require("./getFavoriteList");
const removeFavoriteMovie = require("./removeFavoriteMovie");

module.exports = {
  getCurrent,
  updateSubscription,
  updateAvatar,
  verifyEmail,
  verificationByRequest,
  addFavoriteMovie,
  getFavoriteList,
  removeFavoriteMovie,
};

const getCurrent = require("./getCurrent");
const toggleFavoriteMovie = require("./toggleFavoriteMovie");
const toggleFavoriteActor = require("./toggleFavoriteActor");
const toggleFavoriteTv = require("./toggleFavoriteTv");
const getFavoriteList = require("./getFavoriteList");
const getProfile = require("./getProfile");
const resetPassword = require("./resetPassword");

module.exports = {
	getCurrent,
	getFavoriteList,
	getProfile,
	toggleFavoriteActor,
	toggleFavoriteMovie,
	toggleFavoriteTv,
	resetPassword,
};

const getCurrent = require("./getCurrent");
const toggleFavoriteMovie = require("./toggleFavoriteMovie");
const toggleFavoriteActor = require("./toggleFavoriteActor");
const getFavoriteList = require("./getFavoriteList");
const getProfile = require("./getProfile");
const resetPassword = require("./resetPassword");

module.exports = {
	getCurrent,
	getFavoriteList,
	getProfile,
	toggleFavoriteActor,
	toggleFavoriteMovie,
	resetPassword,
};

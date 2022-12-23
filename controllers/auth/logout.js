const { User, RefreshToken } = require("../../models");

const logout = async (req, res, next) => {
	try {
		const { _id } = req.user;
		// await User.findByIdAndUpdate(_id, { accessToken: null });
		// await RefreshToken.findByIdAndRemove({ user: _id });
		res.status(204).json();
	} catch (error) {
		next(error);
	}
};

module.exports = logout;

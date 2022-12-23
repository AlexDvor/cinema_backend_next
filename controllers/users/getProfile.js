const { User } = require("../../models");

const getProfile = async (req, res, next) => {
	const { _id } = req.user;

	try {
		const user = await User.findOne({ _id });
		res.json({
			status: "success",
			code: 200,
			user: {
				email: user.email,
				isAdmin: user.isAdmin,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getProfile;

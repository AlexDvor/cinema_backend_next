const { User } = require("../../models");

const getCurrent = async (req, res) => {
	const { _id } = req.user;
	const user = await User.findOne({ _id });

	res.json({
		status: "success",
		code: 200,
		user: {
			email: user.email,
			isAdmin: user.isAdmin,
		},
	});
};

module.exports = getCurrent;

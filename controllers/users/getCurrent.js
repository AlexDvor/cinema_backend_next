const { User } = require("../../models");

const getCurrent = async (req, res) => {
	const { _id } = req.user;
	const result = await User.findOne({ _id });

	res.json({
		status: "success",
		code: 200,
		user: {
			email: result.email,
		},
	});
};

module.exports = getCurrent;

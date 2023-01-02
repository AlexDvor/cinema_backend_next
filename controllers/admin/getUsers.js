const { User } = require("../../models");

const getUsers = async (req, res, next) => {
	try {
		const allUser = await User.find({});

		res.json({
			status: "success",
			code: 200,
			data: allUser,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getUsers;

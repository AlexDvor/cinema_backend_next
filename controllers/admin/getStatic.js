const { Static } = require("../../models");
const { User } = require("../../models");

const { STATIC_BASE_ID } = process.env;

const getStatic = async (req, res, next) => {
	try {
		const statistic = await Static.findById(STATIC_BASE_ID);
		const allUser = await User.find({});

		res.json({
			status: "success",
			code: 200,
			data: {
				guests: statistic.guests,
				authUsers: allUser.length,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = getStatic;

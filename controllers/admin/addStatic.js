const { Static } = require("../../models");

const { STATIC_BASE_ID } = process.env;

const addStatic = async (req, res, next) => {
	try {
		const statistic = await Static.findById(STATIC_BASE_ID);
		const results = statistic.guests;
		const updateResult = Number(results) + 1;

		await Static.findByIdAndUpdate(STATIC_BASE_ID, { guests: updateResult });
		res.json({
			message: "Updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

module.exports = addStatic;

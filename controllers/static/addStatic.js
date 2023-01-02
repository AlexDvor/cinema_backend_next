const { Static } = require("../../models");

const register = async (req, res, next) => {
	const DB_ID = "63b30450c7678c2a98b282b0";
	try {
		const statistic = await Static.findById(DB_ID);
		const results = statistic.guests;
		const updateResult = Number(results) + 1;

		await Static.findByIdAndUpdate(DB_ID, { guests: updateResult });
		res.json({
			message: "Updated successfully",
		});
	} catch (error) {
		next(error);
	}
};

module.exports = register;

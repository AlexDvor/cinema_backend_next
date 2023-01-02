const { User } = require("../../models");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const removeUserById = async (req, res, next) => {
	try {
		const { userId } = req.params;

		const isValidId = mongoose.Types.ObjectId.isValid(userId);

		if (!isValidId) throw new NotFound(`User with id: ${userId} not found`);

		const result = await User.findByIdAndRemove({ _id: userId });

		if (!result) {
			throw new NotFound(`User with id: ${userId} not found`);
		}

		res.status(200).json({ message: "User deleted" });
	} catch (error) {
		next(error);
	}
};

module.exports = removeUserById;

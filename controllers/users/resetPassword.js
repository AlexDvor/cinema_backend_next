const { Unauthorized } = require("http-errors");
const { User } = require("../../models");
const bcrypt = require("bcrypt");

const resetPassword = async (req, res, next) => {
	try {
		const { email, currentPassword, newPassword } = req.body;
		const user = await User.findOne({ email });
		if (!user || !user.comparePassword(currentPassword))
			throw new Unauthorized("Enter please your current password");

		const hashPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10));

		await User.findByIdAndUpdate(user._id, {
			password: hashPassword,
		});

		res.json({
			status: "success",
			code: 200,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = resetPassword;

const { Unauthorized } = require("http-errors");
const { User } = require("../../models");

const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user || !user.comparePassword(password))
			throw new Unauthorized("Email or password is wrong");

		const payload = {
			id: user._id,
		};
		const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 });
		await User.findByIdAndUpdate(user._id, { token });
		res.json({
			status: "success",
			code: 200,
			user: {
				email: user.email,
				isAdmin: user.isAdmin,
			},
			accessToken: token,
			refreshToken: null,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = login;

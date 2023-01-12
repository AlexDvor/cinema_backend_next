const { Unauthorized } = require("http-errors");
const { User, RefreshToken } = require("../../models");
const config = require("../../config/auth.config");

const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });

		if (!user || !user.comparePassword(password))
			throw new Unauthorized("Email or password is wrong");

		const payload = {
			id: user._id,
		};
		const accessToken = jwt.sign(payload, config.secret_key, {
			expiresIn: config.jwtExpiration,
		});

		const hasRefreshToken = await RefreshToken.findOne({ user: user._id });

		if (!hasRefreshToken) {
			const refreshToken = await RefreshToken.createToken(user);
			await User.findByIdAndUpdate(user._id, { accessToken });
			res.json({
				status: "success",
				code: 200,
				user: {
					email: user.email,
					isAdmin: user.isAdmin,
				},
				accessToken,
				refreshToken,
			});
		}
		res.json({
			status: "success",
			code: 200,
			user: {
				email: user.email,
				isAdmin: user.isAdmin,
			},
			accessToken,
			refreshToken: hasRefreshToken.token,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = login;

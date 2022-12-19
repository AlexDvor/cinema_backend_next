const { Conflict } = require("http-errors");
const { User, RefreshToken } = require("../../models");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require("../../config/auth.config");

const register = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user) throw new Conflict(`This email in use`);

		const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

		const newUser = await User.create({
			email,
			password: hashPassword,
		});
		const payload = {
			id: newUser._id,
		};
		const token = jwt.sign(payload, config.secret_key, {
			expiresIn: config.jwtExpiration,
		});

		const refreshToken = await RefreshToken.createToken(newUser);
		await User.findByIdAndUpdate(newUser._id, {
			accessToken: token,
			refreshToken: refreshToken,
		});

		res.status(201).json({
			status: "success",
			code: 201,
			user: {
				email: newUser.email,
				isAdmin: newUser.isAdmin,
			},
			accessToken: token,
			refreshToken: refreshToken,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = register;

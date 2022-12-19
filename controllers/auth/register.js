const { Conflict } = require("http-errors");
const { User } = require("../../models");

const gravatar = require("gravatar");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require("../../config/auth.config");

const register = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (user) throw new Conflict(`This email in use`);

		const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
		const avatarURL = gravatar.url(email);
		const newUser = await User.create({
			email,
			password: hashPassword,
			avatarURL,
		});
		const payload = {
			id: newUser._id,
		};
		const token = jwt.sign(payload, config.secret_key, {
			expiresIn: config.jwtExpiration,
		});
		await User.findByIdAndUpdate(newUser._id, { accessToken: token });

		res.status(201).json({
			status: "success",
			code: 201,
			user: {
				email: newUser.email,
				isAdmin: newUser.isAdmin,
				accessToken: token,
				refreshToken: null,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = register;

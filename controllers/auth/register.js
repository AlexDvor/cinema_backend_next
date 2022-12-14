const { Conflict } = require("http-errors");
const { User } = require("../../models");
const { nanoid } = require("nanoid");
const gravatar = require("gravatar");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;
		const user = await User.findOne({ email });
		if (user) throw new Conflict(`This email in use`);
		const verifyToken = nanoid();
		const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
		const avatarURL = gravatar.url(email);
		const result = await User.create({
			name,
			email,
			password: hashPassword,
			avatarURL,
			verifyToken,
		});

		// const mail = {
		//   to: email,
		//   subject: "Email confirmation",
		//   html: `<a  href="https://watchentrailer.herokuapp.com/api/users/verify/${verifyToken}" target="_blank">Confirm your email</a>`,
		// };

		// await sendEmail(mail);

		res.status(201).json({
			status: "success",
			code: 201,
			user: {
				name: result.name,
				email: result.email,
				verifyToken: result.verifyToken,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = register;

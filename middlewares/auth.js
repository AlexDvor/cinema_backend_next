const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { SECRET_KEY } = process.env;
const { TokenExpiredError } = jwt;

const auth = async (req, res, next) => {
	const { authorization = "" } = req.headers;

	const [bearer, token] = authorization.split(" ");
	try {
		if (!token) throw new Forbidden("No token provided!");
		if (bearer !== "Bearer") {
			throw new Unauthorized("Not authorized");
		}

		const { id } = jwt.verify(token, SECRET_KEY);
		const user = await User.findById(id);

		if (!user || !user.accessToken) {
			throw new Unauthorized("Not authorized");
		}

		req.user = user;

		next();
	} catch (error) {
		if (error.message === "Invalid signature") {
			error.status = 401;
		}
		if (error instanceof TokenExpiredError) {
			error.status = 401;
			error.message = "Unauthorized! Access Token was expired!";
		}
		next(error);
	}
};

module.exports = auth;

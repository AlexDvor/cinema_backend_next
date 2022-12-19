const { RefreshToken, User } = require("../../models");
const config = require("../../config/auth.config");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res, next) => {
	const { refreshToken: requestToken } = req.body;

	if (!requestToken) {
		return res.status(403).json({ message: "Refresh Token is required!" });
	}

	try {
		const dataToken = await RefreshToken.findOne({ token: requestToken });

		if (!dataToken) {
			res.status(403).json({ message: "Refresh token is not in database!" });
			return;
		}

		if (RefreshToken.verifyExpiration(dataToken)) {
			RefreshToken.findByIdAndRemove(dataToken._id, {
				useFindAndModify: false,
			}).exec();

			res.status(403).json({
				message: "Refresh token was expired. Please make a new signin request",
			});
			return;
		}
		const userId = dataToken.user;

		let newAccessToken = jwt.sign(
			{ id: dataToken.user._id },
			config.secret_key,
			{
				expiresIn: config.jwtExpiration,
			}
		);

		await User.findByIdAndUpdate(userId, { accessToken: newAccessToken });

		return res.status(200).json({
			accessToken: newAccessToken,
			refreshToken: dataToken.token,
		});
	} catch (err) {
		next(err);
	}
};

module.exports = refreshToken;
